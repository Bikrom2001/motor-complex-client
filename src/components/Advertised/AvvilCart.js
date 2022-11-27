import React from 'react';
import { Link } from 'react-router-dom';

const AvvilCart = ({ productt }) => {
    return (
        <article className="flex flex-col dark:bg-gray-900">
            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={productt.image} />
            <div className="flex flex-col flex-1 p-6">
                <Link  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{productt.category}</Link>
               
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{productt.ProductName}</h3>
                <p className="dark:text-gray-100">{productt.description}</p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>{productt.purchase}</span>
                    <span>${productt.price}</span>
                </div>
            </div>
        </article>
    );
};

export default AvvilCart;