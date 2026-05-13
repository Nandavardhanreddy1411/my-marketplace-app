function Register() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <div className="contact-form">
              <h2 style={{color:'#4F46E5', fontWeight:'700', marginBottom:'10px', textAlign:'center'}}>
                Create Account 🚀
              </h2>
              <p style={{textAlign:'center', color:'#666', marginBottom:'30px'}}>
                Join Pixer Marketplace today
              </p>

              <div className="row">
                <div className="col-md-6">
                  <label style={{fontWeight:'500', marginBottom:'8px', display:'block'}}>
                    First Name
                  </label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="col-md-6">
                  <label style={{fontWeight:'500', marginBottom:'8px', display:'block'}}>
                    Last Name
                  </label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>

              <div className="mb-3">
                <label style={{fontWeight:'500', marginBottom:'8px', display:'block'}}>
                  Email Address
                </label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label style={{fontWeight:'500', marginBottom:'8px', display:'block'}}>
                  Password
                </label>
                <input type="password" placeholder="Create a password" />
              </div>

              <div className="mb-3">
                <label style={{fontWeight:'500', marginBottom:'8px', display:'block'}}>
                  Confirm Password
                </label>
                <input type="password" placeholder="Confirm your password" />
              </div>

              <div className="mb-3">
                <label style={{fontWeight:'500', marginBottom:'8px', display:'block'}}>
                  I want to join as
                </label>
                <select style={{
                  width:'100%', padding:'15px', border:'1px solid #ddd',
                  borderRadius:'10px', fontFamily:'Poppins', marginBottom:'20px'
                }}>
                  <option>Customer</option>
                  <option>Vendor</option>
                </select>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'0.9rem', color:'#666'}}>
                  <input type="checkbox" style={{marginRight:'8px'}} />
                  I agree to the{' '}
                  <a href="/terms" style={{color:'#4F46E5', textDecoration:'none'}}>
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <button style={{
                width:'100%', padding:'14px', background:'#4F46E5',
                color:'white', border:'none', borderRadius:'10px',
                fontSize:'1rem', fontWeight:'600', cursor:'pointer'
              }}>
                Create Account
              </button>

              <p style={{textAlign:'center', marginTop:'20px', color:'#666'}}>
                Already have an account?{' '}
                <a href="/login" style={{color:'#4F46E5', fontWeight:'600', textDecoration:'none'}}>
                  Login Here
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;