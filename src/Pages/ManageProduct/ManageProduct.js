import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../components/Share/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';

const ManageProduct = () => {

    const { user } = useContext(AuthContext);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/product?email=${user?.email}`, {
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


    if(isLoading){
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
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => 
                                <tr>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar online">
                                        <div className="w-14 rounded-full">
                                            <img src={product.image} alt='' />
                                        </div>
                                    </div></td>
                                    <td>{product.price}</td>
                                    <td>{product.location}</td>
                                    <td><button className='btn btn-sm btn-error'>Delete</button></td>
                                    <td>Blue</td>
                                </tr>
        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;