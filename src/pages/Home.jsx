// import SEO from '../components/SEO';
// function Home() {
   
//   const products = [
//     { title: "React Admin Dashboard", price: "₹2,099", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" },
//     { title: "Modern UI Kit", price: "₹1,499", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" },
//     { title: "Source Code Bundle", price: "₹4,099", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" }
//   ];

//   return (
//     <>
      
//       <SEO
//         title="Home"
//         description="Pixer — The #1 Digital Marketplace. Buy & sell templates, source codes, UI kits."
//         keywords="digital marketplace, react templates, UI kits, source code"
//       />
//       {/* HERO */}
//       <section className="hero-section">
//         <div className="container-fluid px-5">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <h1 className="hero-title">Buy & Sell Digital Products Easily</h1>
//               <p className="hero-text">Templates, Source Codes, UI Kits, Graphics, Ebooks and Digital Assets Marketplace.</p>
//               <button className="hero-btn">Explore Marketplace</button>
//             </div>
//             <div className="col-lg-6 text-center">
//               <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" alt="" className="hero-image" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="features-section">
//         <div className="container-fluid px-5">
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="feature-card">
//                 <h3>Secure Payments</h3>
//                 <p>Stripe & Razorpay integration UI for secure payments.</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="feature-card">
//                 <h3>Verified Vendors</h3>
//                 <p>Trusted vendors selling premium digital products.</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="feature-card">
//                 <h3>Instant Downloads</h3>
//                 <p>Download products instantly after successful purchase.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section className="product-section">
//         <div className="container-fluid px-5">
//           <h2 className="section-title">Popular Products</h2>
//           <div className="row g-4">
//             {products.map((item, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="product-card">
//                   <img src={item.image} alt="" className="product-image" />
//                   <div className="product-content">
//                     <h4>{item.title}</h4>
//                     <p>Premium quality frontend marketplace asset.</p>
//                     <h5>{item.price}</h5>
//                     <button className="buy-btn">Buy Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* VENDORS */}
//       <section className="vendor-section">
//         <div className="container-fluid px-5">
//           <h2 className="section-title">Top Vendors</h2>
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="vendor-card">
//                 <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="vendor-image" />
//                 <h4>David Smith</h4>
//                 <p>UI/UX Designer</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="vendor-card">
//                 <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="vendor-image" />
//                 <h4>Sophia Lee</h4>
//                 <p>React Developer</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="vendor-card">
//                 <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" className="vendor-image" />
//                 <h4>John Miller</h4>
//                 <p>Frontend Engineer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PRICING */}
//       <section className="pricing-section">
//         <div className="container-fluid px-5">
//           <h2 className="section-title">Pricing Plans</h2>
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="pricing-card">
//                 <h3>Starter</h3>
//                 <h2 className="price">₹1800</h2>
//                 <p>Basic marketplace access</p>
//                 <button className="buy-btn">Choose Plan</button>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="pricing-card active-plan">
//                 <h3>Professional</h3>
//                 <h2>₹3000</h2>
//                 <p>Advanced vendor features</p>
//                 <button className="buy-btn">Choose Plan</button>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="pricing-card">
//                 <h3>Enterprise</h3>
//                 <h2 className="price">₹4500</h2>
//                 <p>Complete marketplace solution</p>
//                 <button className="buy-btn">Choose Plan</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }

// export default Home;

import SEO from '../components/SEO';

function Home() {

  const products = [
    {
      title: "React Admin Dashboard",
      price: "₹2,099",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Modern UI Kit",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },
    {
      title: "Source Code Bundle",
      price: "₹4,099",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <>

      <SEO
        title="Home"
        description="Pixer — The #1 Digital Marketplace. Buy & sell templates, source codes, UI kits."
        keywords="digital marketplace, react templates, UI kits, source code"
      />

      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
          padding: "100px 0",
          color: "white",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          fontFamily: "Poppins",
        }}
      >
        <div className="container-fluid px-5">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  marginBottom: "25px",
                }}
              >
                Buy & Sell Digital Products Easily
              </h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.9",
                  marginBottom: "35px",
                  color: "#E2E8F0",
                  maxWidth: "600px",
                }}
              >
                Templates, Source Codes, UI Kits, Graphics, Ebooks,
                Courses, and Digital Assets Marketplace built with
                modern frontend technologies.
              </p>

              <button
                style={{
                  background: "#F59E0B",
                  color: "white",
                  border: "none",
                  padding: "16px 35px",
                  borderRadius: "35px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontFamily: "Poppins",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                Explore Marketplace
              </button>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                alt="Marketplace"
                style={{
                  width: "100%",
                  maxWidth: "550px",
                  borderRadius: "25px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                }}
              />

            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          background: "#F8FAFC",
          padding: "90px 0",
          fontFamily: "Poppins",
        }}
      >
        <div className="container-fluid px-5">

          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Why Choose Pixer?
            </h2>

            <p
              style={{
                color: "#64748B",
                fontSize: "1rem",
              }}
            >
              Modern marketplace features for buyers and vendors.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div
                style={{
                  background: "white",
                  padding: "40px 30px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    color: "#4F46E5",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Secure Payments
                </h3>

                <p style={{ color: "#64748B", lineHeight: "1.8" }}>
                  Stripe, Razorpay, and PayPal frontend payment UI
                  integration for secure transactions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                style={{
                  background: "white",
                  padding: "40px 30px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    color: "#06B6D4",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Verified Vendors
                </h3>

                <p style={{ color: "#64748B", lineHeight: "1.8" }}>
                  Trusted vendors selling premium templates, source codes,
                  graphics, and UI assets.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                style={{
                  background: "white",
                  padding: "40px 30px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    color: "#F59E0B",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Instant Downloads
                </h3>

                <p style={{ color: "#64748B", lineHeight: "1.8" }}>
                  Download products instantly after successful purchase
                  and checkout confirmation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          background: "white",
          padding: "90px 0",
          fontFamily: "Poppins",
        }}
      >
        <div className="container-fluid px-5">

          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Popular Products
            </h2>

            <p
              style={{
                color: "#64748B",
                fontSize: "1rem",
              }}
            >
              Explore trending digital products from top vendors.
            </p>
          </div>

          <div className="row g-4">

            {products.map((item, index) => (

              <div className="col-md-4" key={index}>

                <div
                  style={{
                    background: "#fff",
                    borderRadius: "22px",
                    overflow: "hidden",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    transition: "0.3s ease",
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "28px" }}>

                    <h4
                      style={{
                        color: "#1E293B",
                        fontWeight: "700",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{
                        color: "#64748B",
                        lineHeight: "1.8",
                        marginBottom: "18px",
                      }}
                    >
                      Premium quality frontend marketplace asset
                      for modern web applications.
                    </p>

                    <h3
                      style={{
                        color: "#4F46E5",
                        fontWeight: "700",
                        marginBottom: "20px",
                      }}
                    >
                      {item.price}
                    </h3>

                    <button
                      style={{
                        background: "#4F46E5",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontFamily: "Poppins",
                        width: "100%",
                      }}
                    >
                      Buy Now
                    </button>

                  </div>
                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* TOP VENDORS */}
      <section
        style={{
          background: "#F8FAFC",
          padding: "90px 0",
          fontFamily: "Poppins",
        }}
      >
        <div className="container-fluid px-5">

          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Top Vendors
            </h2>

            <p
              style={{
                color: "#64748B",
              }}
            >
              Meet our trusted marketplace creators and designers.
            </p>
          </div>

          <div className="row g-4">

            {[
              {
                name: "David Smith",
                role: "UI/UX Designer",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Sophia Lee",
                role: "React Developer",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "John Miller",
                role: "Frontend Engineer",
                image: "https://randomuser.me/api/portraits/men/12.jpg"
              }
            ].map((vendor, index) => (

              <div className="col-md-4" key={index}>

                <div
                  style={{
                    background: "white",
                    padding: "40px 30px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  }}
                >

                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    style={{
                      width: "110px",
                      height: "110px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "20px",
                      border: "4px solid #EEF2FF",
                    }}
                  />

                  <h4
                    style={{
                      color: "#1E293B",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    {vendor.name}
                  </h4>

                  <p style={{ color: "#64748B" }}>
                    {vendor.role}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="container-fluid px-5">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="pricing-card">
                <h3>Starter</h3>
                <h2 className="price">₹1800</h2>
                <p>Basic marketplace access</p>
                <button className="buy-btn">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card active-plan">
                <h3>Professional</h3>
                <h2>₹3000</h2>
                <p>Advanced vendor features</p>
                <button className="buy-btn">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <h3>Enterprise</h3>
                <h2 className="price">₹4500</h2>
                <p>Complete marketplace solution</p>
                <button className="buy-btn">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;