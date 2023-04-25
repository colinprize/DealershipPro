import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import AutomobileForm from './AutomobileForm';
import VehicleForm from './VehicleForm';
import VehicleList from './VehicleList';
import AutomobileInventoryList from './AutomobileInventoryList';
import AddTechnicianForm from './AddTechnicianForm'

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers" >
            <Route path="new" element={<ManufacturerForm />} />
            <Route path="" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          </Route>
          <Route path="automobiles" >
            <Route path="new" element={<AutomobileForm />}/>
          </Route>
          <Route path="vehicleform" element ={<VehicleForm />} />
          <Route path="vehiclelist" element ={<VehicleList />} />
          <Route path="automobileinventorylist" element ={<AutomobileInventoryList />} />
          <Route path="addtech" element ={<AddTechnicianForm />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
