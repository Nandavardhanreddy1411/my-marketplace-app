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
           
            <p
          style={{
            color: "#475569",
            lineHeight: "1.9",
            fontSize: "1rem",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Pixer is a modern Ecommerce Multivendor Digital Marketplace built
          using React JS, Bootstrap, HTML5, CSS3, and JavaScript. The platform
          is designed to provide a responsive and professional marketplace
          experience for buying and selling digital products online.
        </p>

        <h2
          style={{
            color: "#1E293B",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Our mission is to create a clean, user-friendly, and modern digital
          marketplace where users can easily browse, preview, and purchase
          digital products such as templates, source codes, UI kits, graphics,
          ebooks, and software assets.
        </p>

        <h2
          style={{
            color: "#1E293B",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          What Pixer Offers
        </h2>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          • Modern and responsive marketplace UI
        </p>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          • Product browsing and filtering system
        </p>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          • Shopping cart and checkout interface
        </p>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          • Vendor dashboard and analytics UI
        </p>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          • Payment gateway frontend integration UI
        </p>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          • Fully responsive mobile-first design
        </p>

        <h2
          style={{
            color: "#1E293B",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Technologies Used
        </h2>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Pixer is developed using HTML5, CSS3, JavaScript ES6, Bootstrap 5,
          React JS, React Router DOM, Context API, Axios, React Toastify,
          Formik, Yup Validation, and other modern frontend technologies.
        </p>

        <h2
          style={{
            color: "#1E293B",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Frontend Educational Project
        </h2>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Pixer is currently a frontend-only educational and portfolio project
          created to demonstrate frontend development skills, responsive design,
          React JS concepts, reusable components, routing, API integration UI,
          and professional ecommerce marketplace design.
        </p>

        <h2
          style={{
            color: "#1E293B",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Our Vision
        </h2>

        <p
          style={{
            color: "#475569",
            lineHeight: "1.8",
          }}
        >
          We aim to build a professional digital marketplace experience with
          modern UI/UX practices, improved customer engagement, responsive
          layouts, and scalable frontend architecture for future enhancements.
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