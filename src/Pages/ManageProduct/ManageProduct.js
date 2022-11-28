import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../components/Share/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import ManageProductCart from './ManageProductCart';

const ManageProduct = () => {

    const { user } = useContext(AuthContext);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://motor-complex-server.vercel.app/product?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = id => {
        fetch(`https://motor-complex-server.vercel.app/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product deleted successfully`)
                }

            })
    }






    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-2xl font-normal mb-5'>My Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product images</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <ManageProductCart handleDeleteDoctor={handleDeleteDoctor} i={i} product={product} key={product._id}></ManageProductCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;