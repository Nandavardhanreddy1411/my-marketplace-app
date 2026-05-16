import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

function Navbar(props) {
  const { cartCount } = useCart();

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
            <li className="nav-item">
              <Link className="nav-link nav-pill" to="/api-demo">API Demo</Link>
            </li>
            <li className="nav-item ms-2">
              <Link to="/admin" className="nav-pill nav-link" style={{color:'white'}}>Admin</Link>
            </li>

            {/* Cart Button with Badge */}
            <li className="nav-item ms-2">
              <Link to="/cart" style={{
                background:'#F59E0B', color:'white',
                padding:'7px 16px', borderRadius:'25px',
                fontWeight:'600', textDecoration:'none',
                fontSize:'0.9rem',
                display:'inline-flex', alignItems:'center', gap:'6px'
              }}>
                🛒 Cart
                {cartCount > 0 && (
                  <span style={{
                    background:'#ef4444', color:'white',
                    borderRadius:'50%', width:'18px', height:'18px',
                    display:'inline-flex', alignItems:'center',
                    justifyContent:'center', fontSize:'0.7rem',
                    fontWeight:'700'
                  }}>{cartCount}</span>
                )}
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link to="/notifications" style={{
                color:'white', textDecoration:'none',
                fontSize:'1.2rem', position:'relative',
                display:'flex', alignItems:'center'
              }}>
                🔔
                <span style={{
                  position:'absolute', top:'-6px', right:'-6px',
                  background:'#ef4444', color:'white',
                  borderRadius:'50%', width:'16px', height:'16px',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.65rem', fontWeight:'700'
                }}>3</span>
              </Link>
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