import React, { useState } from 'react';
import Footer from "../pages/shared/Footer"
import AppointmentBanner from './shared/AppointmentBanner';
import AvailableAppointments from './shared/AvailableAppointments';

const Appointment = () => {
        const [date, setDate] = useState(new Date());
    return (
        <div className='mx-20'>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppointments date={date}/>
            <Footer/>
        </div>
    );
};

export default Appointment;