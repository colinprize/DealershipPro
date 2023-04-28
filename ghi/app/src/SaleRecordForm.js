import React, { useEffect, useState } from "react";

function SalesRecordForm() {
    const [salespeople, setSalesPeople] = useState('');
    const [salesPerson, setSalesPerson] = useState('');
    const [customer, setCustomer] = useState('');
    const [customers, setCustomers] = useState('');
    const [auto, setAuto] = useState('');
    const [autos, setAutos] = useState([]);
    const [price, setPrice] = useState('');

    const handlePeopleChange = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomers(value);
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
        data.salespeople = salespeople;
        data.salesPerson = salesPerson;
        data.customer = customer;
        data.customers = customers;
        data.auto = auto;
        data.autos = autos;
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
            setSalesPerson();
            setCustomers('');
            setAutos('');
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
            setSalesPeople(data.salesperson);
        } else {
            console.error(response);
        }
    }


    const Customers = async () => {
        const response = await fetch("http://localhost:8090/api/customers/");
        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customer);
        } else {
            console.error(response);
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
                        <select onChange={handleVinChange} value={auto} required name="auto" id="vin" className="form-select">
                        <option value="" key="default">Choose a automobile VIN</option>
                            {autos.map(auto => {
                                return (
                                    <option key={auto.vin} value={auto.vin}>
                                     {auto.vin}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handlePeopleChange} value={salesPerson} required name="salesPerson" id="salesPerson" className="form-select">
                        <option value="" key="default">Choose a salesperson</option>
                            {salespeople && salespeople.map(salesPerson => {
                                return (
                                    <option key={salesPerson.id} value={salesPerson.id}>
                                     {salesPerson.first_name} {salesPerson.last_name}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handleCustomerChange} value={customers} required type="text" id="customer" className="form-select">
                        <option value="" key="default">Choose a customer</option>
                            {customer && customer.map(customers => {
                                return (
                                    <option key={customers.id} value={customers.id}>
                                     {customers.first_name} {customers.last_name}
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
