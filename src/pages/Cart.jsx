import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const navigate = useNavigate();
  const { cart, cartTotal, cartCount, discount, finalTotal, removeFromCart, updateQuantity, clearCart, applyCoupon, removeCoupon, coupon } = useCart();

  const handleCoupon = () => {
    const val = document.getElementById('couponInput').value.toUpperCase();
    if (val === 'PIXER20' || val === 'SAVE10' || val === 'FLAT50') {
      applyCoupon(val);
      toast.success(`🎉 Coupon ${val} applied!`);
    } else {
      toast.error('❌ Invalid coupon code!');
    }
  };

  const tax = Math.round(finalTotal * 0.18);
  const grandTotal = finalTotal + tax;

  if (cart.length === 0) {
    return (
      <div style={{background:'#F8FAFC', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center', padding:'40px 20px'}}>
        <p style={{fontSize:'5rem', margin:'0 0 20px'}}>🛒</p>
        <h2 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'10px'}}>Your Cart is Empty!</h2>
        <p style={{color:'#888', marginBottom:'30px', fontSize:'1rem'}}>Looks like you haven't added any products yet.</p>
        <button onClick={() => navigate('/products')} style={{background:'#4F46E5', color:'white', border:'none', padding:'14px 35px', borderRadius:'25px', fontWeight:'700', cursor:'pointer', fontSize:'1rem', fontFamily:'Poppins'}}>
          🛍️ Browse Products
        </button>
      </div>
    );
  }

  return (
    <div style={{background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px'}}>
      <div style={{background:'linear-gradient(135deg, #4F46E5, #06B6D4)', padding:'40px 0', textAlign:'center', color:'white', marginBottom:'40px'}}>
        <h1 style={{fontSize:'2rem', fontWeight:'700', margin:'0 0 8px'}}>🛒 Shopping Cart</h1>
        <p style={{opacity:0.9, margin:0}}>{cartCount} item{cartCount > 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="container-fluid px-5">
        <div className="row g-4">

          <div className="col-md-8">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
              <h5 style={{color:'#1e1e2f', fontWeight:'700', margin:0}}>Cart Items ({cartCount})</h5>
              <button onClick={() => { clearCart(); toast.info('🗑 Cart cleared!'); }} style={{background:'#FEF2F2', color:'#ef4444', border:'none', padding:'8px 18px', borderRadius:'20px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem', fontFamily:'Poppins'}}>
                🗑 Clear All
              </button>
            </div>

            {cart.map((item) => (
              <div key={item.id} style={{background:'white', borderRadius:'16px', padding:'20px', marginBottom:'15px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap'}}>
                <img src={item.image} alt={item.title} style={{width:'100px', height:'80px', borderRadius:'12px', objectFit:'cover', flexShrink:0}} />
                <div style={{flex:1, minWidth:'150px'}}>
                  <span style={{background:'#EEF2FF', color:'#4F46E5', padding:'3px 10px', borderRadius:'20px', fontSize:'0.72rem', fontWeight:'500'}}>{item.category}</span>
                  <h6 style={{color:'#1e1e2f', fontWeight:'700', margin:'8px 0 4px', fontSize:'1rem'}}>{item.title}</h6>
                  <p style={{color:'#4F46E5', fontWeight:'700', fontSize:'1.1rem', margin:0}}>₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{width:'34px', height:'34px', borderRadius:'50%', border:'1.5px solid #4F46E5', background:'white', color:'#4F46E5', fontSize:'1.1rem', cursor:'pointer', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center'}}>−</button>
                  <span style={{fontWeight:'700', fontSize:'1.1rem', minWidth:'25px', textAlign:'center', color:'#1e1e2f'}}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{width:'34px', height:'34px', borderRadius:'50%', border:'1.5px solid #4F46E5', background:'#4F46E5', color:'white', fontSize:'1.1rem', cursor:'pointer', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center'}}>+</button>
                </div>
                <div style={{textAlign:'right', minWidth:'100px'}}>
                  <p style={{color:'#888', fontSize:'0.8rem', margin:'0 0 4px'}}>Subtotal</p>
                  <p style={{color:'#1e1e2f', fontWeight:'700', fontSize:'1.1rem', margin:0}}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
                <button onClick={() => { removeFromCart(item.id); toast.info(`Removed ${item.title}`); }} style={{background:'#FEF2F2', color:'#ef4444', border:'none', width:'36px', height:'36px', borderRadius:'50%', cursor:'pointer', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>✕</button>
              </div>
            ))}

            <button onClick={() => navigate('/products')} style={{background:'transparent', color:'#4F46E5', border:'2px solid #4F46E5', padding:'12px 25px', borderRadius:'25px', fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', fontFamily:'Poppins', marginTop:'10px'}}>
              ← Continue Shopping
            </button>
          </div>

          <div className="col-md-4">
            <div style={{background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'20px'}}>
              <h6 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'15px'}}>🎟️ Coupon Code</h6>
              <div style={{display:'flex', gap:'10px'}}>
                <input type="text" id="couponInput" placeholder="Enter coupon code" style={{flex:1, padding:'11px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#FFFF'}} />
                <button onClick={handleCoupon} style={{background:'#4F46E5', color:'white', border:'none', padding:'11px 18px', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem'}}>Apply</button>
              </div>
              <div style={{marginTop:'15px'}}>
                <p style={{color:'#888', fontSize:'0.8rem', marginBottom:'8px'}}>Available coupons:</p>
                {[
                  { code:'PIXER20', desc:'20% off on all products' },
                  { code:'SAVE10', desc:'10% off on orders' },
                  { code:'FLAT50', desc:'₹50 flat discount' },
                ].map((c, i) => (
                  <div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 12px', background:'#f8fafc', borderRadius:'8px', marginBottom:'6px', cursor:'pointer', border:'1px dashed #e2e8f0'}}
                    onClick={() => { document.getElementById('couponInput').value = c.code; }}>
                    <div>
                      <span style={{color:'#4F46E5', fontWeight:'700', fontSize:'0.85rem'}}>{c.code}</span>
                      <p style={{margin:0, color:'#888', fontSize:'0.75rem'}}>{c.desc}</p>
                    </div>
                    <span style={{color:'#4F46E5', fontSize:'0.78rem', fontWeight:'600'}}>Tap to apply</span>
                  </div>
                ))}
              </div>
              {coupon && (
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'12px', background:'#dcfce7', padding:'10px 14px', borderRadius:'10px'}}>
                  <span style={{color:'#16a34a', fontWeight:'700', fontSize:'0.85rem'}}>✅ {coupon} applied!</span>
                  <button onClick={() => { removeCoupon(); toast.info('Coupon removed'); }} style={{background:'none', border:'none', color:'#ef4444', cursor:'pointer', fontSize:'0.82rem', fontWeight:'600'}}>Remove</button>
                </div>
              )}
            </div>

            <div style={{background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'20px'}}>
              <h6 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'20px'}}>📋 Order Summary</h6>
              {[
                { label:`Subtotal (${cartCount} items)`, value:`₹${cartTotal.toLocaleString('en-IN')}`, color:'#555' },
                { label:'Discount', value: discount > 0 ? `-₹${discount.toLocaleString('en-IN')}` : '₹0', color: discount > 0 ? '#16a34a' : '#555' },
                { label:'Tax (18% GST)', value:`₹${tax.toLocaleString('en-IN')}`, color:'#555' },
              ].map((row, i) => (
                <div key={i} style={{display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid #f0f0f0'}}>
                  <span style={{color:'#888', fontSize:'0.9rem'}}>{row.label}</span>
                  <span style={{color:row.color, fontWeight:'600', fontSize:'0.9rem'}}>{row.value}</span>
                </div>
              ))}
              <div style={{display:'flex', justifyContent:'space-between', padding:'15px 0 5px'}}>
                <span style={{color:'#1e1e2f', fontWeight:'700', fontSize:'1.1rem'}}>Grand Total</span>
                <span style={{color:'#4F46E5', fontWeight:'700', fontSize:'1.3rem'}}>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div style={{background:'#dcfce7', borderRadius:'10px', padding:'10px 14px', marginTop:'12px'}}>
                  <p style={{color:'#16a34a', fontWeight:'600', margin:0, fontSize:'0.85rem'}}>🎉 You save ₹{discount.toLocaleString('en-IN')} on this order!</p>
                </div>
              )}
            </div>

            <button onClick={() => navigate('/checkout')} style={{width:'100%', padding:'16px', background:'linear-gradient(135deg, #4F46E5, #06B6D4)', color:'white', border:'none', borderRadius:'14px', fontWeight:'700', fontSize:'1.1rem', cursor:'pointer', fontFamily:'Poppins', marginBottom:'12px'}}>
              Proceed to Checkout →
            </button>
            <button onClick={() => navigate('/products')} style={{width:'100%', padding:'13px', background:'transparent', color:'#4F46E5', border:'2px solid #4F46E5', borderRadius:'14px', fontWeight:'600', fontSize:'0.95rem', cursor:'pointer', fontFamily:'Poppins'}}>
              ← Continue Shopping
            </button>

            <div style={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'20px', flexWrap:'wrap'}}>
              {['🔒 Secure Payment', '✅ Easy Returns', '📦 Instant Download'].map((badge, i) => (
                <span key={i} style={{color:'#888', fontSize:'0.78rem', display:'flex', alignItems:'center', gap:'4px'}}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;