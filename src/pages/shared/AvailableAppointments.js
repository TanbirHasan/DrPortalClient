import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointments = ({date}) => {
    const [services,setServices] = useState([])
    const [treatment , setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
    }, [])
    return (
      <div className='flex justify-center flex-col items-center'>
        <h3 className='text-xl text-primary' >Available appointment on : {format(date, "PP")}</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Services key={service._id} service={service} 
                 setTreatment={setTreatment}
                ></Services>)
            }
        </div>
        {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
      </div>
    );
};

export default AvailableAppointments;