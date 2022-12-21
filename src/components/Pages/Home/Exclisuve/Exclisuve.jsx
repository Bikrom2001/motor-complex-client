import React from 'react';

const Exclisuve = () => {


    const datas = [
        {
            number: "01",
            title: "Most Exclisuve Vehicles",
            details: "  Purus ante parturient magnis condimentum quam sagittis. Enim elementum risus, accumsan hymenaeos lacus. Nascetur ullamcorper libero netus. Aptent eleifend auctor sociosqu libero."
        },
        {
            number: "02",
            title: "Quick Time Response",
            details: "  Purus ante parturient magnis condimentum quam sagittis. Enim elementum risus, accumsan hymenaeos lacus. Nascetur ullamcorper libero netus. Aptent eleifend auctor sociosqu libero."
        },
        {
            number: "03",
            title: "Everywhere Anytime",
            details: "  Purus ante parturient magnis condimentum quam sagittis. Enim elementum risus, accumsan hymenaeos lacus. Nascetur ullamcorper libero netus. Aptent eleifend auctor sociosqu libero."
        }
    ]


    return (
        <div className='dark:bg-gray-800 dark:text-gray-100'>
            <div className="container p-6 mx-auto space-y-8 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                   
                   {
                    datas?.map(data => <>
                    <div className='relative'>
                        <span className='text-4xl absolute opacity-20 font-bold left-[-20px] top-[-5] text-gray-300'>{data.number}</span>
                        <h3 className='mb-3 mt-3 font-semibold text-3xl'>{data.title}</h3>
                        <p className='text-justify text-gray-400'>
                         {data.details}
                        </p>
                    </div>
                    </>)
                   }
                    
               
                </div>
            </div>
        </div>
    );
};

export default Exclisuve;