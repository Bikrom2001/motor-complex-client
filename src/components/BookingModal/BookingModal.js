import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ bookingItems, setbookingItems }) => {

    const { resale_price, img } = bookingItems;
    const { user } = useContext(AuthContext);



    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const mettingLocations = form.mettingLocations.value;
        const number = form.number.value;


        const booking = {
            loginEmail: user.email,
            userName: user.displayName,
            bookingName: bookingItems.title,
            mettLocation: mettingLocations,
            number,
            price: resale_price,
            image: img
        }


        fetch('https://motor-complex-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setbookingItems(null);
                    toast.success('Booking confirmed', { autoClose: '1500' });

                }
                else {
                    toast.error(data.message, { autoClose: '1500' });
                }
            })



    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle text-black" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bookingItems?.title}</h3>

                    <form onSubmit={handleBooking} className="space-y-6 pt-8">
                        <div className="space-y-1 text-sm">
                            <input type="text" name="date" id="date" disabled defaultValue={user?.displayName} className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="email" disabled defaultValue={user?.email} name="email" id="Email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="names" disabled id="name" defaultValue={resale_price} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <input required type="text" name="number" id="number" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input required type="text" name="mettingLocations" id="mettingLocations" placeholder="meeting location" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>

                        <button type='submit' className="block w-full p-3 text-center rounded-sm text-white bg-gradient-to-r from-primary to-secondary">SUBMIT</button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;