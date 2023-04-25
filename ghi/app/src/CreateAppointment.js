import React, { useEffect, useState } from "react";

function CreateAppointment() {
    const [technicians, setTechnicians] = useState([])
    const [technician, setTechnician] = useState("")
    const [vin, setVin] = useState("")
    const [customer, setCustomer] = useState("")
    // const [date_time, setDateTime] = useState("")
    const [reason, setReason] = useState("")

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }


    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.vin = vin;
        data.customer = customer;
        data.reason = reason;

        const url = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setVin("");
            setCustomer("");
            setReason("");
        }

    }

    const fetchData = async() => {
        const Url = 'http://localhost:8080/api/technicians/';

        const response = await fetch(Url);

            if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
            }
    }

    useEffect(() => {fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1 className="text-center">Make an Appointment</h1>
                    <form id="create-appointment-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange}
                                required type="vin"
                                name ="vin"
                                placeholder="vin"
                                id="vin"
                                className="form-control"
                                value={vin}
                            />
                            <label htmlFor="vin">VIN Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleCustomerChange}
                                required type="customer"
                                name="customer"
                                id="customer"
                                className="form-control"
                                value={customer}
                            />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleReasonChange}
                                required type="reason"
                                name="reason"
                                id="reason"
                                className="form-control"
                                value={reason}
                            />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="mb-3">
                            <select
                                onChange={handleTechnicianChange}
                                required type="technician"
                                id="technician"
                                className="form-select"
                                value={technician} >
                                <option value="">Technician</option>
                                {technicians.map((technician) => {
                                    return (
                                        <option key={technician.id} value={technician.id}>
                                            {technician.first_name + " " + technician.last_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create Technician</button>
                    </form>
                </div>
            </div>
        </div>
    );

}






export default CreateAppointment
