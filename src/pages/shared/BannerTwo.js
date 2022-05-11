import React from 'react';
import treatment from "../../assets/images/treatment.png"

const BannerTwo = () => {
    return (
      <div className='mb-20'>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              className="max-w-sm rounded-lg shadow-2xl w-2/4"
              alt="pic"
            />
            <div className='w-2/4 ml-20'>
              <h1 className="text-5xl font-bold">Exeptional Dental<br/> Care, on Your Terms</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BannerTwo;