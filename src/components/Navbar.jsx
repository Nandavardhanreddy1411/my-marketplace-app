import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid px-4">

        <Link className="navbar-brand logo" to="/">
          {props.logo}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/blog">Blog</Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link nav-pill" to="/products">Products</Link>
            </li>

            <li className="nav-item ms-2">
            <Link to="/dashboard" className="nav-pill nav-link" style={{color:'white'}}>Dashboard</Link>
          </li>
           
           <li className="nav-item ms-2">
            <Link to="/vendor-dashboard" className="nav-pill nav-link" style={{color:'white'}}>Vendor</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-pill" to="/analytics">Analytics</Link>
          </li>
          
            <li className="nav-item ms-2">
              <Link to="/login" className="nav-login-btn">Login</Link>
            </li>

            <li className="nav-item ms-2">
              <Link to="/register" className="nav-register-btn">Register</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;