import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {

    const {user} = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
  

    const handlerAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    ProductName: data.name,
                        email: user.email,
                        location: data.location,
                        image: imgData.data.url,
                        Phone: data.Phone,
                        price: data.price,
                        purchase: data.purchase,
                        category: data.category,
                        condition: data.condition,
                        description: data.description
                }

                 // save product information to the database
                 fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`${data.name} is added successfully`);
                        navigate('/dashboard/manageproduct')
                    })
            }
        })
    }




    return (
        <div>
            <h2 className='text-2xl font-normal mb-5'>Add A Product</h2>

            <div className='w-full m-auto  p-6 dark:bg-gray-800 mb-10 dark:text-black rounded-md'>

                <form className='container flex flex-col mx-auto ' onSubmit={handleSubmit(handlerAddProduct)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-white">Product Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full " placeholder='Product Name' />
                        {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-white">Location</span>
                        </label>
                        <input type="text" {...register("location", { required: "location is required" })} className="input input-bordered w-full " placeholder='Location' />
                        {errors.location && <p className='text-orange-400'>{errors.location?.message}</p>}
                    </div>
                   <div className='grid grid-row md:grid-cols-2 gap-2'>
                     <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-white">Phone</span>
                        </label>
                        <input type="text" {...register("Phone", { required: "phone is required" })} className="input input-bordered w-full " placeholder='phone' />
                        {errors.phone && <p className='text-orange-400'>{errors.phone?.message}</p>}
                    </div>
                    <div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-white">Images</span>
                        </label>
                        <input type="file" {...register("image", { required: "image is required" })} className="input input-bordered w-full " placeholder='phone' />
                        {errors.phone && <p className='text-orange-400'>{errors.phone?.message}</p>}
                    </div>
                    </div>

                   </div>
                    <div className='grid grid-row md:grid-cols-2 gap-2'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="text-white">Price</span>
                            </label>
                            <input type="text" {...register("price", { required: "price is required" })} className="input input-bordered w-full " placeholder='$ 000' />
                            {errors.price && <p className='text-orange-400'>{errors.price?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="text-white">Purchase Year</span>
                            </label>
                            <input type="date" {...register("purchase", { required: "purchase is required" })} className="input input-bordered w-full " placeholder='Purchase year' />
                            {errors.purchase && <p className='text-orange-400'>{errors.purchase?.message}</p>}
                        </div>
                    </div>
                    <div className='grid grid-row md:grid-cols-2 gap-2'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="text-white">Product Category</span>
                            </label>
                            <select
                                {...register("category", { required: "users is required" })}
                                className="select select-bordered w-full ">
                                <option>Microbus</option>
                                <option>Luxury Car</option>
                                <option>Electic Car</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="text-white">Condition </span>
                            </label>
                            <select
                                {...register("condition", { required: "users is required" })}
                                className="select select-bordered w-full ">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-white">Description</span>
                        </label>
                        <textarea  {...register("description", { required: "description is required" })} className="input input-bordered h-16"
                             rows="16" placeholder='Description ' />
                        {errors.description && <p className='text-orange-400'>{errors.description?.message}</p>}
                    </div>

                    <div className='flex justify-center mt-5'>
                        <input className=' className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"' value="Add Product" type="submit" />
                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddProduct;