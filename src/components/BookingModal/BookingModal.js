import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({bookingItems}) => {

    const {resale_price} = bookingItems;
    const {user} = useContext(AuthContext);


    const handleBooking = (event) => {
        
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle text-black" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bookingItems?.title}</h3>

                    <form  className="space-y-6 pt-8">
                        <div className="space-y-1 text-sm">
                            <input type="text" name="date" id="date" disabled defaultValue={user?.displayName}  className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="email" disabled defaultValue={user?.email}  name="email" id="Email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                        <input type="text" name="names" disabled  id="name" defaultValue={resale_price} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                       
                        <div className="space-y-1 text-sm">
                            <input type="text" name="number" id="number" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="mettingLocations" id="mettingLocations" placeholder="meeting location" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                       
                        <button type='submit' className="block w-full p-3 text-center rounded-sm text-white bg-gradient-to-r from-primary to-secondary">SUBMIT</button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;