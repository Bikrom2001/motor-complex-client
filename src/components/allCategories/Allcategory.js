import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import AllCategoriesCart from './AllCategoriesCart';

const Allcategory = () => {
    const allCategories = useLoaderData();
    const [bookingItems, setbookingItems] = useState(null);
    
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8 sm:space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our Service Keeps you Smile</h2>
                    <p className="font-serif text-sm dark:text-gray-400">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    allCategories.map(allCategorie => <AllCategoriesCart key={allCategorie._id} allCategorie={allCategorie} setbookingItems={setbookingItems}></AllCategoriesCart>)
                }

                </div>
            </div>
            {
                bookingItems && 
                <BookingModal bookingItems={bookingItems} key={bookingItems._id}></BookingModal>
            }
        </section>
        </div>
    );
};

export default Allcategory;