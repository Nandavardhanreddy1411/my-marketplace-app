import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, discount, finalTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId] = useState(`ORD${Math.floor(Math.random() * 90000) + 10000}`);

  const tax = Math.round(finalTotal * 0.18);
  const grandTotal = finalTotal + tax;

  const formik = useFormik({
    initialValues: {
      firstName: '', lastName: '', email: '', phone: '',
      address: '', city: '', state: '', pincode: '',
      cardNumber: '', cardName: '', expiry: '', cvv: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('❌ Required'),
      lastName: Yup.string().required('❌ Required'),
      email: Yup.string().email('❌ Invalid email').required('❌ Required'),
      phone: Yup.string().min(10, '❌ Invalid phone').required('❌ Required'),
      address: Yup.string().required('❌ Required'),
      city: Yup.string().required('❌ Required'),
      state: Yup.string().required('❌ Required'),
      pincode: Yup.string().min(6, '❌ Invalid pincode').required('❌ Required'),
    }),
    onSubmit: () => {
      toast.success('🎉 Order Placed Successfully!');
      clearCart();
      setOrderPlaced(true);
    }
  });

  const inputStyle = (field) => ({
    width:'100%', padding:'12px 15px',
    border: formik.touched[field] && formik.errors[field] ? '1.5px solid #ef4444' : '1.5px solid #e2e8f0',
    borderRadius:'10px', fontSize:'0.9rem',
    fontFamily:'Poppins', outline:'none',
    color:'#1e1e2f', background:'#f8fafc', marginBottom:'5px'
  });

  const labelStyle = {
    fontWeight:'600', color:'#333',
    display:'block', marginBottom:'6px', fontSize:'0.88rem'
  };

  if (orderPlaced) {
    return (
      <div style={{background:'#F8FAFC', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px'}}>
        <div style={{background:'white', borderRadius:'20px', padding:'50px 40px', maxWidth:'550px', width:'100%', textAlign:'center', boxShadow:'0 20px 60px rgba(0,0,0,0.1)'}}>
          <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'#dcfce7', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', margin:'0 auto 20px'}}>✅</div>
          <h2 style={{color:'#16a34a', fontWeight:'700', marginBottom:'10px'}}>Order Placed Successfully!</h2>
          <p style={{color:'#666', marginBottom:'25px'}}>Thank you for your purchase! Your digital products are ready.</p>
          <div style={{background:'#F8FAFC', borderRadius:'12px', padding:'20px', marginBottom:'25px', textAlign:'left'}}>
            {[
              { label:'Order ID', value:`#${orderId}` },
              { label:'Payment', value:'Completed ✅' },
              { label:'Amount Paid', value:`₹${grandTotal.toLocaleString('en-IN')}` },
              { label:'Delivery', value:'Instant Download' },
            ].map((row, i) => (
              <div key={i} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom: i < 3 ? '1px solid #e2e8f0' : 'none'}}>
                <span style={{color:'#888', fontSize:'0.9rem'}}>{row.label}</span>
                <span style={{color:'#1e1e2f', fontWeight:'600', fontSize:'0.9rem'}}>{row.value}</span>
              </div>
            ))}
          </div>
          <div style={{display:'flex', gap:'12px', justifyContent:'center'}}>
            <button onClick={() => navigate('/dashboard')} style={{padding:'12px 25px', background:'#4F46E5', color:'white', border:'none', borderRadius:'25px', fontWeight:'700', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem'}}>
              📥 My Downloads
            </button>
            <button onClick={() => navigate('/products')} style={{padding:'12px 25px', background:'transparent', color:'#4F46E5', border:'2px solid #4F46E5', borderRadius:'25px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem'}}>
              🛍️ Shop More
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px'}}>
      <div style={{background:'linear-gradient(135deg, #4F46E5, #06B6D4)', padding:'40px 0', textAlign:'center', color:'white', marginBottom:'40px'}}>
        <h1 style={{fontSize:'2rem', fontWeight:'700', margin:'0 0 8px'}}>💳 Checkout</h1>
        <p style={{opacity:0.9, margin:0}}>Complete your purchase securely</p>
        <div style={{display:'flex', justifyContent:'center', gap:'0', marginTop:'20px', alignItems:'center'}}>
          {['Cart', 'Billing', 'Payment', 'Confirmation'].map((step, i) => (
            <div key={i} style={{display:'flex', alignItems:'center'}}>
              <div style={{width:'32px', height:'32px', borderRadius:'50%', background: i <= 2 ? 'white' : 'rgba(255,255,255,0.3)', color: i <= 2 ? '#4F46E5' : 'white', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', fontSize:'0.85rem'}}>{i + 1}</div>
              <span style={{color: i <= 2 ? 'white' : 'rgba(255,255,255,0.6)', fontSize:'0.82rem', margin:'0 8px', fontWeight: i <= 2 ? '600' : '400'}}>{step}</span>
              {i < 3 && <div style={{width:'30px', height:'2px', background: i < 2 ? 'white' : 'rgba(255,255,255,0.3)', marginRight:'8px'}}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid px-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="row g-4">

            <div className="col-md-8">
              {/* Billing Info */}
              <div style={{background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px'}}>
                <h5 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'25px'}}>👤 Billing Information</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label style={labelStyle}>First Name *</label>
                    <input type="text" name="firstName" placeholder="First name"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.firstName} style={inputStyle('firstName')} />
                    {formik.touched.firstName && formik.errors.firstName && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.firstName}</p>}
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Last Name *</label>
                    <input type="text" name="lastName" placeholder="Last name"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.lastName} style={inputStyle('lastName')} />
                    {formik.touched.lastName && formik.errors.lastName && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.lastName}</p>}
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" name="email" placeholder="your@email.com"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.email} style={inputStyle('email')} />
                    {formik.touched.email && formik.errors.email && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.email}</p>}
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" name="phone" placeholder="+91 98765 43210"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.phone} style={inputStyle('phone')} />
                    {formik.touched.phone && formik.errors.phone && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.phone}</p>}
                  </div>
                  <div className="col-md-12">
                    <label style={labelStyle}>Address *</label>
                    <input type="text" name="address" placeholder="Street address"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.address} style={inputStyle('address')} />
                    {formik.touched.address && formik.errors.address && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.address}</p>}
                  </div>
                  <div className="col-md-4">
                    <label style={labelStyle}>City *</label>
                    <input type="text" name="city" placeholder="City"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.city} style={inputStyle('city')} />
                    {formik.touched.city && formik.errors.city && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.city}</p>}
                  </div>
                  <div className="col-md-4">
                    <label style={labelStyle}>State *</label>
                    <select name="state" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state} style={inputStyle('state')}>
                      <option value="">Select State</option>
                      {['Andhra Pradesh','Telangana','Karnataka','Tamil Nadu','Maharashtra','Delhi','Gujarat','Rajasthan','Uttar Pradesh','West Bengal'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {formik.touched.state && formik.errors.state && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.state}</p>}
                  </div>
                  <div className="col-md-4">
                    <label style={labelStyle}>Pincode *</label>
                    <input type="text" name="pincode" placeholder="500001"
                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.pincode} style={inputStyle('pincode')} />
                    {formik.touched.pincode && formik.errors.pincode && <p style={{color:'#ef4444', fontSize:'0.78rem', margin:'0 0 10px'}}>{formik.errors.pincode}</p>}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div style={{background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)'}}>
                <h5 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'25px'}}>💳 Payment Method</h5>
                <div style={{display:'flex', gap:'12px', marginBottom:'25px', flexWrap:'wrap'}}>
                  {[
                    { id:'card', label:'💳 Credit/Debit Card', color:'#4F46E5' },
                    { id:'upi', label:'📱 UPI Payment', color:'#06B6D4' },
                    { id:'razorpay', label:'⚡ Razorpay', color:'#3395FF' },
                    { id:'cod', label:'💵 Cash on Delivery', color:'#16a34a' },
                  ].map(method => (
                    <div key={method.id} onClick={() => setPaymentMethod(method.id)} style={{padding:'12px 20px', borderRadius:'12px', border: paymentMethod === method.id ? `2px solid ${method.color}` : '2px solid #e2e8f0', background: paymentMethod === method.id ? `${method.color}10` : 'white', cursor:'pointer', fontWeight:'600', fontSize:'0.85rem', color: paymentMethod === method.id ? method.color : '#888', transition:'all 0.3s ease'}}>
                      {method.label}
                    </div>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="row g-3">
                    <div style={{background:'#EEF2FF', borderRadius:'12px', padding:'15px 20px', marginBottom:'10px', display:'flex', alignItems:'center', gap:'10px'}}>
                      <span style={{fontSize:'1.5rem'}}>🔒</span>
                      <p style={{margin:0, color:'#4F46E5', fontSize:'0.85rem', fontWeight:'500'}}>Your payment information is encrypted and secure.</p>
                    </div>
                    <div className="col-md-12">
                      <label style={labelStyle}>Card Number</label>
                      <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" onChange={formik.handleChange} value={formik.values.cardNumber} style={inputStyle('cardNumber')} />
                    </div>
                    <div className="col-md-12">
                      <label style={labelStyle}>Cardholder Name</label>
                      <input type="text" name="cardName" placeholder="Name on card" onChange={formik.handleChange} value={formik.values.cardName} style={inputStyle('cardName')} />
                    </div>
                    <div className="col-md-6">
                      <label style={labelStyle}>Expiry Date</label>
                      <input type="text" name="expiry" placeholder="MM/YY" onChange={formik.handleChange} value={formik.values.expiry} style={inputStyle('expiry')} />
                    </div>
                    <div className="col-md-6">
                      <label style={labelStyle}>CVV</label>
                      <input type="password" name="cvv" placeholder="•••" onChange={formik.handleChange} value={formik.values.cvv} style={inputStyle('cvv')} />
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div>
                    <label style={labelStyle}>UPI ID</label>
                    <input type="text" placeholder="yourname@upi" style={inputStyle('upi')} />
                    <div style={{display:'flex', gap:'10px', marginTop:'15px', flexWrap:'wrap'}}>
                      {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                        <div key={app} style={{padding:'10px 18px', background:'#f8fafc', border:'1.5px solid #e2e8f0', borderRadius:'10px', cursor:'pointer', fontWeight:'600', fontSize:'0.85rem', color:'#555'}}>{app}</div>
                      ))}
                    </div>
                  </div>
                )}

                {paymentMethod === 'razorpay' && (
                  <div style={{textAlign:'center', padding:'30px', background:'#f0f8ff', borderRadius:'12px'}}>
                    <p style={{fontSize:'3rem', margin:'0 0 10px'}}>⚡</p>
                    <h5 style={{color:'#3395FF', fontWeight:'700', marginBottom:'8px'}}>Pay with Razorpay</h5>
                    <p style={{color:'#666', marginBottom:'20px', fontSize:'0.9rem'}}>Supports Cards, UPI, Net Banking & Wallets</p>
                    <button type="button" style={{background:'#3395FF', color:'white', border:'none', padding:'12px 30px', borderRadius:'25px', fontWeight:'700', cursor:'pointer', fontFamily:'Poppins'}}>Open Razorpay</button>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div style={{textAlign:'center', padding:'30px', background:'#f0fdf4', borderRadius:'12px'}}>
                    <p style={{fontSize:'3rem', margin:'0 0 10px'}}>💵</p>
                    <h5 style={{color:'#16a34a', fontWeight:'700', marginBottom:'8px'}}>Cash on Delivery</h5>
                    <p style={{color:'#666', fontSize:'0.9rem'}}>Pay when your digital product is delivered to your email.</p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — Order Summary */}
            <div className="col-md-4">
              <div style={{background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', position:'sticky', top:'80px'}}>
                <h6 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'20px'}}>📋 Order Summary</h6>

                {cart.map((item, i) => (
                  <div key={i} style={{display:'flex', gap:'12px', padding:'10px 0', borderBottom:'1px solid #f0f0f0'}}>
                    <img src={item.image} alt="" style={{width:'50px', height:'40px', borderRadius:'8px', objectFit:'cover', flexShrink:0}} />
                    <div style={{flex:1}}>
                      <p style={{margin:0, fontSize:'0.82rem', fontWeight:'600', color:'#1e1e2f'}}>{item.title.substring(0, 25)}...</p>
                      <p style={{margin:0, fontSize:'0.78rem', color:'#888'}}>Qty: {item.quantity}</p>
                    </div>
                    <span style={{color:'#4F46E5', fontWeight:'700', fontSize:'0.85rem', flexShrink:0}}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}

                <div style={{marginTop:'15px'}}>
                  {[
                    { label:'Subtotal', value:`₹${cartTotal.toLocaleString('en-IN')}` },
                    { label:'Discount', value: discount > 0 ? `-₹${discount.toLocaleString('en-IN')}` : '₹0', green: discount > 0 },
                    { label:'GST (18%)', value:`₹${tax.toLocaleString('en-IN')}` },
                  ].map((row, i) => (
                    <div key={i} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f8f8f8'}}>
                      <span style={{color:'#888', fontSize:'0.85rem'}}>{row.label}</span>
                      <span style={{color: row.green ? '#16a34a' : '#555', fontWeight:'600', fontSize:'0.85rem'}}>{row.value}</span>
                    </div>
                  ))}
                  <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0 0'}}>
                    <span style={{color:'#1e1e2f', fontWeight:'700'}}>Total</span>
                    <span style={{color:'#4F46E5', fontWeight:'700', fontSize:'1.2rem'}}>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button type="submit" style={{width:'100%', marginTop:'20px', padding:'15px', background:'linear-gradient(135deg, #4F46E5, #06B6D4)', color:'white', border:'none', borderRadius:'12px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins'}}>
                  🎉 Place Order — ₹{grandTotal.toLocaleString('en-IN')}
                </button>

                <div style={{marginTop:'20px', textAlign:'center'}}>
                  {['🔒 SSL Secured', '✅ Verified', '💳 PCI Compliant'].map((b, i) => (
                    <span key={i} style={{color:'#888', fontSize:'0.75rem', display:'block', marginBottom:'4px'}}>{b}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;