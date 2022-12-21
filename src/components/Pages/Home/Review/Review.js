import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {

    const blogs = [
        {
            id: "01",
            title: " Neque volutpat facilisis sollicit mus tempus.",
            img: "https://images.pexels.com/photos/4062463/pexels-photo-4062463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details: "Libero consectetuer fames montes habitasse lorem hendrerit dictumst sit blandit. Commodo justo. Blandit lobortis metus et.",
            time: "Feb 18th 2021",
        },
        {
            id: "02",
            title: " Neque volutpat facilisis sollicit mus tempus.",
            img: "https://images.pexels.com/photos/794435/pexels-photo-794435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details: "Libero consectetuer fames montes habitasse lorem hendrerit dictumst sit blandit. Commodo justo. Blandit lobortis metus et.",
            time: "Feb 18th 2021",
        },
        {
            id: "03",
            title: " Neque volutpat facilisis sollicit mus tempus.",
            img: "https://images.pexels.com/photos/898336/pexels-photo-898336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details: "Libero consectetuer fames montes habitasse lorem hendrerit dictumst sit blandit. Commodo justo. Blandit lobortis metus et.",
            time: "Feb 18th 2021",
        },
        {
            id: "04",
            title: " Neque volutpat facilisis sollicit mus tempus.",
            img: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details: "Libero consectetuer fames montes habitasse lorem hendrerit dictumst sit blandit. Commodo justo. Blandit lobortis metus et.",
            time: "Nov 20th 2022",
        },

    ]


    return (
        <section class="dark:bg-gray-800 dark:text-gray-100">
            <div class="container px-6 py-8 mx-auto">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Blogs Post </h2>
                    <p className="font-serif text-sm dark:text-gray-400">We buy and sale barand new car and also used car of any brand</p>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-6 md:mt-16 md:grid-cols-2">

                    {
                        blogs?.map(blog => <>
                            <div class="lg:flex">
                                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={blog?.img} alt="" />

                                <div class="py-1 lg:mx-6">
                                    <Link class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        <p>{blog?.title}</p>
                                    </Link>

                                    <p className='text-justify text-gray-400 mt-5 mb-3'>{blog.details}</p>

                                    <time datetime="2021-02-18" className="text-sm  text-yellow-400">{blog.time}</time>

                                </div>
                            </div>


                        </>)
                    }


                </div>
            </div>
        </section>
    );
};

export default Review;