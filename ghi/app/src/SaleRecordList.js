import { useEffect, useState } from 'react';

function SalesRecordList() {
    const [sales, setSalesList] = useState([]);

    const fetchData = async () => {
      const url = "http://localhost:8090/api/sales/"
      const response = await fetch(url);
      if(response.ok) {
          const data = await response.json();
          setSalesList(data.sales)
      }
  }


    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
          <div>Salesperson ID</div>
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
              {sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td>{ sale.id }</td>
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
    );
}

export default SalesRecordList;
