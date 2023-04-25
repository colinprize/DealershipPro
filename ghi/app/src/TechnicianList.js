import React, { useEffect, useState  } from 'react';
function TechnicianList() {


    const [technicians, setTechnician] = useState([]);



    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/technicians/");

        if (response.ok) {
            const data = await response.json();
            setTechnician(data.technicians);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Technicians</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key={technician.employee_id} value={technician.employeed_id}>
                                <td>{technician.first_name}</td>
                                <td>{technician.last_name}</td>
                                <td>{technician.employee_id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        )

}
export default TechnicianList
