import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const MyOrders = () => {


    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                  }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-2xl font-normal mb-5'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Images</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={booking?.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{booking?.bookingName}</td>
                                <td>${booking?.price}</td>
                                <td>{
                                    booking?.price && !booking?.paid && <Link to="/">
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >pay</button>
                                    </Link>
                                }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;