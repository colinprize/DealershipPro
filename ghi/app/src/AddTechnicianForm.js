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

    const handleEmployeeIDChange = (event) => {
        const value = event.target.value;
        setEmployeeID(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
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
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFirstName("");
            setLastName("");
            setEmployeeID("");
        }
    }


    return(
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1 className="text-center">Add a Technician</h1>
                <form id="create-vehicle-form" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input onChange={handleFirstNameChange}
                            required type="first_name"
                            name ="first_name"
                            placeholder="first_name"
                            id="first_name"
                            className="form-control"
                            value={first_name}
                        />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleLastNameChange}
                            required type="last_name"
                            name ="last_name"
                            placeholder="last_name"
                            id="last_name"
                            className="form-control"
                            value={last_name}
                        />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleEmployeeIDChange}
                            required type="employee_id"
                            name ="employee_id"
                            placeholder="employee_id"
                            id="employee_id"
                            className="form-control"
                            value={employee_id}
                        />
                        <label htmlFor="employee_id">Employee ID</label>
                    </div>
                    <button className="btn btn-primary">Create Technician</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default TechnicianForm
