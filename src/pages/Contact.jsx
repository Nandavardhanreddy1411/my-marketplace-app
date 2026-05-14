function Contact() {
  return (
    <section style={{
      background:'linear-gradient(135deg, #FFFFFF, #FFFFFF)',
      padding:'80px 0',
      minHeight:'100vh',
      width:'100%'
    }}>
      <div className="container-fluid px-5">

        <div style={{textAlign:'center', marginBottom:'60px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'700', color:'#4F46E5'}}>Contact Us</h1>
          <p style={{fontSize:'18px', color:'#666'}}>Get in touch with our support and marketplace team.</p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'40px',
          alignItems:'center',
          maxWidth:'1100px',
          margin:'auto'
        }}>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt=""
              style={{width:'100%', borderRadius:'20px', boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}
            />
          </div>

          <div style={{
            background:'white',
            padding:'40px',
            borderRadius:'20px',
            boxShadow:'0 10px 30px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{color:'#4F46E5', fontWeight:'700', marginBottom:'25px'}}>Send us a Message</h3>

            <input type="text" placeholder="Enter Name" style={{
              width:'100%', padding:'14px', marginBottom:'15px',
              border:'1.5px solid #F8FAFC', borderRadius:'10px',
              fontFamily:'Poppins', fontSize:'0.95rem', outline:'none'
            }} />

            <input type="email" placeholder="Enter Email" style={{
              width:'100%', padding:'14px', marginBottom:'15px',
              border:'1.5px solid #F8FAFC', borderRadius:'10px',
              fontFamily:'Poppins', fontSize:'0.95rem', outline:'none'
            }} />

            <textarea rows="5" placeholder="Enter Message" style={{
              width:'100%', padding:'14px', marginBottom:'20px',
              border:'1.5px solid #e2e8f0', borderRadius:'10px',
              fontFamily:'Poppins', fontSize:'0.95rem', outline:'none',
              resize:'none'
            }}></textarea>

            <button style={{
              width:'100%', padding:'14px',
              background:'#4F46E5', color:'white',
              border:'none', borderRadius:'10px',
              fontWeight:'600', fontSize:'1rem',
              cursor:'pointer', fontFamily:'Poppins'
            }}>
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;