import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Share/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const bookings = useLoaderData();
    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-normal mb-5'>Payment {bookings?.bookingName}</h2>
            <div className='container flex flex-col w-full max-w-lg p-6 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookings={bookings}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;