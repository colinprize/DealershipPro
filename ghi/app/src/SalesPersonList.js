import React, { useEffect, useState  } from 'react';
function SalesPersonList() {
    const [salespeople, setSalesPeople] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/")

        if (response.ok) {
            const data = await response.json();
            setSalesPeople(data.salesperson);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <h1>SalesPerson</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee Id</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople && salespeople.map(salesPerson => {
                        return (
                            <tr key={salesPerson.id} value={salesPerson.href}>
                                <td>{salesPerson.first_name}</td>
                                <td>{salesPerson.last_name}</td>
                                <td>{salesPerson.employee_id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default SalesPersonList;
