function Blog() {
  return (
    <section style={{
      background:'linear-gradient(135deg, #f0fdf4, #dcfce7)',
      padding:'80px 0',
      minHeight:'100vh',
      width:'100%'
    }}>
      <div className="container-fluid px-5">

        <div style={{textAlign:'center', marginBottom:'60px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'700', color:'#4F46E5'}}>Marketplace Blog</h1>
          <p style={{fontSize:'18px', color:'#666'}}>Latest articles, product updates and design resources.</p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(350px, 1fr))',
          gap:'30px'
        }}>

          <div style={{
            background:'white', borderRadius:'20px',
            overflow:'hidden',
            boxShadow:'0 10px 20px rgba(0,0,0,0.08)',
            transition:'0.3s'
          }}>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
              style={{width:'100%', height:'220px', objectFit:'cover'}}
            />
            <div style={{padding:'25px'}}>
              <span style={{
                background:'#EEF2FF', color:'#4F46E5',
                padding:'4px 12px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'500'
              }}>UI Design</span>
              <h3 style={{color:'#1e1e2f', fontWeight:'700', margin:'15px 0 10px'}}>
                Top UI Kits For React Projects
              </h3>
              <p style={{color:'#666', marginBottom:'20px'}}>
                Explore modern responsive UI kits for SaaS applications.
              </p>
              <button style={{
                background:'#4F46E5', color:'white',
                border:'none', padding:'10px 20px',
                borderRadius:'10px', fontWeight:'600',
                cursor:'pointer', fontFamily:'Poppins'
              }}>Read More</button>
            </div>
          </div>

          <div style={{
            background:'white', borderRadius:'20px',
            overflow:'hidden',
            boxShadow:'0 10px 20px rgba(0,0,0,0.08)',
            transition:'0.3s'
          }}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
              style={{width:'100%', height:'220px', objectFit:'cover'}}
            />
            <div style={{padding:'25px'}}>
              <span style={{
                background:'#EEF2FF', color:'#4F46E5',
                padding:'4px 12px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'500'
              }}>Dashboard</span>
              <h3 style={{color:'#1e1e2f', fontWeight:'700', margin:'15px 0 10px'}}>
                Modern Dashboard Design Trends
              </h3>
              <p style={{color:'#666', marginBottom:'20px'}}>
                Learn professional dashboard UI and analytics design.
              </p>
              <button style={{
                background:'#4F46E5', color:'white',
                border:'none', padding:'10px 20px',
                borderRadius:'10px', fontWeight:'600',
                cursor:'pointer', fontFamily:'Poppins'
              }}>Read More</button>
            </div>
          </div>

          <div style={{
            background:'white', borderRadius:'20px',
            overflow:'hidden',
            boxShadow:'0 10px 20px rgba(0,0,0,0.08)',
            transition:'0.3s'
          }}>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt=""
              style={{width:'100%', height:'220px', objectFit:'cover'}}
            />
            <div style={{padding:'25px'}}>
              <span style={{
                background:'#EEF2FF', color:'#4F46E5',
                padding:'4px 12px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'500'
              }}>React</span>
              <h3 style={{color:'#1e1e2f', fontWeight:'700', margin:'15px 0 10px'}}>
                Building Marketplace with React JS
              </h3>
              <p style={{color:'#666', marginBottom:'20px'}}>
                Step by step guide to build a digital marketplace frontend.
              </p>
              <button style={{
                background:'#4F46E5', color:'white',
                border:'none', padding:'10px 20px',
                borderRadius:'10px', fontWeight:'600',
                cursor:'pointer', fontFamily:'Poppins'
              }}>Read More</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;