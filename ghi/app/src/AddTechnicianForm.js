import React from "react";
import { useState } from "react"

function TechnicianForm() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [employee_id, setEmployeeID ] = useState("");

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleEmployeedIDChange = (event) => {
        const value = event.target.value;
        setEmployeeID(value);
    }

    const handleSubmit = async (event) => {
        event.preventDeafult();
        const data = {}
        data.first_name = first_name;
        data.last_name = last_name;
        data.employee_id = employee_id;

        const url ="http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
    }

    return(

    )
}
export default TechnicianForm
