// function Terms() {

//   return (

//     <div className="page-section">

//       <h1>Terms & Conditions</h1>

//     </div>

//   );
// }

// export default Terms;

import SEO from "../components/SEO";

function Terms() {
  return (
    <div
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "Poppins",
      }}
    >
      <SEO
        title="Terms & Conditions"
        description="Terms and Conditions for Pixer Marketplace"
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              color: "#4F46E5",
              fontWeight: "700",
              fontSize: "2.5rem",
              marginBottom: "10px",
            }}
          >
            Terms & Conditions
          </h1>

          <p
            style={{
              color: "#64748B",
              fontSize: "1rem",
            }}
          >
            Last Updated: May 2026
          </p>
        </div>

        {/* Intro */}
        <div style={{ marginBottom: "35px" }}>
          <p
            style={{
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "1rem",
            }}
          >
            Welcome to <strong>Pixer – Ecommerce Multivendor Digital Marketplace</strong>.
            By accessing and using this platform, you agree to comply with the
            following Terms & Conditions. Please read them carefully before using
            our website and services.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By using Pixer Marketplace, users agree to follow all terms, policies, and platform guidelines mentioned on this website.",
          },
          {
            title: "2. Frontend-Only Educational Project",
            content:
              "Pixer is currently a frontend-only educational/demo project developed for learning and portfolio purposes. No real transactions or backend processing are performed.",
          },
          {
            title: "3. User Responsibilities",
            content:
              "Users must provide accurate information while using forms, login systems, checkout pages, or other frontend features.",
          },
          {
            title: "4. Product Information",
            content:
              "Products displayed on the platform such as templates, UI kits, graphics, and source codes are used for demonstration purposes only.",
          },
          {
            title: "5. Payment Gateway UI",
            content:
              "Payment methods such as Razorpay, Stripe, and PayPal are integrated only as frontend UI demonstrations. No real payment transactions occur in this project.",
          },
          {
            title: "6. Intellectual Property",
            content:
              "All logos, UI designs, layouts, graphics, and project content belong to Pixer Marketplace and should not be copied without permission.",
          },
          {
            title: "7. Prohibited Activities",
            content:
              "Users must not misuse the platform, attempt unauthorized access, upload harmful content, or perform activities that affect website security.",
          },
          {
            title: "8. Third-Party Libraries",
            content:
              "This project uses third-party frontend technologies such as React JS, Bootstrap, React Router, Toastify, and other UI libraries.",
          },
          {
            title: "9. Limitation of Liability",
            content:
              "Pixer Marketplace shall not be held responsible for any damages, data loss, or issues caused by misuse of this demo platform.",
          },
          {
            title: "10. Changes to Terms",
            content:
              "We may update these Terms & Conditions from time to time to improve transparency and platform functionality.",
          },
        ].map((section, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              padding: "25px",
              borderRadius: "16px",
              background: "#F8FAFC",
              borderLeft: "5px solid #4F46E5",
            }}
          >
            <h3
              style={{
                color: "#1E293B",
                marginBottom: "12px",
                fontWeight: "700",
              }}
            >
              {section.title}
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              {section.content}
            </p>
          </div>
        ))}

        {/* Contact */}
        <div
          style={{
            marginTop: "40px",
            background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
            padding: "35px",
            borderRadius: "18px",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Contact Us
          </h2>

          <p style={{ marginBottom: "8px" }}>
            📧 support@pixer.com
          </p>

          <p style={{ marginBottom: "8px" }}>
            🌐 Pixer – Ecommerce Multivendor Digital Marketplace
          </p>

          <p style={{ margin: 0 }}>
            © 2026 Pixer Marketplace. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;