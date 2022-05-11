import React from 'react';

const InfoCard = ({img,cardtitle,bgclass}) => {
    return (
      <div className="px-12">
        <div class={`card lg:card-side shadow-xl ${bgclass}`}>
          <figure className="pl-5">
            <img src={img} alt="Album" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">{cardtitle}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;