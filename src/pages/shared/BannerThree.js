import React from 'react';
import doctor from "../../assets/images/doctor.png"

const BannerThree = () => {
    return (
      <div className='mb-20'>
        {/* <div className="herothree mb-5 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor}
              className="max-w-sm rounded-lg shadow-2xl w-2/4"
              alt="pic"
            />
            <div className="w-2/4 ml-20 text-white">
              <h3 className='text-secondary'>Appointment</h3>
              <h1 className="text-4xl font-bold">Make an Appointment Today</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div> */}

        <div className="herothree flex justify-evenly items-center ">
          <div className="w-2/4 mt-[-150px]">
            <img src={doctor} alt="docter pic" />
          </div>
          <div className="w-2/4 ml-20 text-white">
            <h3 className="text-secondary">Appointment</h3>
            <h1 className="text-4xl font-bold">Make an Appointment Today</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default BannerThree;