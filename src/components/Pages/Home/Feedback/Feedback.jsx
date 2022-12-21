import React from 'react';
import cars from '../../../../accestes/8.png';
const Feedback = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 py-8">
            <div className='container p-6 mx-auto space-y-8 sm:space-y-12'>
                <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="">
                        <img src={cars} alt="cars" className="rounded-lg  aspect-video sm:min-h-96" />
                    </div>

                    <div className="">
                        <h2 className='text-4xl font-semibold mb-9'>Customer Feedback</h2>
                        <div className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className='text-gray-400 px-6 italic'>
                                I really had my doubts at first. I asked for a quote online and the next day I was contacted by a sales representative. The quote came out high so the salesman did a good job to find me a good deal.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <div class="flex items-center mt-8">
                            <img class="object-cover rounded-full w-16 h-16" src="https://source.unsplash.com/80x80/?portrait?1" alt="" />

                            <div class="mx-4">
                                <h1 class="font-semibold text-blue-500">Mia Brown</h1>
                                <span class="text-sm text-gray-400">Director Of Mordern Trade Ltd</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Feedback;