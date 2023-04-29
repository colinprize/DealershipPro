import React, { useEffect, useState} from "react";

function SaleRecordHistory() {

    const [sales, setSalesList] = useState([]);
    const [salespeople, setSalesPeople] = useState('');
    const [salesPerson, setSalesPerson] = useState([]);


    const handleSalesPeopleChange = (event) => {
        const value = event.target.value;
        setSalesPeople(value);
    }

    const SalesData = async () => {
        const response = await fetch("http://localhost:8090/api/sales/");
        if (response.ok) {
            const data = await response.json();
            setSalesList(data.sales);
        }
    }


    const SalespeopleData = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/");
        if (response.ok) {
            const data = await response.json();
            setSalesPerson(data.salespeople);
        }
    }

    useEffect(() => {
        SalesData();
        SalespeopleData();
    }, []);


    return (
        <>
        <h1>SalesPerson History</h1>
        <div className="form-floating mb-3">
                    <select onChange={handleSalesPeopleChange} value={salespeople} name="sales_person" id="sales_person" className="form-select">
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
                <table className="table table-striped">
            <thead>
              <tr>
                <th>Salesperson Name</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td>{ sale.sales_person }</td>
                    <td>{ sale.customer } </td>
                    <td>{ sale.automobile }</td>
                    <td>{ sale.price }</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
    )
}

export default SaleRecordHistory;
