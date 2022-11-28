import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-50 py-8">
            <div className="space-y-2 text-center mb">
                <h2 className="text-3xl font-bold">Our Service category</h2>
                <p className="font-serif text-sm dark:text-gray-400">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="container grid grid-cols-12 mx-auto">


                <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto rounded-md " >
                    <div className="flex flex-col items-center p-8 py-12 text-center">
                        <span>12 June 2022</span>
                        <h1 className="py-4 text-5xl font-bold">The Continued Growth of Delivery and Ride share-2022</h1>
                        <p className="pb-6">Seamlessly architect technically sound customer service without client-focused team driven opportunities without leveraged materials.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
                    <div className="pt-6 pb-4 space-y-2">
                        <span>May 24, 2022</span>
                        <h1 className="text-3xl font-bold">Automotive Tips for Delivery & Rideshare Drivers</h1>
                        <p>Holisticly strategize real-time imperatives with focus imperatives wireless catalysts.</p>
                        <Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>30 June 2022</span>
                        <h1 className="text-3xl font-bold">How long does it take to order a rent car?</h1>
                        <p>Holisticly strategize real-time imperatives with focus imperatives wireless catalysts.</p>
                        <Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;