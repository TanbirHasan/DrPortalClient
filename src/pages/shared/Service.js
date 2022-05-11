import React from 'react';
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";


const Service = () => {
    return (
      <div>
        <div className="text-center mb-10">
          <h3 className="text-1xl text-bold text-primary">Our Services</h3>
          <h2 className="text-2xl">Service that we provide</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-12 mb-10">
          <div class="card lg:card-top bg-base-100 shadow-xl">
            <figure>
              <img src={fluoride} alt="Album" />
            </figure>
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title text-center">Fluoride Treatment</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div>
          <div class="card lg:card-top bg-base-100 shadow-xl">
            <figure>
              <img src={cavity} alt="Album" />
            </figure>
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title">Cavity Filling</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div>
          <div class="card lg:card-top bg-base-100 shadow-xl">
            <figure>
              <img src={whitening} alt="Album" />
            </figure>
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title">Teeth whitening</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;