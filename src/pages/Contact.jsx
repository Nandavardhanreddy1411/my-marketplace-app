// function Contact() {
//   return (
//     <section style={{
//       background:'linear-gradient(135deg, #FFFFFF, #FFFFFF)',
//       padding:'80px 0',
//       minHeight:'100vh',
//       width:'100%'
//     }}>
//       <div className="container-fluid px-5">

//         <div style={{textAlign:'center', marginBottom:'60px'}}>
//           <h1 style={{fontSize:'50px', fontWeight:'700', color:'#4F46E5'}}>Contact Us</h1>
//           <p style={{fontSize:'18px', color:'#666'}}>Get in touch with our support and marketplace team.</p>
//         </div>

//         <div style={{
//           display:'grid',
//           gridTemplateColumns:'1fr 1fr',
//           gap:'40px',
//           alignItems:'center',
//           maxWidth:'1100px',
//           margin:'auto'
//         }}>

//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
//               alt=""
//               style={{width:'100%', borderRadius:'20px', boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}
//             />
//           </div>

//           <div style={{
//             background:'white',
//             padding:'40px',
//             borderRadius:'20px',
//             boxShadow:'0 10px 30px rgba(0,0,0,0.08)'
//           }}>
//             <h3 style={{color:'#4F46E5', fontWeight:'700', marginBottom:'25px'}}>Send us a Message</h3>

//             <input type="text" placeholder="Enter Name" style={{
//               width:'100%', padding:'14px', marginBottom:'15px',
//               border:'1.5px solid #F8FAFC', borderRadius:'10px',
//               fontFamily:'Poppins', fontSize:'0.95rem', outline:'none'
//             }} />

//             <input type="email" placeholder="Enter Email" style={{
//               width:'100%', padding:'14px', marginBottom:'15px',
//               border:'1.5px solid #F8FAFC', borderRadius:'10px',
//               fontFamily:'Poppins', fontSize:'0.95rem', outline:'none'
//             }} />

//             <textarea rows="5" placeholder="Enter Message" style={{
//               width:'100%', padding:'14px', marginBottom:'20px',
//               border:'1.5px solid #e2e8f0', borderRadius:'10px',
//               fontFamily:'Poppins', fontSize:'0.95rem', outline:'none',
//               resize:'none'
//             }}></textarea>

//             <button style={{
//               width:'100%', padding:'14px',
//               background:'#4F46E5', color:'white',
//               border:'none', borderRadius:'10px',
//               fontWeight:'600', fontSize:'1rem',
//               cursor:'pointer', fontFamily:'Poppins'
//             }}>
//               Send Message
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

function Contact() {
  return (
    <section
      style={{
        background: "#F8FAFC",
        padding: "80px 0",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "Poppins",
      }}
    >
      <div className="container-fluid px-5">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "700",
              color: "#4F46E5",
              marginBottom: "15px",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#64748B",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
            }}
          >
            Have questions about products, vendors, payments, or marketplace
            services? Our Pixer support team is always ready to help you.
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            maxWidth: "1150px",
            margin: "auto",
          }}
        >

          {/* Left Side */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Contact"
              style={{
                width: "100%",
                borderRadius: "25px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                marginBottom: "25px",
              }}
            />

            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <h2
                style={{
                  color: "#1E293B",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Contact Information
              </h2>

              <p style={{ color: "#475569", marginBottom: "15px" }}>
                📧 support@pixer.com
              </p>

              <p style={{ color: "#475569", marginBottom: "15px" }}>
                📞 +91 98765 43210
              </p>

              <p style={{ color: "#475569", marginBottom: "15px" }}>
                🌐 www.pixer-marketplace.com
              </p>

              <p style={{ color: "#475569", lineHeight: "1.8" }}>
                Pixer is a modern Ecommerce Multivendor Digital Marketplace
                platform built with React JS and modern frontend technologies.
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <div
            style={{
              background: "white",
              padding: "45px",
              borderRadius: "25px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#4F46E5",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Send us a Message
            </h2>

            <p
              style={{
                color: "#64748B",
                marginBottom: "30px",
                lineHeight: "1.7",
              }}
            >
              Fill out the form below and our team will contact you as soon as possible.
            </p>

            <input
              type="text"
              placeholder="Enter Your Name"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "18px",
                border: "1.5px solid #E2E8F0",
                borderRadius: "12px",
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "18px",
                border: "1.5px solid #E2E8F0",
                borderRadius: "12px",
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />

            <input
              type="text"
              placeholder="Enter Subject"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "18px",
                border: "1.5px solid #E2E8F0",
                borderRadius: "12px",
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />

            <textarea
              rows="5"
              placeholder="Enter Your Message"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "25px",
                border: "1.5px solid #E2E8F0",
                borderRadius: "12px",
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                outline: "none",
                resize: "none",
              }}
            ></textarea>

            <button
              style={{
                width: "100%",
                padding: "15px",
                background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "Poppins",
                transition: "0.3s ease",
              }}
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;