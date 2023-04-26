import React, { useState } from "react";

function CustomerForm() {
    const [first_name, setFirst] = useState('');
    const [last_name, setLast] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNum] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirst(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLast(value);
    }

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handlePhoneNumChange = (event) => {
        const value = event.target.value;
        setPhoneNum(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.first_name = first_name;
        data.last_name = last_name;
        data.address = address;
        data.phone_number = phone_number;

        const CustomerUrl = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(CustomerUrl, fetchConfig)
        console.log(response)
        if(response.ok) {
            const newCustomer = await response.json()
            console.log(newCustomer)
            setFirst('');
            setLast('');
            setAddress('');
            setPhoneNum('');
        }

    }

    return (
        <>
          <div className="row">
              <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                      <h2 className="display-5 text-center"><b>Add a Customer</b></h2>
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
                              <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="Address" id="Address"  className="form-control"/>
                              <label htmlFor="name">Address</label>
                          </div>
                          <div className="form-floating mb-3">
                              <input onChange={handlePhoneNumChange} value={phone_number} placeholder="Phone Number" required type="text" name="Phone Number" id="Phone Number"  className="form-control"/>
                              <label htmlFor="name">Phone Number</label>
                          </div>
                          <button className="btn btn-primary">Create</button>
                      </form>
                  </div>
              </div>
          </div>
        </>
    )
}

export default CustomerForm;
