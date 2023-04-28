import React, { useEffect, useState  } from 'react';
function CustomerList() {
    const [customer, setCustomer] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8090/api/customers/")

        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customer);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <h1>Customers</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {customer.map(customers => {
                        return (
                            <tr key={customers.id} value={customers.id}>
                                <td>{customers.first_name}</td>
                                <td>{customers.last_name}</td>
                                <td>{customers.address}</td>
                                <td>{customers.phone_number}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default CustomerList;
