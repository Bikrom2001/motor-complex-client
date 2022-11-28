import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const [deleteUser, setDeleteUser] = useState();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('make admin successful');
                    refetch();
                }
            })
    }


    const handlerDeleteUsers = id => {
        const proseed = window.confirm('Are you sure , you went to cancel this .User');
        if (proseed) {
            fetch(`http://localhost:5000/users/admin/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Delete successfully');
                        const remaining = deleteUser.filter(ord => ord._id !== id);
                        setDeleteUser(remaining);
                    }
                })
        }
    }



    return (
        <div>
            <h2 className='text-2xl font-normal mb-5'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>buyers/sellers</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        users?.map((user, i) =>    <tr key={user._id} >
                            <th>{i+1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                            <td>{user?.accountName}</td>
                            <td><button onClick={() => handlerDeleteUsers(user._id)} className='btn text-white btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                     }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;