function Login() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <div className="contact-form">
              <h2 style={{color:'#4F46E5', fontWeight:'700', marginBottom:'10px', textAlign:'center'}}>
                Welcome Back 👋
              </h2>
              <p style={{textAlign:'center', color:'#666', marginBottom:'30px'}}>
                Login to your Pixer account
              </p>

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
                <input type="password" placeholder="Enter your password" />
              </div>

              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                <label style={{fontSize:'0.9rem'}}>
                  <input type="checkbox" style={{marginRight:'6px'}} />
                  Remember me
                </label>
                <a href="#" style={{color:'#4F46E5', fontSize:'0.9rem', textDecoration:'none'}}>
                  Forgot Password?
                </a>
              </div>

              <button style={{
                width:'100%', padding:'14px', background:'#4F46E5',
                color:'white', border:'none', borderRadius:'10px',
                fontSize:'1rem', fontWeight:'600', cursor:'pointer'
              }}>
                Login
              </button>

              <p style={{textAlign:'center', marginTop:'20px', color:'#666'}}>
                Don't have an account?{' '}
                <a href="/register" style={{color:'#4F46E5', fontWeight:'600', textDecoration:'none'}}>
                  Register Now
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;