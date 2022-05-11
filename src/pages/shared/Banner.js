import React from 'react';
import chair from "../../assets/images/chair.png"

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-screen px-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex justify-center w-2/4">
              <img
                src={chair}
                className="max-w-sm rounded-lg shadow-2xl "
                alt="movie"
              />
            </div>

            <div className=" w-2/4">
              <h1 className="text-5xl font-bold">Your new smile starts here</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-indigo-500 ...">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;