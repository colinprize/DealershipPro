import React, { useEffect, useState } from "react";

function ServiceHistory (){
   const[appointments, setAppointments] = useState([])
   const[vinQuery, setVinQuery] = useState("");
   const[vinresult, setVinResult] = useState([]);

   const fetchData = async() => {
    const Url = 'http://localhost:8080/api/appointments/';

    const response = await fetch(Url);

        if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments);
        }
}

    useEffect(() => {fetchData();
    }, []);






   const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
   };



    return (
    <div>
        <input
        type="text"
        placeholder="Search"
        value={vinQuery}
        onChange={handleSearchChange}
      />
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>VIP</th>
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
