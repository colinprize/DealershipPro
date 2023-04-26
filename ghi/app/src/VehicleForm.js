import {useState, useEffect} from 'react';

function VehicleForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const [model, setModel] = useState("");
    const [picture, setPicture] = useState("");
    const [manufacturer, setManufacturer] = useState("");


    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handlePictureChange = (event) => {
        const value = event.target.value;
        setPicture(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.name = model;
        data.picture_url = picture;
        data.manufacturer_id = manufacturer;

        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        console.log(response)
        if (response.ok) {
            setModel("");
            setPicture("");
            setManufacturer("");
        }
}

    const fetchData = async() => {
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(manufacturerUrl);

            if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
            }
    }

    useEffect(() => {fetchData();
    }, []);


    return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1 className="text-center">Create a Vehicle</h1>
                <form id="create-vehicle-form" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input onChange={handleModelChange}
                            required type="model"
                            name ="model"
                            placeholder="model"
                            id="model"
                            className="form-control"
                            value={model}
                        />
                        <label htmlFor="model">Model</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handlePictureChange}
                            required type="picture"
                            name="picture"
                            id="picture"
                            className="form-control"
                            value={picture}
                        />
                        <label htmlFor="picture">Picture URL</label>
                    </div>
                    <div className="mb-3">
                        <select
                            onChange={handleManufacturerChange}
                            required type="manufacturer"
                            id="manufacturer"
                            className="form-select"
                            value={manufacturer} >
                            <option value="">Manufacturer</option>
                            {manufacturers.map((manufacturer) => {
                                return (
                                    <option key={manufacturer.id} value={manufacturer.id}>
                                        {manufacturer.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default VehicleForm;
