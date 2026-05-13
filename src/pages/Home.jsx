function Home() {

  const products = [
    { title: "React Admin Dashboard", price: "$25", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" },
    { title: "Modern UI Kit", price: "$18", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" },
    { title: "Source Code Bundle", price: "$40", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" }
  ];

  return (
    <>

      {/* HERO */}
      <section className="hero-section">
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Buy & Sell Digital Products Easily</h1>
              <p className="hero-text">Templates, Source Codes, UI Kits, Graphics, Ebooks and Digital Assets Marketplace.</p>
              <button className="hero-btn">Explore Marketplace</button>
            </div>
            <div className="col-lg-6 text-center">
              <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" alt="" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container-fluid px-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Secure Payments</h3>
                <p>Stripe & Razorpay integration UI for secure payments.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Verified Vendors</h3>
                <p>Trusted vendors selling premium digital products.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Instant Downloads</h3>
                <p>Download products instantly after successful purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="product-section">
        <div className="container-fluid px-5">
          <h2 className="section-title">Popular Products</h2>
          <div className="row g-4">
            {products.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="product-card">
                  <img src={item.image} alt="" className="product-image" />
                  <div className="product-content">
                    <h4>{item.title}</h4>
                    <p>Premium quality frontend marketplace asset.</p>
                    <h5>{item.price}</h5>
                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDORS */}
      <section className="vendor-section">
        <div className="container-fluid px-5">
          <h2 className="section-title">Top Vendors</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="vendor-card">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="vendor-image" />
                <h4>David Smith</h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vendor-card">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="vendor-image" />
                <h4>Sophia Lee</h4>
                <p>React Developer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vendor-card">
                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" className="vendor-image" />
                <h4>John Miller</h4>
                <p>Frontend Engineer</p>
              </div>
            </div>
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
                <h2>$19</h2>
                <p>Basic marketplace access</p>
                <button className="buy-btn">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card active-plan">
                <h3>Professional</h3>
                <h2>$49</h2>
                <p>Advanced vendor features</p>
                <button className="buy-btn">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <h3>Enterprise</h3>
                <h2>$99</h2>
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