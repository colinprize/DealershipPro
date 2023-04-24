import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleForm from './VehicleForm';
import VehicleList from './VehicleList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicleform" element ={<VehicleForm />} />
          <Route path="vehiclelist" element ={<VehicleList/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
