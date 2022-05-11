import React from 'react';
import quote from "../../assets/icons/quote.svg"
import people from "../../assets/images/people1.png"

const Testimonial = () => {
    return (
      <div>
        <div className="flex justify-between px-10">
          <div>
            <h3 className="text-1xl">Testimonial</h3>
            <h2 className="text-2xl">What Our Patient Says</h2>
          </div>
          <div>
            <img src={quote} alt="quotemark" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-12 mt-10 mb-10">
            <div class="card lg:card-top bg-base-100 shadow-xl">
              <div class="card-body flex flex-col ">
                <p>
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using Content here, content
                </p>
                <div className="flex items-center">
                  <img src={people} alt="people" className="mr-10" />
                  <div className="flex flex-col">
                    <h5>Winson Harry</h5>
                    <h5>California</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:card-top bg-base-100 shadow-xl">
              <div class="card-body flex flex-col ">
                <p>
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using Content here, content
                </p>
                <div className="flex items-center">
                  <img src={people} alt="people" className="mr-10" />
                  <div className="flex flex-col">
                    <h5>Winson Harry</h5>
                    <h5>California</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:card-top bg-base-100 shadow-xl">
              <div class="card-body flex flex-col">
                <p>
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using Content here, content
                </p>
                <div className="flex items-center">
                  <img src={people} alt="people" className="mr-10" />
                  <div className="flex flex-col">
                    <h5>Winson Harry</h5>
                    <h5>California</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;