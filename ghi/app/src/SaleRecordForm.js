import React, { useEffect, useState } from "react";

function SalesRecordForm() {
    const [salespeople, setSalesPeople] = useState('');
    const [salesPerson, setSalesPerson] = useState([]);
    const [customer, setCustomer] = useState('');
    const [customers, setCustomers] = useState([]);
    const [auto, setAuto] = useState('');
    const [autos, setAutos] = useState([]);
    const [price, setPrice] = useState('');

    const handlePeopleChange = (event) => {
        const value = event.target.value;
        setSalesPeople(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setAuto(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.sales_person = salespeople;
        data.customer = customer;
        data.automobile = auto;
        data.price = price;



        const SalesUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(SalesUrl, fetchConfig)
        console.log(response)
        if(response.ok) {
            const newSale = await response.json()
            console.log(newSale)
            setSalesPeople('');
            setCustomer('');
            setAuto('');
            setPrice('');
        }
    }


    const Automobiles = async() => {
        const Url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(Url);

            if (response.ok) {
            const data = await response.json();
            setAutos(data.autos);
            }
    }


    const Salespeople = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/");
        if (response.ok) {
            const data = await response.json();
            setSalesPerson(data.salespeople);
        }

    }


    const Customers = async () => {
        const response = await fetch("http://localhost:8090/api/customers/");
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customer);
        }
    }

    useEffect(() => {
        Salespeople()
        Customers()
        Automobiles()
    }, []);




    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="display-5 text-center"><b>Record a sale</b></h2>
                    <form onSubmit={handleSubmit} id="Record a sale">
                        <div className="form-floating mb-3">
                        <select onChange={handleVinChange} value={auto} required type="" id="vin" className="form-select">
                        <option value="" >Choose a automobile VIN</option>
                            {autos?.map(auto => {
                                return (
                                    <option key={auto.id} value={auto.vin}>
                                     {auto.vin}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handlePeopleChange} value={salespeople} name="sales_person" id="sales_person" className="form-select">
                        <option value="" >Choose a salesperson</option>
                            {salesPerson?.map(sales_person => {
                                return (
                                    <option key={sales_person.id} value={sales_person.id}>
                                     {sales_person.first_name} {sales_person.last_name}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handleCustomerChange} value={customer} required name="" id="customer" className="form-select">
                        <option value="">Choose a customer</option>
                            {customers?.map(customer => {
                                return (
                                    <option key={customer.id} value={customer.id}>
                                     {customer.first_name} {customer.last_name}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} placeholder="price" required type="text" name="price" id="price" value={price} className="form-control"/>
                            <label htmlFor="color">Price</label>
                        </div>
                        <button className="btn btn-outline-dark">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalesRecordForm;
