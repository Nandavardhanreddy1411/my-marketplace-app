import { useCart, useAuth, useWishlist } from '../context/CartContext';
import { toast } from 'react-toastify';

const demoProducts = [
  { id:1, title:'React Admin Dashboard', category:'Template', price:2099, image:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' },
  { id:2, title:'Modern UI Kit', category:'UI Kit', price:1499, image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
  { id:3, title:'Ecommerce Source Code', category:'Source Code', price:4099, image:'https://images.unsplash.com/photo-1518770660439-4636190af475' },
];

function StateDemo() {

  const { cart, cartTotal, cartCount, discount, finalTotal, addToCart, removeFromCart, updateQuantity, clearCart, applyCoupon, removeCoupon, coupon } = useCart();
  const { auth, login, logout } = useAuth();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist, notifications, markNotificationRead, unreadCount } = useWishlist();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`✅ ${product.title} added to cart!`);
  };

  const handleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info(`Removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`❤️ Added to wishlist!`);
    }
  };

  const handleLogin = () => {
    login({ name:'Nanda Kumar', email:'nanda@email.com', role:'Customer' });
    toast.success('✅ Logged in via Context API!');
  };

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', padding:'30px 40px' }}>

      {/* Header */}
      <div style={{ marginBottom:'25px' }}>
        <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>
          ⚡ State Management Demo
        </h2>
        <p style={{ color:'#888', margin:0 }}>
          Context API managing Cart, Auth, Wishlist & Notifications globally.
        </p>
      </div>

      {/* State Summary Cards */}
      <div className="row g-4" style={{ marginBottom:'30px' }}>
        {[
          { label:'Cart Items', value: cartCount, icon:'🛒', color:'#4F46E5', bg:'#EEF2FF' },
          { label:'Cart Total', value:`₹${cartTotal.toLocaleString('en-IN')}`, icon:'💰', color:'#16a34a', bg:'#dcfce7' },
          { label:'Wishlist', value: wishlist.length, icon:'❤️', color:'#ef4444', bg:'#FEF2F2' },
          { label:'Notifications', value: unreadCount, icon:'🔔', color:'#F59E0B', bg:'#FEF3C7' },
        ].map((card, i) => (
          <div className="col-md-3" key={i}>
            <div style={{ background:'white', borderRadius:'14px', padding:'20px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
                <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{card.label}</p>
                <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:card.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem' }}>{card.icon}</div>
              </div>
              <h3 style={{ margin:0, color:card.color, fontWeight:'700', fontSize:'1.6rem' }}>{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">

        {/* LEFT — Products + Auth */}
        <div className="col-md-7">

          {/* Auth State */}
          <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
            <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'15px' }}>🔐 Auth State (Context API)</h5>
            <div style={{ background:'#f8fafc', borderRadius:'12px', padding:'15px', marginBottom:'15px' }}>
              <p style={{ margin:'0 0 5px' }}><strong>Status:</strong>{' '}
                <span style={{ color: auth.isLoggedIn ? '#16a34a' : '#ef4444', fontWeight:'700' }}>
                  {auth.isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}
                </span>
              </p>
              {auth.isLoggedIn && (
                <>
                  <p style={{ margin:'0 0 5px' }}><strong>Name:</strong> {auth.user.name}</p>
                  <p style={{ margin:'0 0 5px' }}><strong>Email:</strong> {auth.user.email}</p>
                  <p style={{ margin:0 }}><strong>Role:</strong> {auth.user.role}</p>
                </>
              )}
            </div>
            <div style={{ display:'flex', gap:'10px' }}>
              <button onClick={handleLogin}
                style={{ padding:'10px 20px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins' }}>
                🔐 Login
              </button>
              <button onClick={() => { logout(); toast.info('Logged out!'); }}
                style={{ padding:'10px 20px', background:'#ef4444', color:'white', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins' }}>
                🚪 Logout
              </button>
            </div>
          </div>

          {/* Products */}
          <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
            <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>🛍️ Products — Add to Cart / Wishlist</h5>
            {demoProducts.map(product => (
              <div key={product.id} style={{ display:'flex', alignItems:'center', gap:'15px', padding:'15px 0', borderBottom:'1px solid #f0f0f0' }}>
                <img src={product.image} alt="" style={{ width:'60px', height:'50px', borderRadius:'8px', objectFit:'cover', flexShrink:0 }} />
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.9rem' }}>{product.title}</p>
                  <p style={{ margin:0, color:'#4F46E5', fontWeight:'700' }}>₹{product.price.toLocaleString('en-IN')}</p>
                </div>
                <div style={{ display:'flex', gap:'8px' }}>
                  <button onClick={() => handleWishlist(product)}
                    style={{ padding:'7px 12px', background: isInWishlist(product.id) ? '#FEF2F2' : '#f1f5f9', color: isInWishlist(product.id) ? '#ef4444' : '#64748b', border:'none', borderRadius:'8px', cursor:'pointer', fontSize:'1rem' }}>
                    {isInWishlist(product.id) ? '❤️' : '🤍'}
                  </button>
                  <button onClick={() => handleAddToCart(product)}
                    style={{ padding:'7px 14px', background:'#4F46E5', color:'white', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem', fontFamily:'Poppins' }}>
                    + Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT — Cart + Notifications */}
        <div className="col-md-5">

          {/* Cart State */}
          <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'15px' }}>
              <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>🛒 Cart State</h5>
              {cart.length > 0 && (
                <button onClick={() => { clearCart(); toast.info('Cart cleared!'); }}
                  style={{ background:'#FEF2F2', color:'#ef4444', border:'none', padding:'5px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600', cursor:'pointer' }}>
                  Clear All
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign:'center', padding:'25px 0' }}>
                <p style={{ fontSize:'2rem', margin:'0 0 8px' }}>🛒</p>
                <p style={{ color:'#888', margin:0, fontSize:'0.9rem' }}>Cart is empty</p>
              </div>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} style={{ display:'flex', alignItems:'center', gap:'10px', padding:'10px 0', borderBottom:'1px solid #f8f8f8' }}>
                    <img src={item.image} alt="" style={{ width:'40px', height:'35px', borderRadius:'6px', objectFit:'cover' }} />
                    <div style={{ flex:1 }}>
                      <p style={{ margin:0, fontSize:'0.82rem', fontWeight:'600', color:'#1e1e2f' }}>{item.title.substring(0,20)}...</p>
                      <p style={{ margin:0, fontSize:'0.8rem', color:'#4F46E5', fontWeight:'700' }}>₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:'5px' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width:'24px', height:'24px', borderRadius:'50%', border:'1px solid #4F46E5', background:'#4F46E5', cursor:'pointer', fontSize:'0.8rem', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center' }}>−</button>
                      <span style={{ fontWeight:'700', fontSize:'0.85rem', minWidth:'16px', textAlign:'center' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width:'24px', height:'24px', borderRadius:'50%', border:'1px solid #4F46E5', background:'#4F46E5', cursor:'pointer', fontSize:'0.8rem', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center' }}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}
                      style={{ background:'#FEF2F2', color:'#ef4444', border:'none', width:'28px', height:'28px', borderRadius:'6px', cursor:'pointer', fontSize:'0.9rem' }}>✕</button>
                  </div>
                ))}

                {/* Coupon */}
                <div style={{ marginTop:'15px', marginBottom:'10px' }}>
                  <div style={{ display:'flex', gap:'8px' }}>
                    <input type="text" placeholder="Coupon: PIXER20 / SAVE10"
                      id="couponInput"
                      style={{ flex:1, padding:'8px 12px', border:'1.5px solid #e2e8f0', borderRadius:'8px', fontFamily:'Poppins', fontSize:'0.82rem', outline:'none' }} />
                    <button onClick={() => {
                        const val = document.getElementById('couponInput').value.toUpperCase();
                        if (val === 'PIXER20' || val === 'SAVE10') {
                          applyCoupon(val);
                          toast.success(`🎉 Coupon ${val} applied!`);
                        } else {
                          toast.error('❌ Invalid coupon!');
                        }
                      }}
                      style={{ padding:'8px 14px', background:'#4F46E5', color:'white', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.82rem' }}>
                      Apply
                    </button>
                  </div>
                  {coupon && (
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'8px', background:'#dcfce7', padding:'6px 12px', borderRadius:'8px' }}>
                      <span style={{ color:'#16a34a', fontSize:'0.82rem', fontWeight:'600' }}>✅ {coupon} applied!</span>
                      <button onClick={() => { removeCoupon(); toast.info('Coupon removed'); }}
                        style={{ background:'none', border:'none', color:'#ef4444', cursor:'pointer', fontSize:'0.8rem', fontWeight:'600' }}>Remove</button>
                    </div>
                  )}
                </div>

                {/* Cart Summary */}
                <div style={{ background:'#f8fafc', borderRadius:'10px', padding:'12px', marginTop:'10px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                    <span style={{ color:'#888', fontSize:'0.85rem' }}>Subtotal</span>
                    <span style={{ fontWeight:'600', fontSize:'0.85rem' }}>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discount > 0 && (
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                      <span style={{ color:'#16a34a', fontSize:'0.85rem' }}>Discount</span>
                      <span style={{ color:'#16a34a', fontWeight:'600', fontSize:'0.85rem' }}>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div style={{ display:'flex', justifyContent:'space-between', borderTop:'1px solid #e2e8f0', paddingTop:'8px', marginTop:'6px' }}>
                    <span style={{ color:'#1e1e2f', fontWeight:'700' }}>Total</span>
                    <span style={{ color:'#4F46E5', fontWeight:'700', fontSize:'1.1rem' }}>₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button onClick={() => window.location.href='#/checkout'}
                  style={{ width:'100%', marginTop:'12px', padding:'12px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem' }}>
                  Proceed to Checkout →
                </button>
              </>
            )}
          </div>

          {/* Notifications State */}
          <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
            <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'15px' }}>
              🔔 Notifications ({unreadCount} unread)
            </h5>
            {notifications.map(notif => (
              <div key={notif.id} onClick={() => markNotificationRead(notif.id)}
                style={{ display:'flex', alignItems:'center', gap:'10px', padding:'10px', borderRadius:'8px', marginBottom:'8px', background: notif.read ? '#f8fafc' : '#EEF2FF', cursor:'pointer', border: notif.read ? '1px solid #f0f0f0' : '1px solid #c7d2fe' }}>
                <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: notif.read ? '#e2e8f0' : '#4F46E5', flexShrink:0 }}></div>
                <p style={{ margin:0, fontSize:'0.85rem', color: notif.read ? '#888' : '#1e1e2f', fontWeight: notif.read ? '400' : '600' }}>
                  {notif.message}
                </p>
              </div>
            ))}
            <p style={{ color:'#aaa', fontSize:'0.78rem', margin:'10px 0 0', textAlign:'center' }}>
              Click notification to mark as read
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StateDemo;