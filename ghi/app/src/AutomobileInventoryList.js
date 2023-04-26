import {useState, useEffect} from 'react';

function AutomobileInventoryList () {
    const [autos, setAutos] = useState([]);

    const fetchData = async() => {
        const Url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(Url);

            if (response.ok) {
            const data = await response.json();
            setAutos(data.autos);
            }
    }

    useEffect(() => {fetchData();
    }, []);

return (
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">VIN</th>
        <th scope="col">Color</th>
        <th scope="col">Year</th>
        <th scope="col">Model</th>
        <th scope="col">Manufacturer</th>
        <th scope="col">Sold</th>
        </tr>
    </thead>
    <tbody>
        {autos.map(auto => {
        return (
            <tr key={auto.id}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.manufacturer}</td>
                <td>{auto.model.sold}</td>
            </tr>
        );
        })}
    </tbody>
</table>
);
};

export default AutomobileInventoryList
