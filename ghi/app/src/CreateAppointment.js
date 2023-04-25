import React, { useEffect, useState } from "react";

function CreateAppointment() {
    const [technician, setTechnician] = useState([])
    const [vin, setVin] = useState("")
    const [customer, setCustomer] = useState("")
    // const [date_time, setDateTime] = useState("")
    const [reason, setReason] = useState("")




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
        const Url = 'http://localhost:8100/api/technicians/';

        const response = await fetch(Url);

            if (response.ok) {
            const data = await response.json();
            setTechnician(data.technicians);
            }
    }

    useEffect(() => {fetchData();
    }, []);



}






export default CreateAppointment
