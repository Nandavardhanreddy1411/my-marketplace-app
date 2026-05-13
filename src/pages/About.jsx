function About() {
  return (
    <section className="page-section">
      <div className="container">

        <div className="page-header">
          <h1>About Pixer</h1>
          <p>
            Pixer is a modern multivendor ecommerce marketplace platform
            for digital creators, developers, designers, and vendors.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
            />

            <h3>Creative Marketplace</h3>

            <p>
              Buy and sell templates, source codes, UI kits,
              graphics, ebooks and premium digital assets.
            </p>
          </div>

          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt=""
            />

            <h3>Verified Vendors</h3>

            <p>
              Trusted vendors with high quality products,
              secure payment system and instant downloads.
            </p>
          </div>

          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
            />

            <h3>Modern Technology</h3>

            <p>
              Built using React JS, Bootstrap 5 and
              modern frontend technologies for performance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;