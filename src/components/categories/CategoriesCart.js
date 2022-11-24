import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCart = ({categor}) => {

    const {cat_id} = categor;

    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
           <Link to={`/allcategory/${cat_id}`}>
           <img src={categor.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                <h2 className="text-xl font-semibold tracking-wide">{categor.name}</h2>
            </div>
           </Link>
        </div>
    );
};

export default CategoriesCart;