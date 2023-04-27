import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalesRecordList() {
    const [salesList, setSalesList] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/sales/"
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            setSalesList(data.sales)
        }
    }


    const handleDelete = async (salesList) => {
        const saleListUrl = `http://localhost:8090/api/sales/${salesList.id}`
        const fetchConfig = {
            method: "delete"
        }
        const response = await fetch(saleListUrl, fetchConfig)
        if(response.ok) {
            fetchData();
            console.log("deleted");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
        <div className="d-grid gap-2 d-sm-flex mt-2 mb-2">
            <Link to="/salesList/create" className="btn btn-primary btn-lg px-4 gap-3">Add a Sale</Link>
            </div>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>Salesperson Employee ID</th>
                <th>Salesperson Name</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {salesList.map((sales) => {
                return (
                <tr key={sales.id}>
                    <td>{ sales.salesperson.employee_id }</td>
                    <td>{ sales.salesperson.first_name } { sales.salesperson.last_name }</td>
                    <td>{ sales.customer.first_name } { sales.customer.last_name }</td>
                    <td>{ sales.automobile.vin }</td>
                    <td>${ sales.price }</td>
                    <td>
                        <button onClick={() => handleDelete(salesList)}>Delete</button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </>
    )
}

export default SalesRecordList;
