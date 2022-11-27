import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Share/Loading/Loading';
import AvvilCart from './AvvilCart';

const Aveillage = () => {

    // const { user } = useContext(AuthContext);

    const { data: productItems, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/advertised`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8 sm:space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our Service Keeps you Smile</h2>
                    <p className="font-serif text-sm dark:text-gray-400">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        productItems?.map(productt => <AvvilCart productt={productt} key={productt._id}></AvvilCart>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Aveillage;