import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-20">
        <InfoCard
          cardtitle={"Opening Hours"}
          bgclass="bg-primary"
          img={clock}
        />
        <InfoCard
          cardtitle={"Our Location"}
          bgclass="bg-secondary"
          img={marker}
        />
        <InfoCard cardtitle={"Contact Us"} bgclass="bg-accent" img={phone} />
      </div>
    );
};

export default Info;