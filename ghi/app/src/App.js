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
import TechnicianList from './TechnicianList';
import CreateAppointment from './CreateAppointment';
import SalesPersonForm from './SalesPersonForm';
import SalesPersonList from './SalesPersonList';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceHistory from './ServiceHistory';

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
          <Route path="salesperson" >
            <Route path="new" element={<SalesPersonForm />}/>
            <Route path="" element={<SalesPersonList salespeople={props.salespeople} />} />
          </Route>
          <Route path="customer" >
            <Route path="new" element={<CustomerForm />}/>
            <Route path="" element={<CustomerList customer={props.customer} />} />
          </Route>
          <Route path="vehicleform" element ={<VehicleForm />} />
          <Route path="vehiclelist" element ={<VehicleList />} />
          <Route path="automobileinventorylist" element ={<AutomobileInventoryList />} />
          <Route path="addtech" element ={<AddTechnicianForm />} />
          <Route path="technicianlist" element ={<TechnicianList />} />
          <Route path="createappointment" element={<CreateAppointment />} />
          <Route path="serviceappointments" element={<ServiceAppointmentList />} />
          <Route path="servicehistory" element={<ServiceHistory />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
