import React, { useState } from "react";

function SalesPersonForm() {
    const [first_name, setFirst] = useState('');
    const [last_name, setLast] = useState('');
    const [employee_id, setEmp] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirst(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLast(value);
    }

    const handleEmpIdChange = (event) => {
        const value = event.target.value;
        setEmp(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.first_name = first_name;
        data.last_name = last_name;
        data.employee_id = employee_id;


        const SalesPersonUrl = 'http://localhost:8090/api/salespeople/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(SalesPersonUrl, fetchConfig)
        console.log(response)
        if(response.ok) {
            const newSalesPerson = await response.json()
            console.log(newSalesPerson)
            setFirst('');
            setLast('');
            setEmp('');
        }

    }

    return (
        <>
          <div className="row">
              <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                      <h2 className="display-5 text-center"><b>Add a Sales Person</b></h2>
                      <form onSubmit={handleSubmit} id="Add a Sales Peron">
                          <div className="form-floating mb-3">
                              <input onChange={handleFirstNameChange} value={first_name} placeholder="name" required type="text" name="name" id="name"  className="form-control"/>
                              <label htmlFor="name">First Name</label>
                          </div>
                          <div className="form-floating mb-3">
                              <input onChange={handleLastNameChange} value={last_name} placeholder="name" required type="text" name="name" id="name"  className="form-control"/>
                              <label htmlFor="name">Last Name</label>
                          </div>
                          <div className="form-floating mb-3">
                              <input onChange={handleEmpIdChange} value={employee_id} placeholder="emp" required type="text" name="emp" id="emp"  className="form-control"/>
                              <label htmlFor="name">Employee Id</label>
                          </div>
                          <button className="btn btn-primary">Create</button>
                      </form>
                  </div>
              </div>
          </div>
        </>
    )
}

export default SalesPersonForm;
