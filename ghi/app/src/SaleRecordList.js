import { useEffect, useState } from 'react';

function SalesRecordList() {
    const [sales, setSalesList] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/sales/"
        const response = await fetch(url);
        // console.log(response)
        if(response.ok) {
            const data = await response.json();
            console.log(data)
            setSalesList(data.sales)
        }
    }


    // const handleDelete = async (salesList) => {
    //     const saleListUrl = `http://localhost:8090/api/sales/${salesList.id}`
    //     const fetchConfig = {
    //         method: "delete"
    //     }
    //     const response = await fetch(saleListUrl, fetchConfig)
    //     if(response.ok) {
    //         fetchData();
    //         // console.log("deleted");
    //     }
    // }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Salesperson ID</th>
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
                    {/* <td>
                          <button onClick={() => handleDelete(salesList)}>Delete</button>
                      </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
    );
}

export default SalesRecordList;
