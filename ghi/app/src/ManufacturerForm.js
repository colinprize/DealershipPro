import React from "react";
import { useState } from "react"

function ManufacturerForm() {
    const [name, setName] = useState('');


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.name = name;

        const ManufactorUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(ManufactorUrl, fetchConfig)
        console.log(response)
        if(response.ok) {
            const newManufactor = await response.json()
            console.log(newManufactor)
            setName('');


        }
    }
    return (
      <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="display-5 text-center"><b>Create a manufacturer</b></h2>
                    <form onSubmit={handleSubmit} id="create-new-service-appointment">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="name" required type="text" name="name" id="name"  className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
      </>
    )
}

export default ManufacturerForm;
