import { useState } from 'react';
import { toast } from 'react-toastify';

function Notifications() {

  const [notifications, setNotifications] = useState([
    { id:1, type:'order', icon:'🛒', title:'Order Placed Successfully!', message:'Your order #ORD001 for React Admin Dashboard has been placed.', time:'2 mins ago', read:false, color:'#4F46E5', bg:'#EEF2FF' },
    { id:2, type:'payment', icon:'💰', title:'Payment Received', message:'Payment of ₹2,099 received for order #ORD001 via Razorpay.', time:'5 mins ago', read:false, color:'#16a34a', bg:'#dcfce7' },
    { id:3, type:'product', icon:'📦', title:'Product Approved!', message:'Your product "Modern UI Kit" has been approved by admin.', time:'1 hour ago', read:false, color:'#06B6D4', bg:'#ECFEFF' },
    { id:4, type:'review', icon:'⭐', title:'New Review Received', message:'John Miller left a 5-star review on React Admin Dashboard.', time:'2 hours ago', read:true, color:'#F59E0B', bg:'#FEF3C7' },
    { id:5, type:'warning', icon:'⚠️', title:'Low Stock Warning', message:'Your product "SEO Ebook Guide" has only 2 licenses remaining.', time:'3 hours ago', read:true, color:'#ef4444', bg:'#FEF2F2' },
    { id:6, type:'system', icon:'🔔', title:'System Update', message:'Pixer platform has been updated to v2.1.0 with new features.', time:'5 hours ago', read:true, color:'#8b5cf6', bg:'#f5f3ff' },
    { id:7, type:'order', icon:'🛒', title:'New Order Received', message:'Priya Singh purchased Modern UI Kit for ₹1,499.', time:'1 day ago', read:true, color:'#4F46E5', bg:'#EEF2FF' },
    { id:8, type:'payment', icon:'💸', title:'Payout Processed', message:'Your payout of ₹8,500 has been transferred to your bank account.', time:'2 days ago', read:true, color:'#16a34a', bg:'#dcfce7' },
    { id:9, type:'promo', icon:'🎉', title:'Special Offer Alert', message:'Use code PIXER20 to get 20% off on all products. Valid till May 31!', time:'3 days ago', read:true, color:'#F59E0B', bg:'#FEF3C7' },
    { id:10, type:'security', icon:'🔒', title:'New Login Detected', message:'New login detected from Chrome on Windows. Location: Hyderabad, IN.', time:'4 days ago', read:true, color:'#ef4444', bg:'#FEF2F2' },
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [activeToastTab, setActiveToastTab] = useState('basic');

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read:true })));
    toast.success('✅ All notifications marked as read!');
  };

  const markRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read:true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.info('🗑 Notification deleted!');
  };

  const clearAll = () => {
    setNotifications([]);
    toast.info('🗑 All notifications cleared!');
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return !n.read;
    return n.type === activeFilter;
  });

  // ===== TOAST DEMOS =====
  const showBasicToasts = (type) => {
    switch(type) {
      case 'success': toast.success('✅ Operation completed successfully!'); break;
      case 'error': toast.error('❌ Something went wrong. Please try again!'); break;
      case 'warning': toast.warning('⚠️ Please review before proceeding!'); break;
      case 'info': toast.info('ℹ️ Here is some useful information for you.'); break;
      case 'default': toast('🔔 This is a default notification!'); break;
      default: break;
    }
  };

  const showCustomToasts = (type) => {
    switch(type) {
      case 'order':
        toast.success(
          <div>
            <p style={{margin:'0 0 4px', fontWeight:'700'}}>🛒 Order Placed!</p>
            <p style={{margin:0, fontSize:'0.82rem'}}>Order #ORD005 confirmed. ₹2,099</p>
          </div>
        ); break;
      case 'payment':
        toast.success(
          <div>
            <p style={{margin:'0 0 4px', fontWeight:'700'}}>💰 Payment Received!</p>
            <p style={{margin:0, fontSize:'0.82rem'}}>₹1,499 credited via Razorpay</p>
          </div>
        ); break;
      case 'download':
        toast.info(
          <div>
            <p style={{margin:'0 0 4px', fontWeight:'700'}}>📥 Download Ready!</p>
            <p style={{margin:0, fontSize:'0.82rem'}}>Modern UI Kit is ready to download</p>
          </div>
        ); break;
      case 'coupon':
        toast.success(
          <div>
            <p style={{margin:'0 0 4px', fontWeight:'700'}}>🎟️ Coupon Applied!</p>
            <p style={{margin:0, fontSize:'0.82rem'}}>PIXER20 — 20% discount applied</p>
          </div>
        ); break;
      case 'review':
        toast.info(
          <div>
            <p style={{margin:'0 0 4px', fontWeight:'700'}}>⭐ New Review!</p>
            <p style={{margin:0, fontSize:'0.82rem'}}>John Miller gave 5 stars</p>
          </div>
        ); break;
      case 'error':
        toast.error(
          <div>
            <p style={{margin:'0 0 4px', fontWeight:'700'}}>❌ Payment Failed!</p>
            <p style={{margin:0, fontSize:'0.82rem'}}>Card declined. Please try another method.</p>
          </div>
        ); break;
      default: break;
    }
  };

  const showPositionToasts = (position) => {
    toast.info(`📍 Toast at ${position}!`, { position });
  };

  const showSpecialToasts = (type) => {
    switch(type) {
      case 'promise':
        const myPromise = new Promise((resolve) => setTimeout(resolve, 2000));
        toast.promise(myPromise, {
          pending: '⏳ Processing your order...',
          success: '✅ Order placed successfully!',
          error: '❌ Something went wrong!'
        }); break;
      case 'loading':
        const id = toast.loading('⏳ Uploading product...');
        setTimeout(() => {
          toast.update(id, {
            render: '✅ Product uploaded successfully!',
            type: 'success',
            isLoading: false,
            autoClose: 3000
          });
        }, 2500); break;
      case 'update':
        const tid = toast.info('📦 Preparing your download...', { autoClose: false });
        setTimeout(() => {
          toast.update(tid, {
            render: '✅ Download ready! Click to save.',
            type: 'success',
            autoClose: 3000
          });
        }, 2000); break;
      default: break;
    }
  };

  const filterButtons = [
    { id:'all', label:'All', count: notifications.length },
    { id:'unread', label:'Unread', count: unreadCount },
    { id:'order', label:'Orders', count: notifications.filter(n=>n.type==='order').length },
    { id:'payment', label:'Payments', count: notifications.filter(n=>n.type==='payment').length },
    { id:'system', label:'System', count: notifications.filter(n=>n.type==='system').length },
  ];

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px' }}>

      {/* Header */}
      <div style={{
        background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
        padding:'50px 0 40px', textAlign:'center', color:'white', marginBottom:'40px'
      }}>
        <h1 style={{ fontSize:'2.2rem', fontWeight:'700', margin:'0 0 8px' }}>
          🔔 Notifications & Toasts
        </h1>
        <p style={{ opacity:0.9, margin:0 }}>
          Manage notifications and preview all toast alert types
        </p>
        {unreadCount > 0 && (
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            background:'rgba(255,255,255,0.2)', borderRadius:'25px',
            padding:'8px 20px', marginTop:'15px'
          }}>
            <span style={{ fontWeight:'700' }}>🔴 {unreadCount} unread notifications</span>
          </div>
        )}
      </div>

      <div className="container-fluid px-5">
        <div className="row g-4">

          {/* LEFT — Notifications */}
          <div className="col-md-7">

            {/* Notification Header */}
            <div style={{
              display:'flex', justifyContent:'space-between',
              alignItems:'center', marginBottom:'20px', flexWrap:'wrap', gap:'10px'
            }}>
              <h4 style={{ color:'#1e1e2f', fontWeight:'700', margin:0 }}>
                Notifications
                {unreadCount > 0 && (
                  <span style={{
                    background:'#ef4444', color:'white',
                    borderRadius:'50%', width:'22px', height:'22px',
                    display:'inline-flex', alignItems:'center',
                    justifyContent:'center', fontSize:'0.72rem',
                    fontWeight:'700', marginLeft:'8px'
                  }}>{unreadCount}</span>
                )}
              </h4>
              <div style={{ display:'flex', gap:'8px' }}>
                <button onClick={markAllRead} style={{
                  background:'transparent', color:'#4F46E5',
                  border:'1.5px solid #4F46E5', padding:'7px 16px',
                  borderRadius:'20px', fontWeight:'600',
                  cursor:'pointer', fontSize:'0.82rem', fontFamily:'Poppins'
                }}>✅ Mark all read</button>
                <button onClick={clearAll} style={{
                  background:'#FEF2F2', color:'#ef4444',
                  border:'none', padding:'7px 16px',
                  borderRadius:'20px', fontWeight:'600',
                  cursor:'pointer', fontSize:'0.82rem', fontFamily:'Poppins'
                }}>🗑 Clear all</button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div style={{
              display:'flex', gap:'8px', marginBottom:'20px',
              flexWrap:'wrap'
            }}>
              {filterButtons.map(btn => (
                <button key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  style={{
                    padding:'7px 16px',
                    background: activeFilter === btn.id ? '#4F46E5' : 'white',
                    color: activeFilter === btn.id ? 'white' : '#555',
                    border: activeFilter === btn.id ? 'none' : '1.5px solid #e2e8f0',
                    borderRadius:'20px', fontWeight:'600',
                    cursor:'pointer', fontSize:'0.82rem', fontFamily:'Poppins',
                    display:'flex', alignItems:'center', gap:'5px'
                  }}>
                  {btn.label}
                  <span style={{
                    background: activeFilter === btn.id ? 'rgba(255,255,255,0.3)' : '#EEF2FF',
                    color: activeFilter === btn.id ? 'white' : '#4F46E5',
                    borderRadius:'50%', width:'18px', height:'18px',
                    display:'inline-flex', alignItems:'center',
                    justifyContent:'center', fontSize:'0.7rem', fontWeight:'700'
                  }}>{btn.count}</span>
                </button>
              ))}
            </div>

            {/* Notification List */}
            {filteredNotifications.length === 0 ? (
              <div style={{
                background:'white', borderRadius:'16px',
                padding:'60px 20px', textAlign:'center',
                boxShadow:'0 4px 15px rgba(0,0,0,0.06)'
              }}>
                <p style={{ fontSize:'3.5rem', margin:'0 0 15px' }}>🔕</p>
                <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'8px' }}>
                  No Notifications
                </h5>
                <p style={{ color:'#888', margin:0, fontSize:'0.9rem' }}>
                  You're all caught up!
                </p>
              </div>
            ) : (
              filteredNotifications.map((notif, i) => (
                <div key={notif.id}
                  onClick={() => markRead(notif.id)}
                  style={{
                    background: notif.read ? 'white' : '#f8f7ff',
                    borderRadius:'14px', padding:'18px 20px',
                    marginBottom:'12px',
                    boxShadow:'0 4px 15px rgba(0,0,0,0.05)',
                    display:'flex', alignItems:'flex-start',
                    gap:'15px', cursor:'pointer',
                    border: notif.read ? '1px solid transparent' : '1px solid #e0e7ff',
                    transition:'all 0.2s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateX(4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateX(0)'}
                >
                  {/* Icon */}
                  <div style={{
                    width:'46px', height:'46px', borderRadius:'12px',
                    background: notif.bg, display:'flex',
                    alignItems:'center', justifyContent:'center',
                    fontSize:'1.4rem', flexShrink:0
                  }}>{notif.icon}</div>

                  {/* Content */}
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'4px' }}>
                      <p style={{
                        margin:0, fontWeight: notif.read ? '600' : '700',
                        color:'#1e1e2f', fontSize:'0.92rem'
                      }}>{notif.title}</p>
                      {!notif.read && (
                        <div style={{
                          width:'8px', height:'8px', borderRadius:'50%',
                          background:'#4F46E5', flexShrink:0, marginTop:'4px'
                        }}></div>
                      )}
                    </div>
                    <p style={{ margin:'0 0 6px', color:'#666', fontSize:'0.83rem', lineHeight:'1.5' }}>
                      {notif.message}
                    </p>
                    <p style={{ margin:0, color:'#aaa', fontSize:'0.76rem' }}>
                      🕐 {notif.time}
                    </p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteNotification(notif.id); }}
                    style={{
                      background:'transparent', border:'none',
                      color:'#ccc', cursor:'pointer', fontSize:'1rem',
                      flexShrink:0, padding:'4px',
                      transition:'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color='#ef4444'}
                    onMouseLeave={e => e.currentTarget.style.color='#ccc'}
                  >✕</button>
                </div>
              ))
            )}
          </div>

          {/* RIGHT — Toast Demo Panel */}
          <div className="col-md-5">
            <div style={{
              background:'white', borderRadius:'16px',
              padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)',
              position:'sticky', top:'80px'
            }}>
              <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>
                🍞 Toast Notifications Demo
              </h5>
              <p style={{ color:'#888', fontSize:'0.85rem', marginBottom:'20px' }}>
                Click any button to preview toast alerts
              </p>

              {/* Toast Tab Buttons */}
              <div style={{ display:'flex', gap:'6px', marginBottom:'20px', flexWrap:'wrap' }}>
                {['basic','custom','position','special'].map(tab => (
                  <button key={tab}
                    onClick={() => setActiveToastTab(tab)}
                    style={{
                      padding:'6px 14px',
                      background: activeToastTab === tab ? '#4F46E5' : '#f1f5f9',
                      color: activeToastTab === tab ? 'white' : '#555',
                      border:'none', borderRadius:'20px',
                      fontWeight:'600', cursor:'pointer',
                      fontSize:'0.8rem', fontFamily:'Poppins',
                      textTransform:'capitalize'
                    }}>{tab}</button>
                ))}
              </div>

              {/* ===== BASIC TOASTS ===== */}
              {activeToastTab === 'basic' && (
                <div>
                  <p style={{ color:'#555', fontWeight:'600', fontSize:'0.85rem', marginBottom:'12px' }}>
                    Basic Toast Types
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                    {[
                      { type:'success', label:'✅ Success Toast', bg:'#dcfce7', color:'#16a34a', border:'#bbf7d0' },
                      { type:'error', label:'❌ Error Toast', bg:'#FEF2F2', color:'#ef4444', border:'#fecaca' },
                      { type:'warning', label:'⚠️ Warning Toast', bg:'#FEF3C7', color:'#F59E0B', border:'#fde68a' },
                      { type:'info', label:'ℹ️ Info Toast', bg:'#EFF6FF', color:'#3b82f6', border:'#bfdbfe' },
                      { type:'default', label:'🔔 Default Toast', bg:'#f8fafc', color:'#555', border:'#e2e8f0' },
                    ].map((btn, i) => (
                      <button key={i}
                        onClick={() => showBasicToasts(btn.type)}
                        style={{
                          padding:'12px 18px', background:btn.bg,
                          color:btn.color, border:`1.5px solid ${btn.border}`,
                          borderRadius:'10px', fontWeight:'600',
                          cursor:'pointer', fontSize:'0.88rem',
                          fontFamily:'Poppins', textAlign:'left',
                          transition:'all 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity='0.8'}
                        onMouseLeave={e => e.currentTarget.style.opacity='1'}
                      >{btn.label}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* ===== CUSTOM TOASTS ===== */}
              {activeToastTab === 'custom' && (
                <div>
                  <p style={{ color:'#555', fontWeight:'600', fontSize:'0.85rem', marginBottom:'12px' }}>
                    Custom Context Toasts
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                    {[
                      { type:'order', label:'🛒 Order Confirmation', bg:'#EEF2FF', color:'#4F46E5', border:'#c7d2fe' },
                      { type:'payment', label:'💰 Payment Received', bg:'#dcfce7', color:'#16a34a', border:'#bbf7d0' },
                      { type:'download', label:'📥 Download Ready', bg:'#ECFEFF', color:'#06B6D4', border:'#a5f3fc' },
                      { type:'coupon', label:'🎟️ Coupon Applied', bg:'#FEF3C7', color:'#F59E0B', border:'#fde68a' },
                      { type:'review', label:'⭐ New Review', bg:'#f5f3ff', color:'#8b5cf6', border:'#ddd6fe' },
                      { type:'error', label:'❌ Payment Failed', bg:'#FEF2F2', color:'#ef4444', border:'#fecaca' },
                    ].map((btn, i) => (
                      <button key={i}
                        onClick={() => showCustomToasts(btn.type)}
                        style={{
                          padding:'12px 18px', background:btn.bg,
                          color:btn.color, border:`1.5px solid ${btn.border}`,
                          borderRadius:'10px', fontWeight:'600',
                          cursor:'pointer', fontSize:'0.88rem',
                          fontFamily:'Poppins', textAlign:'left',
                          transition:'all 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity='0.8'}
                        onMouseLeave={e => e.currentTarget.style.opacity='1'}
                      >{btn.label}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* ===== POSITION TOASTS ===== */}
              {activeToastTab === 'position' && (
                <div>
                  <p style={{ color:'#555', fontWeight:'600', fontSize:'0.85rem', marginBottom:'12px' }}>
                    Toast Positions
                  </p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
                    {[
                      { pos:'top-left', label:'↖ Top Left' },
                      { pos:'top-center', label:'⬆ Top Center' },
                      { pos:'top-right', label:'↗ Top Right' },
                      { pos:'bottom-left', label:'↙ Bottom Left' },
                      { pos:'bottom-center', label:'⬇ Bottom Center' },
                      { pos:'bottom-right', label:'↘ Bottom Right' },
                    ].map((btn, i) => (
                      <button key={i}
                        onClick={() => showPositionToasts(btn.pos)}
                        style={{
                          padding:'12px', background:'#f8fafc',
                          color:'#4F46E5', border:'1.5px solid #e2e8f0',
                          borderRadius:'10px', fontWeight:'600',
                          cursor:'pointer', fontSize:'0.82rem',
                          fontFamily:'Poppins', textAlign:'center',
                          transition:'all 0.2s ease'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background='#EEF2FF'; e.currentTarget.style.borderColor='#4F46E5'; }}
                        onMouseLeave={e => { e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#e2e8f0'; }}
                      >{btn.label}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* ===== SPECIAL TOASTS ===== */}
              {activeToastTab === 'special' && (
                <div>
                  <p style={{ color:'#555', fontWeight:'600', fontSize:'0.85rem', marginBottom:'12px' }}>
                    Advanced Toast Features
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                    {[
                      {
                        type:'promise',
                        label:'⏳ Promise Toast',
                        desc:'Shows pending → success/error',
                        bg:'#EEF2FF', color:'#4F46E5', border:'#c7d2fe'
                      },
                      {
                        type:'loading',
                        label:'🔄 Loading → Success',
                        desc:'Loading spinner that updates',
                        bg:'#ECFEFF', color:'#06B6D4', border:'#a5f3fc'
                      },
                      {
                        type:'update',
                        label:'🔁 Updating Toast',
                        desc:'Toast that changes content',
                        bg:'#f5f3ff', color:'#8b5cf6', border:'#ddd6fe'
                      },
                    ].map((btn, i) => (
                      <button key={i}
                        onClick={() => showSpecialToasts(btn.type)}
                        style={{
                          padding:'14px 18px', background:btn.bg,
                          color:btn.color, border:`1.5px solid ${btn.border}`,
                          borderRadius:'12px', fontWeight:'600',
                          cursor:'pointer', fontFamily:'Poppins',
                          textAlign:'left', transition:'all 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity='0.8'}
                        onMouseLeave={e => e.currentTarget.style.opacity='1'}
                      >
                        <p style={{ margin:'0 0 3px', fontSize:'0.9rem' }}>{btn.label}</p>
                        <p style={{ margin:0, fontSize:'0.75rem', opacity:0.7 }}>{btn.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Toast Config Info */}
                  <div style={{
                    background:'#f8fafc', borderRadius:'12px',
                    padding:'15px', marginTop:'20px',
                    border:'1px solid #e2e8f0'
                  }}>
                    <p style={{ color:'#4F46E5', fontWeight:'700', margin:'0 0 10px', fontSize:'0.85rem' }}>
                      ⚙️ Current Toast Config (App.jsx)
                    </p>
                    {[
                      { key:'Position', value:'top-right' },
                      { key:'Auto Close', value:'3000ms' },
                      { key:'Progress Bar', value:'Visible' },
                      { key:'Theme', value:'Light' },
                      { key:'Close on Click', value:'Enabled' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display:'flex', justifyContent:'space-between',
                        padding:'5px 0',
                        borderBottom: i < 4 ? '1px solid #e2e8f0' : 'none'
                      }}>
                        <span style={{ color:'#888', fontSize:'0.78rem' }}>{item.key}</span>
                        <span style={{ color:'#4F46E5', fontWeight:'600', fontSize:'0.78rem' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Notification Settings Card */}
            <div style={{
              background:'white', borderRadius:'16px',
              padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)',
              marginTop:'20px'
            }}>
              <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'18px' }}>
                🔔 Notification Preferences
              </h6>
              {[
                { label:'Order Updates', desc:'Get notified on order status', enabled:true },
                { label:'Payment Alerts', desc:'Payment success/failure alerts', enabled:true },
                { label:'Promotional Offers', desc:'Deals and discount alerts', enabled:false },
                { label:'Product Reviews', desc:'When someone reviews your product', enabled:true },
                { label:'System Alerts', desc:'Platform updates and maintenance', enabled:false },
              ].map((pref, i, arr) => (
                <div key={i} style={{
                  display:'flex', justifyContent:'space-between',
                  alignItems:'center', padding:'12px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <div>
                    <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.88rem' }}>{pref.label}</p>
                    <p style={{ margin:0, color:'#888', fontSize:'0.78rem' }}>{pref.desc}</p>
                  </div>
                  <div
                    onClick={() => toast.success('✅ Preference updated!')}
                    style={{
                      width:'42px', height:'24px', borderRadius:'12px',
                      background: pref.enabled ? '#4F46E5' : '#e2e8f0',
                      cursor:'pointer', position:'relative', flexShrink:0,
                      transition:'all 0.3s ease'
                    }}>
                    <div style={{
                      width:'18px', height:'18px', borderRadius:'50%',
                      background:'white', position:'absolute',
                      top:'3px', left: pref.enabled ? '21px' : '3px',
                      transition:'all 0.3s ease'
                    }}></div>
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

export default Notifications;