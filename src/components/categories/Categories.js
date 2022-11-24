import React, { useEffect, useState } from 'react';
import CategoriesCart from './CategoriesCart';

const Categories = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])



    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8 sm:space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our Service Keeps you Smile</h2>
                    <p className="font-serif text-sm dark:text-gray-400">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    category.map(categor => <CategoriesCart key={categor._id} categor={categor}></CategoriesCart>)
                }

                </div>
            </div>
        </section>
    );
};

export default Categories;