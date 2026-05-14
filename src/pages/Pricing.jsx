function Pricing() {
  return (
    <section style={{
      background:'linear-gradient(135deg, #f0f4ff, #e8f7ff)',
      padding:'80px 0',
      minHeight:'100vh',
      width:'100%'
    }}>
      <div className="container-fluid px-5">

        <div style={{textAlign:'center', marginBottom:'60px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'700', color:'#4F46E5'}}>
            Pricing Plans
          </h1>
          <p style={{fontSize:'18px', color:'#666'}}>
            Flexible pricing plans for creators, vendors and agencies.
          </p>
        </div>

        {/* 3 CARDS IN A ROW */}
        <div className="row g-4 justify-content-center">

          {/* Starter */}
          <div className="col-md-4">
            <div style={{
              background:'white',
              borderRadius:'20px',
              padding:'40px',
              textAlign:'center',
              boxShadow:'0 10px 30px rgba(0,0,0,0.08)',
              transition:'0.3s',
              height:'100%'
            }}>
              <h2 style={{color:'#1e1e2f', fontWeight:'700', fontSize:'1.5rem', marginBottom:'15px'}}>
                Starter
              </h2>
              <h3 style={{color:'#4F46E5', fontSize:'3rem', fontWeight:'700', marginBottom:'10px'}}>
                ₹1800
              </h3>
              <p style={{color:'#666', marginBottom:'25px'}}>Perfect for beginners</p>
              <ul style={{listStyle:'none', padding:0, marginBottom:'30px'}}>
                <li style={{padding:'10px 0', borderBottom:'1px solid #f0f0f0', color:'#444'}}>✅ 5 Product Uploads</li>
                <li style={{padding:'10px 0', borderBottom:'1px solid #f0f0f0', color:'#444'}}>✅ Basic Analytics</li>
                <li style={{padding:'10px 0', color:'#444'}}>✅ Email Support</li>
              </ul>
              <button style={{
                width:'100%', padding:'14px',
                background:'#4F46E5', color:'white',
                border:'none', borderRadius:'10px',
                fontWeight:'600', fontSize:'1rem',
                cursor:'pointer', fontFamily:'Poppins'
              }}>
                Choose Plan
              </button>
            </div>
          </div>

          {/* Professional - Active */}
          <div className="col-md-4">
            <div style={{
              background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
              borderRadius:'20px',
              padding:'40px',
              textAlign:'center',
              boxShadow:'0 15px 40px rgba(79,70,229,0.3)',
              transform:'scale(1.05)',
              height:'100%'
            }}>
              <div style={{
                background:'#F59E0B', color:'white',
                padding:'5px 15px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'600',
                display:'inline-block', marginBottom:'15px'
              }}>
                ⭐ Most Popular
              </div>
              <h2 style={{color:'white', fontWeight:'700', fontSize:'1.5rem', marginBottom:'15px'}}>
                Professional
              </h2>
              <h3 style={{color:'white', fontSize:'3rem', fontWeight:'700', marginBottom:'10px'}}>
                ₹3000
              </h3>
              <p style={{color:'rgba(255,255,255,0.8)', marginBottom:'25px'}}>Best for growing vendors</p>
              <ul style={{listStyle:'none', padding:0, marginBottom:'30px'}}>
                <li style={{padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,0.2)', color:'white'}}>✅ Unlimited Products</li>
                <li style={{padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,0.2)', color:'white'}}>✅ Advanced Analytics</li>
                <li style={{padding:'10px 0', color:'white'}}>✅ Priority Support</li>
              </ul>
              <button style={{
                width:'100%', padding:'14px',
                background:'white', color:'#4F46E5',
                border:'none', borderRadius:'10px',
                fontWeight:'700', fontSize:'1rem',
                cursor:'pointer', fontFamily:'Poppins'
              }}>
                Choose Plan
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="col-md-4">
            <div style={{
              background:'white',
              borderRadius:'20px',
              padding:'40px',
              textAlign:'center',
              boxShadow:'0 10px 30px rgba(0,0,0,0.08)',
              transition:'0.3s',
              height:'100%'
            }}>
              <h2 style={{color:'#1e1e2f', fontWeight:'700', fontSize:'1.5rem', marginBottom:'15px'}}>
                Enterprise
              </h2>
              <h3 style={{color:'#4F46E5', fontSize:'3rem', fontWeight:'700', marginBottom:'10px'}}>
                ₹4500
              </h3>
              <p style={{color:'#666', marginBottom:'25px'}}>For large digital agencies</p>
              <ul style={{listStyle:'none', padding:0, marginBottom:'30px'}}>
                <li style={{padding:'10px 0', borderBottom:'1px solid #f0f0f0', color:'#444'}}>✅ Custom Store</li>
                <li style={{padding:'10px 0', borderBottom:'1px solid #f0f0f0', color:'#444'}}>✅ Dedicated Manager</li>
                <li style={{padding:'10px 0', color:'#444'}}>✅ Premium Features</li>
              </ul>
              <button style={{
                width:'100%', padding:'14px',
                background:'#4F46E5', color:'white',
                border:'none', borderRadius:'10px',
                fontWeight:'600', fontSize:'1rem',
                cursor:'pointer', fontFamily:'Poppins'
              }}>
                Choose Plan
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;