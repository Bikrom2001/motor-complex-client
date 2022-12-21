import React from 'react';
import cars from '../../../../accestes/4.png';

const Features = () => {

    const datas = [
        {
            id: "01",
            title: "Experience support team",
            details: "Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius."
        },
        {
            id: "02",
            title: "Handle emergency situations",
            details: " Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius."
        },
        {
            id: "03",
            title: "Insurance Included",
            details: " Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius."
        }
    ]

    const moreDatas = [
        {
            id: "01",
            title: "Hight technology instrument",
            details: "Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius."
        },
        {
            id: "02",
            title: "Access control system",
            details: " Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius."
        },
        {
            id: "03",
            title: "Online 24/7 Available",
            details: " Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius."
        }
    ]


    return (
        <div className='dark:bg-gray-800 dark:text-gray-100 pt-10'>
            <div className="container p-6 mx-auto space-y-8 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    <div>
                        {
                            datas?.map(data => <>
                                <div className='text-right'>
                                    <div className='flex items-center gap-5 justify-end'>
                                        <h2 style={{ fontSize: '22px' }} className='font-semibold'>{data?.title}</h2>
                                        <svg style={{ marginTop: '3px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                    </div>
                                    <p className='mt-4 mb-11 text-gray-400'>
                                        {data?.details}
                                    </p>
                                </div>

                            </>)
                        }
                    </div>

                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={cars} alt="" className="mx-auto rounded-lg" />
                    </div>

                    <div>
                        {
                            moreDatas?.map(moreData => <>
                                <div>
                                    <div className='flex items-center gap-5'>
                                        <svg style={{ marginTop: '3px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                        <h2 style={{ fontSize: '22px' }} className='font-semibold'>{moreData?.title}</h2>

                                    </div>
                                    <p className='mt-4 mb-11 text-gray-400'>
                                        {moreData?.details}
                                    </p>
                                </div>


                            </>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;