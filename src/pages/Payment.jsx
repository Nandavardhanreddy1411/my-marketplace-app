import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

function Payment() {
  const navigate = useNavigate();
  const { cart, finalTotal, clearCart } = useCart();
  const [selectedGateway, setSelectedGateway] = useState('stripe');
  const [processing, setProcessing] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [orderId] = useState(`ORD${Math.floor(Math.random() * 90000) + 10000}`);

  const tax = Math.round(finalTotal * 0.18);
  const grandTotal = finalTotal + tax;

 const handlePayment = () => {

  // RAZORPAY PAYMENT
  if (selectedGateway === 'razorpay') {

    const options = {
      key: "rzp_test_1234567890", // Replace with your Razorpay Test Key
      amount: grandTotal * 100,
      currency: "INR",
      name: "Pixer Marketplace",
      description: "Digital Product Purchase",

      image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",

      handler: function (response) {
        setPaymentDone(true);
        clearCart();

        toast.success("🎉 Payment Successful!");

        console.log(response);
      },

      prefill: {
        name: "Nandavardhan",
        email: "test@example.com",
        contact: "9876543210",
      },

      theme: {
        color: "#3395FF",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();

    return;
  }

  // NORMAL UI PAYMENT
  setProcessing(true);

  toast.info('⏳ Processing your payment...');

  setTimeout(() => {
    setProcessing(false);
    setPaymentDone(true);
    clearCart();

    toast.success('🎉 Payment Successful!');
    }, 2500);
  };

  if (paymentDone) {
    return (
      <div style={{ background:'#F8FAFC', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px' }}>
        <div style={{ background:'white', borderRadius:'20px', padding:'50px 40px', maxWidth:'520px', width:'100%', textAlign:'center', boxShadow:'0 20px 60px rgba(0,0,0,0.1)' }}>
          <div style={{ width:'90px', height:'90px', borderRadius:'50%', background:'linear-gradient(135deg, #16a34a, #22c55e)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', margin:'0 auto 25px', boxShadow:'0 10px 30px rgba(22,163,74,0.3)' }}>✅</div>
          <h2 style={{ color:'#16a34a', fontWeight:'700', marginBottom:'8px' }}>Payment Successful!</h2>
          <p style={{ color:'#666', marginBottom:'30px', fontSize:'0.95rem' }}>Your payment has been processed securely.</p>

          <div style={{ background:'#F8FAFC', borderRadius:'14px', padding:'20px', marginBottom:'25px', textAlign:'left', border:'1px dashed #e2e8f0' }}>
            <p style={{ color:'#888', fontSize:'0.78rem', textAlign:'center', margin:'0 0 15px', textTransform:'uppercase', letterSpacing:'1px' }}>Payment Receipt</p>
            {[
              { label:'Order ID', value:`#${orderId}` },
              { label:'Payment Method', value: selectedGateway === 'stripe' ? '💳 Stripe' : selectedGateway === 'razorpay' ? '⚡ Razorpay' : '🅿️ PayPal' },
              { label:'Amount Paid', value:`₹${grandTotal.toLocaleString('en-IN')}` },
              { label:'Status', value:'✅ Completed' },
              { label:'Date', value: new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) },
            ].map((row, i) => (
              <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'9px 0', borderBottom: i < 4 ? '1px solid #e2e8f0' : 'none' }}>
                <span style={{ color:'#888', fontSize:'0.88rem' }}>{row.label}</span>
                <span style={{ color:'#1e1e2f', fontWeight:'600', fontSize:'0.88rem' }}>{row.value}</span>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:'12px', justifyContent:'center' }}>
            <button onClick={() => navigate('/dashboard')} style={{ padding:'12px 25px', background:'#4F46E5', color:'white', border:'none', borderRadius:'25px', fontWeight:'700', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem' }}>
              📥 My Downloads
            </button>
            <button onClick={() => navigate('/products')} style={{ padding:'12px 25px', background:'transparent', color:'#4F46E5', border:'2px solid #4F46E5', borderRadius:'25px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem' }}>
              🛍️ Shop More
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px' }}>

      <div style={{ background:'linear-gradient(135deg, #4F46E5, #06B6D4)', padding:'40px 0', textAlign:'center', color:'white', marginBottom:'40px' }}>
        <h1 style={{ fontSize:'2rem', fontWeight:'700', margin:'0 0 8px' }}>🔒 Secure Payment</h1>
        <p style={{ opacity:0.9, margin:0 }}>Choose your preferred payment method</p>
      </div>

      <div className="container-fluid px-5">
        <div className="row g-4 justify-content-center">

          {/* LEFT */}
          <div className="col-md-7">

            {/* Gateway Selection */}
            <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
              <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'25px' }}>Select Payment Gateway</h5>
              <div className="row g-3">
                {[
                  { id:'stripe', name:'Stripe', icon:'💳', color:'#635BFF', bg:'#F0EFFF', desc:'International cards, Apple Pay, Google Pay', features:['Visa / Mastercard','American Express','Apple Pay','Google Pay'] },
                  { id:'razorpay', name:'Razorpay', icon:'⚡', color:'#3395FF', bg:'#EFF6FF', desc:'UPI, Net Banking, Cards & Wallets', features:['UPI / BHIM','Net Banking','Credit/Debit Cards','Wallets'] },
                  { id:'paypal', name:'PayPal', icon:'🅿️', color:'#003087', bg:'#EEF4FF', desc:'Global payments via PayPal account', features:['PayPal Balance','Linked Cards','Buy Now Pay Later','Global Support'] },
                ].map(gateway => (
                  <div className="col-md-4" key={gateway.id}>
                    <div onClick={() => setSelectedGateway(gateway.id)} style={{ border: selectedGateway === gateway.id ? `2px solid ${gateway.color}` : '2px solid #e2e8f0', borderRadius:'14px', padding:'20px', cursor:'pointer', textAlign:'center', background: selectedGateway === gateway.id ? gateway.bg : 'white', transition:'all 0.3s ease', position:'relative' }}>
                      {selectedGateway === gateway.id && (
                        <div style={{ position:'absolute', top:'10px', right:'10px', width:'20px', height:'20px', borderRadius:'50%', background:gateway.color, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.7rem', fontWeight:'700' }}>✓</div>
                      )}
                      <div style={{ fontSize:'2.5rem', marginBottom:'10px' }}>{gateway.icon}</div>
                      <h6 style={{ color: selectedGateway === gateway.id ? gateway.color : '#1e1e2f', fontWeight:'700', marginBottom:'6px' }}>{gateway.name}</h6>
                      <p style={{ color:'#888', fontSize:'0.78rem', margin:'0 0 12px', lineHeight:'1.4' }}>{gateway.desc}</p>
                      <div style={{ textAlign:'left' }}>
                        {gateway.features.map((f, i) => (
                          <p key={i} style={{ margin:'0 0 4px', fontSize:'0.75rem', color: selectedGateway === gateway.id ? gateway.color : '#888', display:'flex', alignItems:'center', gap:'5px' }}>
                            <span>✓</span> {f}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STRIPE UI */}
            {selectedGateway === 'stripe' && (
              <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'25px' }}>
                  <span style={{ fontSize:'1.8rem' }}>💳</span>
                  <div>
                    <h5 style={{ margin:0, color:'#635BFF', fontWeight:'700' }}>Stripe Checkout</h5>
                    <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>Powered by Stripe — World's most trusted payment platform</p>
                  </div>
                </div>
                <div style={{ marginBottom:'18px' }}>
                  <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.88rem' }}>Card Number</label>
                  <div style={{ border:'1.5px solid #e2e8f0', borderRadius:'10px', padding:'12px 15px', display:'flex', alignItems:'center', gap:'10px', background:'#f8fafc' }}>
                    <span style={{ fontSize:'1.2rem' }}>💳</span>
                    <input type="text" placeholder="1234 5678 9012 3456" style={{ border:'none', outline:'none', fontFamily:'Poppins', fontSize:'0.95rem', color:'#1e1e2f', background:'transparent', flex:1 }} />
                    <div style={{ display:'flex', gap:'5px' }}>
                      {['VISA','MC','AMEX'].map(card => (
                        <span key={card} style={{ background:'#EEF2FF', color:'#4F46E5', padding:'2px 6px', borderRadius:'4px', fontSize:'0.65rem', fontWeight:'700' }}>{card}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.88rem' }}>Cardholder Name</label>
                    <input type="text" placeholder="Name on card" style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                  </div>
                  <div className="col-md-3">
                    <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.88rem' }}>Expiry</label>
                    <input type="text" placeholder="MM/YY" style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                  </div>
                  <div className="col-md-3">
                    <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.88rem' }}>CVV</label>
                    <input type="password" placeholder="•••" style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                  </div>
                </div>
                <label style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'15px', color:'#555', fontSize:'0.85rem', cursor:'pointer' }}>
                  <input type="checkbox" style={{ accentColor:'#635BFF' }} /> Save card for future payments
                </label>
                <div style={{ display:'flex', gap:'15px', marginTop:'20px', flexWrap:'wrap' }}>
                  {['🔒 SSL Encrypted','✅ PCI DSS Compliant','🛡️ Fraud Protection'].map((b, i) => (
                    <span key={i} style={{ color:'#635BFF', fontSize:'0.78rem', fontWeight:'500' }}>{b}</span>
                  ))}
                </div>
              </div>
            )}

            {/* RAZORPAY UI */}
            {selectedGateway === 'razorpay' && (
              <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'25px' }}>
                  <span style={{ fontSize:'1.8rem' }}>⚡</span>
                  <div>
                    <h5 style={{ margin:0, color:'#3395FF', fontWeight:'700' }}>Razorpay Payment</h5>
                    <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>India's leading payment gateway</p>
                  </div>
                </div>
                <div style={{ marginBottom:'20px' }}>
                  <p style={{ fontWeight:'600', color:'#333', marginBottom:'12px', fontSize:'0.88rem' }}>Pay via UPI</p>
                  <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
                    {[
                      { name:'GPay', icon:'🟢', color:'#34a853' },
                      { name:'PhonePe', icon:'🟣', color:'#7c3aed' },
                      { name:'Paytm', icon:'🔵', color:'#00b9f1' },
                      { name:'BHIM', icon:'🟠', color:'#f59e0b' },
                    ].map(app => (
                      <div key={app.name} style={{ padding:'12px 20px', border:`1.5px solid ${app.color}30`, borderRadius:'12px', cursor:'pointer', textAlign:'center', background:`${app.color}08` }}>
                        <p style={{ fontSize:'1.5rem', margin:'0 0 4px' }}>{app.icon}</p>
                        <p style={{ margin:0, fontSize:'0.78rem', fontWeight:'600', color:app.color }}>{app.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom:'20px' }}>
                  <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.88rem' }}>Or Enter UPI ID</label>
                  <div style={{ display:'flex', gap:'10px' }}>
                    <input type="text" placeholder="yourname@upi" style={{ flex:1, padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                    <button type="button" onClick={() => toast.success('✅ UPI ID Verified!')} style={{ padding:'12px 20px', background:'#3395FF', color:'white', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins' }}>Verify</button>
                  </div>
                </div>
                <div style={{ marginBottom:'20px' }}>
                  <p style={{ fontWeight:'600', color:'#333', marginBottom:'12px', fontSize:'0.88rem' }}>Net Banking</p>
                  <select style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }}>
                    <option>Select your bank</option>
                    {['SBI','HDFC Bank','ICICI Bank','Axis Bank','Kotak Bank','Punjab National Bank'].map(b => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div style={{ background:'#EFF6FF', borderRadius:'10px', padding:'12px 15px', display:'flex', alignItems:'center', gap:'10px' }}>
                  <span style={{ fontSize:'1.2rem' }}>🔒</span>
                  <p style={{ margin:0, color:'#3395FF', fontSize:'0.82rem', fontWeight:'500' }}>Secured by Razorpay — RBI Approved Payment Gateway</p>
                </div>
              </div>
            )}

            {/* PAYPAL UI */}
            {selectedGateway === 'paypal' && (
              <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'25px' }}>
                  <span style={{ fontSize:'1.8rem' }}>🅿️</span>
                  <div>
                    <h5 style={{ margin:0, color:'#003087', fontWeight:'700' }}>PayPal Checkout</h5>
                    <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>Pay securely with your PayPal account</p>
                  </div>
                </div>
                <div style={{ textAlign:'center', padding:'30px', background:'#f8fafc', borderRadius:'14px', marginBottom:'20px', border:'1.5px solid #e2e8f0' }}>
                  <p style={{ fontSize:'3.5rem', margin:'0 0 10px' }}>🅿️</p>
                  <h5 style={{ color:'#003087', fontWeight:'700', marginBottom:'5px' }}>Log in to PayPal</h5>
                  <p style={{ color:'#666', marginBottom:'20px', fontSize:'0.9rem' }}>You'll be redirected to PayPal to complete your payment</p>
                  <div style={{ maxWidth:'320px', margin:'0 auto' }}>
                    <input type="email" placeholder="PayPal Email" style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', marginBottom:'12px' }} />
                    <input type="password" placeholder="Password" style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', marginBottom:'15px' }} />
                    <button type="button" style={{ width:'100%', padding:'13px', background:'#0070BA', color:'white', border:'none', borderRadius:'25px', fontWeight:'700', cursor:'pointer', fontFamily:'Poppins', fontSize:'1rem' }}>
                      Log In to PayPal
                    </button>
                  </div>
                </div>
                <div className="row g-3">
                  {[
                    { icon:'🛡️', title:'Buyer Protection', desc:'Full refund if item not received' },
                    { icon:'🌍', title:'Global Payments', desc:'Pay in 200+ countries' },
                    { icon:'⚡', title:'Instant Transfer', desc:'Instant payment confirmation' },
                  ].map((f, i) => (
                    <div className="col-md-4" key={i}>
                      <div style={{ textAlign:'center', padding:'15px', background:'#f8fafc', borderRadius:'12px' }}>
                        <p style={{ fontSize:'1.5rem', margin:'0 0 6px' }}>{f.icon}</p>
                        <p style={{ margin:'0 0 4px', fontWeight:'600', color:'#003087', fontSize:'0.82rem' }}>{f.title}</p>
                        <p style={{ margin:0, color:'#888', fontSize:'0.75rem' }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAY NOW BUTTON */}
            <button onClick={handlePayment} disabled={processing} style={{
              width:'100%', padding:'18px',
              background: processing ? '#94a3b8'
                : selectedGateway === 'stripe' ? 'linear-gradient(135deg, #635BFF, #8B83FF)'
                : selectedGateway === 'razorpay' ? 'linear-gradient(135deg, #3395FF, #06B6D4)'
                : 'linear-gradient(135deg, #003087, #0070BA)',
              color:'white', border:'none', borderRadius:'14px',
              fontWeight:'700', fontSize:'1.1rem',
              cursor: processing ? 'not-allowed' : 'pointer',
              fontFamily:'Poppins', transition:'all 0.3s ease',
              boxShadow: processing ? 'none' : '0 8px 25px rgba(79,70,229,0.3)'
            }}>
              {processing ? (
                <span>⏳ Processing Payment...</span>
              ) : (
                <span>
                  {selectedGateway === 'stripe' ? '💳 Pay with Stripe'
                   : selectedGateway === 'razorpay' ? '⚡ Pay with Razorpay'
                   : '🅿️ Pay with PayPal'} — ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              )}
            </button>

          </div>

          {/* RIGHT — Order Summary */}
          <div className="col-md-4">
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'20px', position:'sticky', top:'80px' }}>
              <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>📋 Order Summary</h6>
              {cart.length === 0 ? (
                <p style={{ color:'#888', textAlign:'center' }}>No items in cart</p>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <div key={i} style={{ display:'flex', gap:'12px', padding:'10px 0', borderBottom:'1px solid #f0f0f0' }}>
                      <img src={item.image} alt="" style={{ width:'50px', height:'40px', borderRadius:'8px', objectFit:'cover', flexShrink:0 }} />
                      <div style={{ flex:1 }}>
                        <p style={{ margin:0, fontSize:'0.82rem', fontWeight:'600', color:'#1e1e2f' }}>{item.title.substring(0, 22)}...</p>
                        <p style={{ margin:0, fontSize:'0.75rem', color:'#888' }}>Qty: {item.quantity}</p>
                      </div>
                      <span style={{ color:'#4F46E5', fontWeight:'700', fontSize:'0.85rem' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                  <div style={{ marginTop:'15px' }}>
                    {[
                      { label:'Subtotal', value:`₹${finalTotal.toLocaleString('en-IN')}` },
                      { label:'GST (18%)', value:`₹${tax.toLocaleString('en-IN')}` },
                    ].map((row, i) => (
                      <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f8f8f8' }}>
                        <span style={{ color:'#888', fontSize:'0.85rem' }}>{row.label}</span>
                        <span style={{ color:'#555', fontWeight:'600', fontSize:'0.85rem' }}>{row.value}</span>
                      </div>
                    ))}
                    <div style={{ display:'flex', justifyContent:'space-between', padding:'12px 0 5px' }}>
                      <span style={{ color:'#1e1e2f', fontWeight:'700' }}>Total</span>
                      <span style={{ color:'#4F46E5', fontWeight:'700', fontSize:'1.2rem' }}>₹{grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'20px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'15px' }}>🔒 Security & Trust</h6>
              {[
                { icon:'🔒', title:'SSL Encryption', desc:'256-bit SSL security' },
                { icon:'🛡️', title:'Fraud Protection', desc:'Real-time fraud detection' },
                { icon:'↩️', title:'Easy Refunds', desc:'7-day refund guarantee' },
                { icon:'📞', title:'24/7 Support', desc:'Always here to help' },
              ].map((item, i) => (
                <div key={i} style={{ display:'flex', gap:'12px', padding:'10px 0', borderBottom: i < 3 ? '1px solid #f8f8f8' : 'none' }}>
                  <span style={{ fontSize:'1.2rem' }}>{item.icon}</span>
                  <div>
                    <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.85rem' }}>{item.title}</p>
                    <p style={{ margin:0, color:'#888', fontSize:'0.78rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;