// function FAQ() {
//   return (
//     <section className="page-section">
//       <div className="container">

//         <div className="page-header">
//           <h1>Frequently Asked Questions</h1>

//           <p>
//             Common questions about Pixer marketplace platform.
//           </p>
//         </div>

//         <div className="faq-box">

//           <div className="faq-item">
//             <h3>How do I sell products?</h3>
//             <p>
//               Create a vendor account and upload your digital products.
//             </p>
//           </div>

//           <div className="faq-item">
//             <h3>Do customers get instant download?</h3>
//             <p>
//               Yes, products are downloadable immediately after payment.
//             </p>
//           </div>

//           <div className="faq-item">
//             <h3>Which payment methods are supported?</h3>
//             <p>
//               Stripe, Razorpay and PayPal payment UI integrations.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default FAQ;

function FAQ() {
  return (
    <section
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        padding: "80px 20px",
        fontFamily: "Poppins",
      }}
    >
      <div className="container">

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#4F46E5",
              marginBottom: "15px",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p
            style={{
              color: "#64748B",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
            }}
          >
            Find answers to common questions about the Pixer marketplace platform,
            digital products, payments, vendor accounts, and customer support.
          </p>
        </div>

        {/* FAQ Container */}
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >

          {/* FAQ Item */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              borderLeft: "5px solid #4F46E5",
            }}
          >
            <h3
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              How do I sell products on Pixer?
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Create a vendor account, upload your digital products, add pricing,
              descriptions, preview images, and manage your products through the
              vendor dashboard interface.
            </p>
          </div>

          {/* FAQ Item */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              borderLeft: "5px solid #06B6D4",
            }}
          >
            <h3
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Do customers get instant product downloads?
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Yes, customers can instantly access downloadable digital products
              after successful payment confirmation through the checkout system.
            </p>
          </div>

          {/* FAQ Item */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              borderLeft: "5px solid #F59E0B",
            }}
          >
            <h3
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Which payment methods are supported?
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Pixer supports frontend payment UI integrations for Razorpay,
              Stripe, PayPal, UPI, Cards, and Net Banking payment methods.
            </p>
          </div>

          {/* FAQ Item */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              borderLeft: "5px solid #4F46E5",
            }}
          >
            <h3
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Is Pixer mobile responsive?
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Yes, Pixer is fully responsive and optimized for desktops, tablets,
              and mobile devices using Bootstrap 5 and modern frontend design practices.
            </p>
          </div>

          {/* FAQ Item */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              borderLeft: "5px solid #06B6D4",
            }}
          >
            <h3
              style={{
                color: "#1E293B",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Is Pixer a real ecommerce platform?
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Pixer is currently a frontend-only educational and portfolio project
              created to demonstrate React JS, responsive UI, routing, API integration,
              and ecommerce marketplace design concepts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;