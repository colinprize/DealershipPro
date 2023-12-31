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

    const cancel = async (appointment) => {

        const url = `http://localhost:8080/api/appointments/${appointment.vin}`
        const fetchConfig = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        const data = await response.json();
        console.log(data)
    }

    const finish = async (appointment) => {
        const url = `http://localhost:8080/api/appointments/${appointment.vin}`
        const fetchConfig = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        const data = await response.json();
        console.log(data)
    }

    return (
        <div>
            <h1>Service Appointments</h1>
            <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Vin</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Finish/Cancel</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.vin}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.is_vip === true ? "yes" : "no"}</td>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                            <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                            <td>{appointment.technician}</td>
                            <td>{appointment.reason}</td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>cancel(appointment)}>Cancel</button></td>
                            <td><button type="button" className="btn btn-primary" onClick={()=>finish(appointment)}>Finish</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>

    )



}

export default ServiceAppointmentList
