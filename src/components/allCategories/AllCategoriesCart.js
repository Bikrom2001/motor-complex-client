import React from 'react';
import { Link } from 'react-router-dom';

const AllCategoriesCart = ({ allCategorie }) => {
    const { img, title, original_price, author_name, location, published_date, years_use, details, resale_price } = allCategorie;
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link className="text-sm font-semibold">{author_name}</Link>
                        <span className="text-xs dark:text-gray-400">{published_date}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="blue" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div>
                    <img src={img} alt="" className="object-cover w-full mb-4 h-40 sm:h-52 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">{details}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button aria-label="Share this post" type="button" className="text-center">
                        Resale price: <span className='text-yellow-500'>${resale_price}</span>
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="">
                        Original price: <span className='text-yellow-500'>${original_price}</span>
                    </button>
                </div>
                <div className="flex items-center justify-between pt-0">
                    <button aria-label="Share this post" type="button" className="text-center">
                        Years of use: <span className='text-yellow-500'>{years_use}</span>
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="">
                        {location}
                    </button>
                </div>
                <div className="flex flex-col justify-between space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <button className="px-6 py-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                    <button className="px-6 py-2 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default AllCategoriesCart;