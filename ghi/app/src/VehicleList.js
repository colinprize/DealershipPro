import {useState, useEffect} from 'react';

function VehicleList () {
    const [models, setModels] = useState([]);

    const fetchData = async() => {
        const Url = 'http://localhost:8100/api/models/';

        const response = await fetch(Url);

            if (response.ok) {
            const data = await response.json();
            setModels(data.models);
            }
    }

    useEffect(() => {fetchData();
    }, []);

return (
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Manufacturer</th>
        <th scope="col">Picture</th>
        </tr>
    </thead>
    <tbody>
        {models.map(model => {
        return (
            <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img alt="car" className="img-thumbnail" src={ model.picture_url }/>
                </td>
            </tr>
        );
        })}
    </tbody>
</table>
);
};

export default VehicleList
