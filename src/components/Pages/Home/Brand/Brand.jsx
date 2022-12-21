import React from 'react';

const Brand = () => {

    const carCompanys = [
        {
            id: "01",
            img: "https://wallpaperaccess.com/full/1124999.jpg",
            name: "BMW Group"
        },
        {
            id: "02",
            img: "https://c8.alamy.com/comp/D6P438/rolls-royce-logo-as-an-app-icon-clipping-path-included-D6P438.jpg",
            name: "Rolls-Royce"
        },
        {
            id: "03",
            img: "https://image.cnbcfm.com/api/v1/image/104638537-GettyImages-494601164.jpg?v=1532563783",
            name: "Mazda Motor"
        },
        {
            id: "04",
            img: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGElMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            name: "Tesla Inc."
        },
        {
            id: "05",
            img: "https://1000logos.net/wp-content/uploads/2018/02/Print-Porsche-logo.jpg",
            name: "Volkswagen Group"
        },
        {
            id: "06",
            img: "https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/08/Ford-Logo-Font-1.jpg?resize=1200%2C675",
            name: "Ford Motor"
        },
    ]


    return (
        <div className='dark:bg-gray-800 dark:text-gray-100 pt-6'>
            <div className='container p-6 mx-auto space-y-8 sm:space-y-12'>
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Most Popular Brand</h2>
                    <p className="font-serif text-sm dark:text-gray-400">Every day we help the world’s leading brands create their most vehicles</p>
                </div>

                <div className="flex flex-row flex-wrap-reverse justify-center">
                    {
                        carCompanys?.map(car => <>
                            <div className="flex flex-col justify-center m-8 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={car?.img} />
                                <p className="text-xl font-semibold leading-tight">{car?.name}</p>
                            </div>
                        </>)
                    }

                </div>


            </div>
        </div>
    )
};

export default Brand;