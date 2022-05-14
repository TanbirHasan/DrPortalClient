import React, { Children } from 'react';
import Buttonlink from './Buttonlink';

const Services = ({service,setTreatment}) => {
    const {name , slots} = service;
    return (
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title flex justify-center">{name}</h2>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span>No slots available</span>
            )}
            <p>{slots.length} seats available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white uppercase"
                onClick={() => setTreatment(service)}
                disabled={slots.length === 0}
              >
                Book Appointment
              </label>
              {/* <button
                class="btn btn-secondary text-white uppercase"
                onClick={() => setTreatment(service)}
                disabled={slots.length === 0}
              >
                {Children}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;