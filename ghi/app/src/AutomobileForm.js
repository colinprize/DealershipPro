import React, { useEffect, useState } from "react";

function AutomobileForm() {
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('')
    const [models, setModels] = useState([])


    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handleModelsChange = (event) => {
        const value = event.target.value;
        setModels(value);
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;



        const AutomobileUrl = "http://localhost:8100/api/automobiles/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(AutomobileUrl, fetchConfig)
        console.log(response)
        if(response.ok) {
            const newAutomobile = await response.json()
            console.log(newAutomobile)
            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }
    }

    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/models/");
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        } else {
            console.error(response);
        }
    }


    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="display-5 text-center"><b>Add an automobile to inventory</b></h2>
                    <form onSubmit={handleSubmit} id="create-automobile">
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" value={color} className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYearChange} placeholder="year" required type="text" name="year" id="year" value={year} className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="vin" required type="text" name="vin" id="vin" value={vin} className="form-control"/>
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handleModelChange} value={model} required name="model" id="model" className="form-select">
                        <option value="">Choose a model</option>
                            {models.map(model => {
                                return (
                                    <option value={model.id} key={model.id}>
                                     {model.name}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AutomobileForm;
