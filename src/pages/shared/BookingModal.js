import React from 'react';
import { format } from "date-fns";

const BookingModal = ({treatment,date,setTreatment}) => {
    const {name,slots} = treatment;


    const handlebooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(slot,name,email);

        setTreatment(null)


    }
    return (
      <div>
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <label
              for="booking-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="font-bold text-lg text-secondary">
              Booking for : {name}
            </h3>
            <form className="flex flex-col items-center" onSubmit={handlebooking}>
              <input
                type="text"
                disabled
                value={format(date, "PP")}
                className="input input-bordered w-full max-w-xs mt-5 mb-5"
              />
              <select name="slot" className="select select-bordered w-full max-w-xs mb-5">
               {
                   slots.map(slot => <option value={slot}>{slot}</option>)
 

               }
           
              </select>
              <input
                type="text"
                name="name"

                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs mb-5"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs mb-5"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-5"
              />

              <input
                type="submit"
                value="submit"
                placeholder="Type here"
                className="btn btn-secondary w-full max-w-xs mb-5"
              />
            </form>
          
          </div>
        </div>
      </div>
    );
};

export default BookingModal;