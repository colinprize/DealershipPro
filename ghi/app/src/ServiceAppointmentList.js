import React, { useEffect, useState  } from 'react';

function ServiceAppointmentList () {
    const [appointments, setAppointments] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if(response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Service Appointments</h1>
            <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Vin</th>
                    <th>Customer</th>
                    {/* <th>Date</th> */}
                    {/* <th>Time</th> */}
                    <th>Technician</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.vin} value={appointment.vin}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer}</td>
                            {/* <td>{appointment.date_time}</td> */}
                            {/* <td>{appointment.date_time}</td> */}
                            <td>{appointment.technician}</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )






}

export default ServiceAppointmentList
