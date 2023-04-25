import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className='nav-item'>
              <NavLink className='nav-link' to="manufacturers">List of Manufacturers</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="manufacturers/new">Add Manufacturers</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="automobiles/new">Add Automobiles</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="vehicleform">Create a new Vehicle</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="vehiclelist">List Vehicles</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="automobileinventorylist" >Inventory list</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="addtech" >Add a Technician</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="technicianlist" >List of Technicians</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className='nav-link' to="createappointment" >Create Appointment</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
