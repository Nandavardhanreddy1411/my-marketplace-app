import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import SEO from '../components/SEO';

const spendingData = [
  { month: 'Jan', spent: 1200 },
  { month: 'Feb', spent: 2400 },
  { month: 'Mar', spent: 1800 },
  { month: 'Apr', spent: 3200 },
  { month: 'May', spent: 2800 },
  { month: 'Jun', spent: 4200 },
];

const downloadData = [
  { month: 'Jan', downloads: 2 },
  { month: 'Feb', downloads: 4 },
  { month: 'Mar', downloads: 3 },
  { month: 'Apr', downloads: 6 },
  { month: 'May', downloads: 5 },
  { month: 'Jun', downloads: 8 },
];

function Dashboard() {

  const [activePage, setActivePage] = useState('overview');
  const [tickets, setTickets] = useState([
    { id:'#TKT001', subject:'Payment not processed', status:'Open', date:'10 May 2025', priority:'High', priorityColor:'#ef4444', priorityBg:'#FEF2F2' },
    { id:'#TKT002', subject:'Download link broken', status:'Resolved', date:'08 May 2025', priority:'Medium', priorityColor:'#F59E0B', priorityBg:'#FEF3C7' },
    { id:'#TKT003', subject:'Wrong product delivered', status:'In Progress', date:'05 May 2025', priority:'High', priorityColor:'#ef4444', priorityBg:'#FEF2F2' },
  ]);
  const [newTicket, setNewTicket] = useState({ subject:'', message:'' });
  const [showTicketForm, setShowTicketForm] = useState(false);

  const stats = [
    { label:'Total Orders', value:'24', icon:'🛒', color:'#4F46E5', bg:'#EEF2FF', change:'+3 this month' },
    { label:'Wishlist Items', value:'12', icon:'❤️', color:'#ef4444', bg:'#FEF2F2', change:'+2 this week' },
    { label:'Total Spent', value:'₹42,580', icon:'💰', color:'#F59E0B', bg:'#FEF3C7', change:'+₹3,200 this month' },
    { label:'Downloads', value:'18', icon:'📥', color:'#06B6D4', bg:'#ECFEFF', change:'+5 this week' },
  ];

  const orders = [
    { id:'#ORD001', product:'React Admin Dashboard', date:'12 May 2025', amount:'₹2,099', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD002', product:'Modern UI Kit', date:'10 May 2025', amount:'₹1,499', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD003', product:'Mobile App UI Kit', date:'08 May 2025', amount:'₹2,999', status:'Processing', statusColor:'#F59E0B', statusBg:'#FEF3C7' },
    { id:'#ORD004', product:'Node.js Backend Starter', date:'05 May 2025', amount:'₹4,599', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD005', product:'SEO Ebook Guide', date:'01 May 2025', amount:'₹999', status:'Cancelled', statusColor:'#ef4444', statusBg:'#FEF2F2' },
  ];

  const purchaseHistory = [
    { id:'#PUR001', product:'React Admin Dashboard', category:'Template', date:'12 May 2025', amount:'₹2,099', invoice:'INV-001' },
    { id:'#PUR002', product:'Modern UI Kit', category:'UI Kit', date:'10 May 2025', amount:'₹1,499', invoice:'INV-002' },
    { id:'#PUR003', product:'Node.js Backend Starter', category:'Source Code', date:'05 May 2025', amount:'₹4,599', invoice:'INV-003' },
    { id:'#PUR004', product:'SEO Ebook Guide', category:'Ebook', date:'01 May 2025', amount:'₹999', invoice:'INV-004' },
  ];

  const notifications = [
    { id:1, icon:'🛒', title:'Order Confirmed', message:'Your order #ORD003 has been confirmed.', time:'2 hours ago', read:false, color:'#EEF2FF', iconColor:'#4F46E5' },
    { id:2, icon:'📥', title:'Download Ready', message:'React Admin Dashboard is ready to download.', time:'5 hours ago', read:false, color:'#ECFEFF', iconColor:'#06B6D4' },
    { id:3, icon:'💰', title:'Payment Successful', message:'Payment of ₹2,099 received successfully.', time:'1 day ago', read:true, color:'#dcfce7', iconColor:'#16a34a' },
    { id:4, icon:'⭐', title:'Review Request', message:'How was your experience with Modern UI Kit?', time:'2 days ago', read:true, color:'#FEF3C7', iconColor:'#F59E0B' },
    { id:5, icon:'🎉', title:'Welcome Offer', message:'Get 20% off on your next purchase!', time:'3 days ago', read:true, color:'#FEF2F2', iconColor:'#ef4444' },
  ];

  const [notifList, setNotifList] = useState(notifications);

  const wishlist = [
    { title:'React Native Starter', category:'Source Code', price:'₹5,499', image:'https://images.unsplash.com/photo-1526498460520-4c246339dccb' },
    { title:'Figma Design System', category:'Graphics', price:'₹1,899', image:'https://images.unsplash.com/photo-1561070791-2526d30994b5' },
    { title:'Ecommerce Source Code', category:'Source Code', price:'₹4,099', image:'https://images.unsplash.com/photo-1518770660439-4636190af475' },
  ];

  const navItems = [
    { id:'overview', icon:'📊', label:'Overview' },
    { id:'orders', icon:'🛒', label:'My Orders' },
    { id:'purchase', icon:'📋', label:'Purchase History' },
    { id:'wishlist', icon:'❤️', label:'Wishlist' },
    { id:'downloads', icon:'📥', label:'Downloads' },
    { id:'notifications', icon:'🔔', label:'Notifications', badge: notifList.filter(n => !n.read).length },
    { id:'wallet', icon:'💳', label:'Wallet' },
    { id:'tickets', icon:'🎫', label:'Support Tickets' },
    { id:'profile', icon:'👤', label:'My Profile' },
    { id:'settings', icon:'⚙️', label:'Settings' },
  ];

  const unreadCount = notifList.filter(n => !n.read).length;

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', display:'flex' }}>
       <SEO
        title="Dashboard"
        description="Manage your orders, downloads and profile on Pixer."
        />
      {/* SIDEBAR */}
            <div style={{
            width: window.innerWidth <= 768 ? '100%' : '260px',
            minHeight: window.innerWidth <= 768 ? 'auto' : '100vh',
            background:'#1e1e2f', flexShrink:0,
            display:'flex', flexDirection:'column',
            position: window.innerWidth <= 768 ? 'relative' : 'sticky',
            top:0, overflowY:'auto'
            }}>
        <div style={{ padding:'25px 20px', textAlign:'center', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ width:'70px', height:'70px', borderRadius:'50%', background:'linear-gradient(135deg, #4F46E5, #06B6D4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem', margin:'0 auto 12px' }}>👤</div>
          <p style={{ margin:0, color:'white', fontWeight:'700', fontSize:'1rem' }}>Nanda Kumar</p>
          <p style={{ margin:'4px 0 0', color:'#94a3b8', fontSize:'0.8rem' }}>nanda@email.com</p>
          <span style={{ background:'#4F46E5', color:'white', padding:'3px 12px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'600', display:'inline-block', marginTop:'8px' }}>Customer</span>
        </div>

        <nav style={{ padding:'15px 0', flex:1 }}>
          {navItems.map(item => (
            <div key={item.id} onClick={() => setActivePage(item.id)}
              style={{ display:'flex', alignItems:'center', gap:'12px', padding:'13px 25px', cursor:'pointer', background: activePage === item.id ? 'rgba(79,70,229,0.2)' : 'transparent', borderLeft: activePage === item.id ? '3px solid #4F46E5' : '3px solid transparent', color: activePage === item.id ? '#4F46E5' : '#94a3b8', fontWeight: activePage === item.id ? '600' : '400', fontSize:'0.9rem', transition:'all 0.2s ease', justifyContent:'space-between' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <span style={{ fontSize:'1.1rem' }}>{item.icon}</span>
                {item.label}
              </div>
              {item.badge > 0 && (
                <span style={{ background:'#ef4444', color:'white', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.7rem', fontWeight:'700' }}>{item.badge}</span>
              )}
            </div>
          ))}
        </nav>

        <div style={{ padding:'20px', borderTop:'1px solid rgba(255,255,255,0.08)' }}>
          <Link to="/" style={{ display:'flex', alignItems:'center', gap:'10px', color:'#ef4444', textDecoration:'none', fontSize:'0.9rem', fontWeight:'600', padding:'10px' }}>
            🚪 Logout
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex:1, padding:'30px 40px', overflowX:'hidden' }}>

        {/* ===== OVERVIEW ===== */}
        {activePage === 'overview' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Welcome back, Nanda! 👋</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Here's what's happening with your account today.</p>

            {/* Stats */}
            <div className="row g-4" style={{ marginBottom:'35px' }}>
              {stats.map((stat, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', transition:'all 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'15px' }}>
                      <div>
                        <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{stat.label}</p>
                        <h3 style={{ margin:'5px 0 0', color:'#1e1e2f', fontWeight:'700', fontSize:'1.6rem' }}>{stat.value}</h3>
                      </div>
                      <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:stat.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem' }}>{stat.icon}</div>
                    </div>
                    <p style={{ margin:0, fontSize:'0.8rem', color:stat.color, fontWeight:'500' }}>{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="row g-4" style={{ marginBottom:'30px' }}>
              <div className="col-md-6">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>💰 Monthly Spending (₹)</h6>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={spendingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" tick={{ fontSize:12, fill:'#888' }} />
                      <YAxis tick={{ fontSize:12, fill:'#888' }} />
                      <Tooltip formatter={(val) => `₹${val}`} />
                      <Line type="monotone" dataKey="spent" stroke="#4F46E5" strokeWidth={3} dot={{ fill:'#4F46E5', r:5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>📥 Monthly Downloads</h6>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={downloadData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" tick={{ fontSize:12, fill:'#888' }} />
                      <YAxis tick={{ fontSize:12, fill:'#888' }} />
                      <Tooltip />
                      <Bar dataKey="downloads" fill="#06B6D4" radius={[6,6,0,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
                <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>Recent Orders</h5>
                <button onClick={() => setActivePage('orders')} style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'6px 16px', borderRadius:'20px', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer' }}>View All</button>
              </div>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['Order ID','Product','Date','Amount','Status'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.82rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0,3).map((order, i) => (
                      <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.9rem' }}>{order.id}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{order.product}</td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{order.date}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.9rem' }}>{order.amount}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{ background:order.statusBg, color:order.statusColor, padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600' }}>{order.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Quick Actions</h5>
              <div style={{ display:'flex', gap:'15px', flexWrap:'wrap' }}>
                {[
                  { label:'Browse Products', icon:'🛍️', link:'/products', color:'#4F46E5' },
                  { label:'My Wallet', icon:'💳', action:'wallet', color:'#06B6D4' },
                  { label:'Notifications', icon:'🔔', action:'notifications', color:'#F59E0B' },
                  { label:'Support', icon:'🎫', action:'tickets', color:'#ef4444' },
                ].map((btn, i) => (
                  <button key={i} onClick={() => btn.link ? window.location.href=btn.link : setActivePage(btn.action)}
                    style={{ display:'flex', alignItems:'center', gap:'8px', padding:'12px 20px', background:btn.color, color:'white', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', fontFamily:'Poppins' }}>
                    {btn.icon} {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== ORDERS ===== */}
        {activePage === 'orders' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>My Orders</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Track and manage all your purchases.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['Order ID','Product','Date','Amount','Status','Action'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.82rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, i) => (
                      <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.9rem' }}>{order.id}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{order.product}</td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{order.date}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.9rem' }}>{order.amount}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{ background:order.statusBg, color:order.statusColor, padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600' }}>{order.status}</span>
                        </td>
                        <td style={{ padding:'14px 15px' }}>
                          <button style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'5px 12px', borderRadius:'15px', fontSize:'0.8rem', fontWeight:'600', cursor:'pointer' }}>Download</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== PURCHASE HISTORY ===== */}
        {activePage === 'purchase' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Purchase History</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Complete record of all your transactions.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['Purchase ID','Product','Category','Date','Amount','Invoice'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.82rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseHistory.map((p, i) => (
                      <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.9rem' }}>{p.id}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{p.product}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{ background:'#EEF2FF', color:'#4F46E5', padding:'3px 10px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'500' }}>{p.category}</span>
                        </td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{p.date}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.9rem' }}>{p.amount}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <button style={{ background:'#dcfce7', color:'#16a34a', border:'none', padding:'5px 12px', borderRadius:'15px', fontSize:'0.8rem', fontWeight:'600', cursor:'pointer' }}>
                            📄 {p.invoice}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== WISHLIST ===== */}
        {activePage === 'wishlist' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>My Wishlist</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Products you saved for later.</p>
            <div className="row g-4">
              {wishlist.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                    <img src={item.image} alt={item.title} style={{ width:'100%', height:'160px', objectFit:'cover' }} />
                    <div style={{ padding:'20px' }}>
                      <span style={{ background:'#EEF2FF', color:'#4F46E5', padding:'3px 10px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'500' }}>{item.category}</span>
                      <h6 style={{ color:'#1e1e2f', fontWeight:'700', margin:'10px 0 5px' }}>{item.title}</h6>
                      <p style={{ color:'#4F46E5', fontWeight:'700', fontSize:'1.1rem', margin:'0 0 15px' }}>{item.price}</p>
                      <div style={{ display:'flex', gap:'8px' }}>
                        <button style={{ flex:1, padding:'9px', background:'#4F46E5', color:'white', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>Buy Now</button>
                        <button style={{ padding:'9px 12px', background:'#FEF2F2', color:'#ef4444', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>🗑</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== DOWNLOADS ===== */}
        {activePage === 'downloads' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>My Downloads</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Access all your purchased digital products.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              {orders.filter(o => o.status === 'Completed').map((order, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 0', borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none', flexWrap:'wrap', gap:'10px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'15px' }}>
                    <div style={{ width:'45px', height:'45px', borderRadius:'10px', background:'#EEF2FF', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem' }}>📦</div>
                    <div>
                      <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.95rem' }}>{order.product}</p>
                      <p style={{ margin:0, color:'#888', fontSize:'0.8rem' }}>Purchased on {order.date}</p>
                    </div>
                  </div>
                  <button style={{ background:'#4F46E5', color:'white', border:'none', padding:'9px 20px', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>📥 Download</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== NOTIFICATIONS ===== */}
        {activePage === 'notifications' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'25px' }}>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Notifications</h2>
                <p style={{ color:'#888', margin:0 }}>You have {unreadCount} unread notifications.</p>
              </div>
              <button onClick={() => setNotifList(prev => prev.map(n => ({ ...n, read:true })))}
                style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'8px 18px', borderRadius:'20px', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer' }}>
                ✅ Mark All Read
              </button>
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'10px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              {notifList.map((notif, i) => (
                <div key={notif.id}
                  onClick={() => setNotifList(prev => prev.map(n => n.id === notif.id ? { ...n, read:true } : n))}
                  style={{ display:'flex', alignItems:'flex-start', gap:'15px', padding:'18px 20px', borderBottom: i < notifList.length-1 ? '1px solid #f8f8f8' : 'none', background: notif.read ? 'transparent' : '#fafbff', borderRadius:'10px', cursor:'pointer', transition:'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='#f8fafc'}
                  onMouseLeave={e => e.currentTarget.style.background= notif.read ? 'transparent' : '#fafbff'}>
                  <div style={{ width:'46px', height:'46px', borderRadius:'12px', background:notif.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', flexShrink:0 }}>
                    {notif.icon}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <p style={{ margin:0, fontWeight: notif.read ? '500' : '700', color:'#1e1e2f', fontSize:'0.95rem' }}>{notif.title}</p>
                      <span style={{ color:'#aaa', fontSize:'0.8rem' }}>{notif.time}</span>
                    </div>
                    <p style={{ margin:'4px 0 0', color:'#666', fontSize:'0.85rem' }}>{notif.message}</p>
                  </div>
                  {!notif.read && (
                    <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#4F46E5', flexShrink:0, marginTop:'5px' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== WALLET ===== */}
        {activePage === 'wallet' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>My Wallet</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Manage your Pixer wallet balance.</p>

            {/* Wallet Card */}
            <div style={{ background:'linear-gradient(135deg, #4F46E5, #06B6D4)', borderRadius:'20px', padding:'35px', color:'white', marginBottom:'30px', maxWidth:'450px', boxShadow:'0 10px 40px rgba(79,70,229,0.3)' }}>
              <p style={{ margin:'0 0 8px', opacity:0.8, fontSize:'0.9rem' }}>Available Balance</p>
              <h1 style={{ margin:'0 0 20px', fontWeight:'700', fontSize:'2.5rem' }}>₹2,500.00</h1>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div>
                  <p style={{ margin:0, opacity:0.7, fontSize:'0.8rem' }}>Wallet ID</p>
                  <p style={{ margin:0, fontWeight:'600', fontSize:'0.95rem' }}>WLT-PIXER-2024</p>
                </div>
                <div style={{ fontSize:'2.5rem' }}>💳</div>
              </div>
            </div>

            {/* Wallet Actions */}
            <div className="row g-3" style={{ marginBottom:'30px', maxWidth:'450px' }}>
              {[
                { label:'Add Money', icon:'➕', color:'#4F46E5' },
                { label:'Withdraw', icon:'💸', color:'#16a34a' },
                { label:'Transfer', icon:'🔄', color:'#F59E0B' },
                { label:'History', icon:'📋', color:'#06B6D4' },
              ].map((btn, i) => (
                <div className="col-6" key={i}>
                  <button style={{ width:'100%', padding:'15px', background:'white', border:'1.5px solid #e2e8f0', borderRadius:'12px', display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', fontFamily:'Poppins', fontWeight:'600', color:'#1e1e2f', fontSize:'0.9rem', boxShadow:'0 2px 8px rgba(0,0,0,0.05)' }}>
                    <span style={{ width:'36px', height:'36px', background: btn.color+'20', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }}>{btn.icon}</span>
                    {btn.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Transaction History */}
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', maxWidth:'600px' }}>
              <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>Transaction History</h6>
              {[
                { type:'Credit', desc:'Refund for #ORD005', amount:'+₹999', date:'05 May 2025', color:'#16a34a', bg:'#dcfce7', icon:'⬆️' },
                { type:'Debit', desc:'Purchase - React Admin Dashboard', amount:'-₹2,099', date:'12 May 2025', color:'#ef4444', bg:'#FEF2F2', icon:'⬇️' },
                { type:'Credit', desc:'Cashback Reward', amount:'+₹200', date:'10 May 2025', color:'#16a34a', bg:'#dcfce7', icon:'🎁' },
                { type:'Debit', desc:'Purchase - Modern UI Kit', amount:'-₹1,499', date:'08 May 2025', color:'#ef4444', bg:'#FEF2F2', icon:'⬇️' },
                { type:'Credit', desc:'Added via UPI', amount:'+₹5,000', date:'01 May 2025', color:'#16a34a', bg:'#dcfce7', icon:'💳' },
              ].map((tx, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0', borderBottom: i < 4 ? '1px solid #f0f0f0' : 'none' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                    <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:tx.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }}>{tx.icon}</div>
                    <div>
                      <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.9rem' }}>{tx.desc}</p>
                      <p style={{ margin:0, color:'#aaa', fontSize:'0.8rem' }}>{tx.date}</p>
                    </div>
                  </div>
                  <span style={{ color:tx.color, fontWeight:'700', fontSize:'0.95rem' }}>{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== SUPPORT TICKETS ===== */}
        {activePage === 'tickets' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'25px' }}>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Support Tickets</h2>
                <p style={{ color:'#888', margin:0 }}>Get help from our support team.</p>
              </div>
              <button onClick={() => setShowTicketForm(!showTicketForm)}
                style={{ background:'#4F46E5', color:'white', border:'none', padding:'12px 24px', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', fontFamily:'Poppins' }}>
                + New Ticket
              </button>
            </div>

            {/* New Ticket Form */}
            {showTicketForm && (
              <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
                <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>Create New Ticket</h6>
                <div style={{ marginBottom:'15px' }}>
                  <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.9rem' }}>Subject</label>
                  <input type="text" placeholder="Describe your issue briefly"
                    value={newTicket.subject}
                    onChange={e => setNewTicket(prev => ({ ...prev, subject:e.target.value }))}
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f' }} />
                </div>
                <div style={{ marginBottom:'20px' }}>
                  <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.9rem' }}>Message</label>
                  <textarea rows="4" placeholder="Explain your issue in detail..."
                    value={newTicket.message}
                    onChange={e => setNewTicket(prev => ({ ...prev, message:e.target.value }))}
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', resize:'none' }} />
                </div>
                <div style={{ display:'flex', gap:'10px' }}>
                  <button
                    onClick={() => {
                      if (newTicket.subject && newTicket.message) {
                        setTickets(prev => [{
                          id: `#TKT00${prev.length + 1}`,
                          subject: newTicket.subject,
                          status: 'Open',
                          date: new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }),
                          priority: 'Medium',
                          priorityColor: '#F59E0B',
                          priorityBg: '#FEF3C7'
                        }, ...prev]);
                        setNewTicket({ subject:'', message:'' });
                        setShowTicketForm(false);
                      }
                    }}
                    style={{ padding:'11px 25px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins' }}>
                    Submit Ticket
                  </button>
                  <button onClick={() => setShowTicketForm(false)}
                    style={{ padding:'11px 25px', background:'#f1f5f9', color:'#64748b', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins' }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Tickets List */}
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['Ticket ID','Subject','Priority','Date','Status','Action'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.82rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket, i) => (
                      <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.9rem' }}>{ticket.id}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{ticket.subject}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{ background:ticket.priorityBg, color:ticket.priorityColor, padding:'4px 10px', borderRadius:'20px', fontSize:'0.78rem', fontWeight:'600' }}>{ticket.priority}</span>
                        </td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{ticket.date}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{
                            background: ticket.status === 'Open' ? '#FEF2F2' : ticket.status === 'Resolved' ? '#dcfce7' : '#FEF3C7',
                            color: ticket.status === 'Open' ? '#ef4444' : ticket.status === 'Resolved' ? '#16a34a' : '#F59E0B',
                            padding:'4px 10px', borderRadius:'20px', fontSize:'0.78rem', fontWeight:'600'
                          }}>{ticket.status}</span>
                        </td>
                        <td style={{ padding:'14px 15px' }}>
                          <button style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'5px 12px', borderRadius:'15px', fontSize:'0.8rem', fontWeight:'600', cursor:'pointer' }}>View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== PROFILE ===== */}
        {activePage === 'profile' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>My Profile</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Manage your personal information.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'35px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', maxWidth:'600px' }}>
              <div style={{ textAlign:'center', marginBottom:'30px' }}>
                <div style={{ width:'80px', height:'80px', borderRadius:'50%', background:'linear-gradient(135deg, #4F46E5, #06B6D4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', margin:'0 auto 12px' }}>👤</div>
                <button style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'6px 16px', borderRadius:'20px', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer' }}>Change Photo</button>
              </div>
              {[
                { label:'First Name', value:'Nanda', type:'text' },
                { label:'Last Name', value:'Kumar', type:'text' },
                { label:'Email Address', value:'nanda@email.com', type:'email' },
                { label:'Phone Number', value:'+91 98765 43210', type:'tel' },
              ].map((field, i) => (
                <div key={i} style={{ marginBottom:'20px' }}>
                  <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.9rem' }}>{field.label}</label>
                  <input type={field.type} defaultValue={field.value} style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                </div>
              ))}
              <button style={{ width:'100%', padding:'13px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>Save Changes</button>
            </div>
          </div>
        )}

        {/* ===== SETTINGS ===== */}
        {activePage === 'settings' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Settings</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Manage your account preferences.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', maxWidth:'600px' }}>
              {[
                { label:'Email Notifications', desc:'Receive order updates via email', enabled:true },
                { label:'SMS Notifications', desc:'Receive alerts on your phone', enabled:false },
                { label:'Newsletter', desc:'Get latest products & offers', enabled:true },
                { label:'Two Factor Auth', desc:'Extra security for your account', enabled:false },
              ].map((setting, i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 0', borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none' }}>
                  <div>
                    <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.95rem' }}>{setting.label}</p>
                    <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{setting.desc}</p>
                  </div>
                  <div style={{ width:'46px', height:'26px', borderRadius:'13px', background: setting.enabled ? '#4F46E5' : '#e2e8f0', cursor:'pointer', position:'relative' }}>
                    <div style={{ width:'20px', height:'20px', borderRadius:'50%', background:'white', position:'absolute', top:'3px', left: setting.enabled ? '23px' : '3px', transition:'all 0.3s ease' }}></div>
                  </div>
                </div>
              ))}
              <button style={{ marginTop:'25px', width:'100%', padding:'13px', background:'#ef4444', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>🗑 Delete Account</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;