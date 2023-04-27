import React, { useEffect, useState } from "react";

const serviceSearch = () => {}




function ServiceHistory (){
   const[vinQuery, setVinQuery] = useState("")
   const[]

   const handleSearchChange = (event) => {
    event.preventdefault();
    setSearchQuery(event.target.value);
   };

   if(vinQuery == vin

    return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
)
}
export default ServiceHistory
