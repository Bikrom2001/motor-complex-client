import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const ManageProductCart = ({ product, i, handleDeleteDoctor }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlebookedadvertised = () => {

        const advertised = {
            ProductName: product.ProductName,
            email: user.email,
            location: product.location,
            image: product.image,
            Phone: product.Phone,
            price: product.price,
            purchase: product.purchase,
            category: product.category,
            condition: product.condition,
            description: product.description
        }


        // save product information to the database
        fetch('https://motor-complex-server.vercel.app/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(advertised)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`add successfully advertised`);
                navigate('/advertised');
            })
    }




    return (
        <tr>
            <th>{i + 1}</th>
            <td><div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src={product.image} alt='' />
                </div>
            </div></td>
            <td>{product.price}</td>
            <td>{product.location}</td>
            <td>{product.purchase}</td>
            <td><button onClick={() => handleDeleteDoctor(product._id)} className='btn btn-sm btn-error'>Delete</button></td>
            <td><button onClick={handlebookedadvertised} className='btn btn-sm btn-success'>advertised</button></td>
        </tr>
    );
};

export default ManageProductCart;