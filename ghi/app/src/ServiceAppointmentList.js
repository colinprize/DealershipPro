import React, { useEffect, useState  } from 'react';

function ServiceAppointmentList () {
    const [service, setService] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if(response.ok) {
            const data = await response.json();
            setService(data.appointments);
        }

    }
}

export default ServiceAppointmentList
