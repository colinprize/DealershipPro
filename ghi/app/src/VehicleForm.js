import {useState, useEffect} from 'react';

function VehicleForm() {
    const [model, setModel] = useState("");
    const [picture, setPicture] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [manufacturers, setManufacturers] = useState([]);
}

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

const fetchData = async() => {
    const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';

    const response = await fetch(manufacturerUrl);

        if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
        }
}

useEffect(() => {
    fetchData();
}, []);

const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {}
    data.
}
