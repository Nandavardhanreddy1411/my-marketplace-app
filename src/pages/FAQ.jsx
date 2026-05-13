function FAQ() {
  return (
    <section className="page-section">
      <div className="container">

        <div className="page-header">
          <h1>Frequently Asked Questions</h1>

          <p>
            Common questions about Pixer marketplace platform.
          </p>
        </div>

        <div className="faq-box">

          <div className="faq-item">
            <h3>How do I sell products?</h3>
            <p>
              Create a vendor account and upload your digital products.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do customers get instant download?</h3>
            <p>
              Yes, products are downloadable immediately after payment.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which payment methods are supported?</h3>
            <p>
              Stripe, Razorpay and PayPal payment UI integrations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;