import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SEO from '../components/SEO';

function AdminDashboard() {

  const [activePage, setActivePage] = useState('overview');
  const [searchUser, setSearchUser] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [searchOrder, setSearchOrder] = useState('');

  const stats = [
    { label:'Total Users', value:'1,248', icon:'👥', color:'#4F46E5', bg:'#EEF2FF', change:'+48 this month' },
    { label:'Total Products', value:'342', icon:'📦', color:'#06B6D4', bg:'#ECFEFF', change:'+12 this month' },
    { label:'Total Orders', value:'2,847', icon:'🛒', color:'#F59E0B', bg:'#FEF3C7', change:'+156 this month' },
    { label:'Total Revenue', value:'₹8,42,500', icon:'💰', color:'#16a34a', bg:'#dcfce7', change:'+₹45,000 this month' },
  ];

  const [users, setUsers] = useState([
    { id:1, name:'Nanda Kumar', email:'nanda@email.com', role:'Customer', status:'Active', joined:'12 May 2025', orders:5 },
    { id:2, name:'David Smith', email:'david@vendor.com', role:'Vendor', status:'Active', joined:'10 Apr 2025', orders:0 },
    { id:3, name:'Priya Singh', email:'priya@email.com', role:'Customer', status:'Active', joined:'08 Mar 2025', orders:3 },
    { id:4, name:'Arjun Reddy', email:'arjun@email.com', role:'Customer', status:'Blocked', joined:'05 Feb 2025', orders:1 },
    { id:5, name:'Sophia Lee', email:'sophia@vendor.com', role:'Vendor', status:'Active', joined:'01 Jan 2025', orders:0 },
    { id:6, name:'Meena Devi', email:'meena@email.com', role:'Customer', status:'Active', joined:'20 Dec 2024', orders:8 },
  ]);

  const [products, setProducts] = useState([
    { id:1, title:'React Admin Dashboard', vendor:'David Smith', category:'Template', price:2099, sales:85, status:'Active' },
    { id:2, title:'Modern UI Kit', vendor:'Sophia Lee', category:'UI Kit', price:1499, sales:42, status:'Active' },
    { id:3, title:'Ecommerce Source Code', vendor:'John Miller', category:'Source Code', price:4099, sales:120, status:'Active' },
    { id:4, title:'Landing Page Template', vendor:'David Smith', category:'Template', price:1299, sales:28, status:'Pending' },
    { id:5, title:'Mobile App UI Kit', vendor:'Sophia Lee', category:'UI Kit', price:2999, sales:65, status:'Active' },
    { id:6, title:'SEO Ebook Guide', vendor:'Alex Brown', category:'Ebook', price:999, sales:15, status:'Rejected' },
  ]);

  const orders = [
    { id:'#ORD001', customer:'Nanda Kumar', product:'React Admin Dashboard', date:'12 May 2025', amount:'₹2,099', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD002', customer:'Priya Singh', product:'Modern UI Kit', date:'10 May 2025', amount:'₹1,499', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD003', customer:'Arjun Reddy', product:'Landing Page Template', date:'08 May 2025', amount:'₹1,299', status:'Processing', statusColor:'#F59E0B', statusBg:'#FEF3C7' },
    { id:'#ORD004', customer:'Meena Devi', product:'React Admin Dashboard', date:'05 May 2025', amount:'₹2,099', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD005', customer:'Ravi Kumar', product:'Ecommerce Source Code', date:'01 May 2025', amount:'₹4,099', status:'Refunded', statusColor:'#ef4444', statusBg:'#FEF2F2' },
  ];

  const navItems = [
    { id:'overview', icon:'📊', label:'Overview' },
    { id:'users', icon:'👥', label:'User Management' },
    { id:'products', icon:'📦', label:'Product Management' },
    { id:'orders', icon:'🛒', label:'Order Management' },
    { id:'analytics', icon:'📈', label:'Analytics' },
    { id:'vendors', icon:'🏪', label:'Vendors' },
    { id:'settings', icon:'⚙️', label:'Site Settings' },
  ];

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchUser.toLowerCase()) ||
    u.email.toLowerCase().includes(searchUser.toLowerCase())
  );

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const filteredOrders = orders.filter(o =>
    o.customer.toLowerCase().includes(searchOrder.toLowerCase()) ||
    o.id.toLowerCase().includes(searchOrder.toLowerCase())
  );

  const toggleUserStatus = (id) => {
    setUsers(prev => prev.map(u =>
      u.id === id
        ? { ...u, status: u.status === 'Active' ? 'Blocked' : 'Active' }
        : u
    ));
    toast.success('✅ User status updated!');
  };

  const updateProductStatus = (id, status) => {
    setProducts(prev => prev.map(p =>
      p.id === id ? { ...p, status } : p
    ));
    toast.success(`✅ Product ${status}!`);
  };

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', display:'flex' }}>
        <SEO
  title="Admin Dashboard"
  description="Admin panel for Pixer Marketplace management."
/>

      {/* SIDEBAR */}
      <div style={{
        width:'260px', minHeight:'100vh',
        background:'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
        flexShrink:0, display:'flex',
        flexDirection:'column', position:'sticky', top:0
      }}>

        {/* Admin Header */}
        <div style={{
          padding:'25px 20px', textAlign:'center',
          borderBottom:'1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{
            width:'65px', height:'65px', borderRadius:'16px',
            background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
            display:'flex', alignItems:'center',
            justifyContent:'center', fontSize:'1.8rem',
            margin:'0 auto 12px'
          }}>⚡</div>
          <p style={{ margin:0, color:'white', fontWeight:'700', fontSize:'1rem' }}>
            Admin Panel
          </p>
          <p style={{ margin:'4px 0 0', color:'#94a3b8', fontSize:'0.8rem' }}>
            admin@pixer.com
          </p>
          <span style={{
            background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
            color:'white', padding:'3px 14px',
            borderRadius:'20px', fontSize:'0.72rem',
            fontWeight:'700', display:'inline-block', marginTop:'8px'
          }}>🛡️ Super Admin</span>
        </div>

        {/* Quick Stats */}
        <div style={{
          display:'flex', justifyContent:'space-around',
          padding:'15px 10px',
          borderBottom:'1px solid rgba(255,255,255,0.08)'
        }}>
          {[
            { label:'Users', value:'1.2K' },
            { label:'Orders', value:'2.8K' },
            { label:'Revenue', value:'8.4L' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign:'center' }}>
              <p style={{ margin:0, color:'white', fontWeight:'700', fontSize:'0.95rem' }}>{s.value}</p>
              <p style={{ margin:0, color:'#94a3b8', fontSize:'0.7rem' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <nav style={{ padding:'15px 0', flex:1 }}>
          {navItems.map(item => (
            <div key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                display:'flex', alignItems:'center', gap:'12px',
                padding:'13px 25px', cursor:'pointer',
                background: activePage === item.id ? 'rgba(79,70,229,0.2)' : 'transparent',
                borderLeft: activePage === item.id ? '3px solid #4F46E5' : '3px solid transparent',
                color: activePage === item.id ? '#818cf8' : '#94a3b8',
                fontWeight: activePage === item.id ? '600' : '400',
                fontSize:'0.9rem', transition:'all 0.2s ease'
              }}>
              <span style={{ fontSize:'1.1rem' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div style={{ padding:'20px', borderTop:'1px solid rgba(255,255,255,0.08)' }}>
          <Link to="/" style={{
            display:'flex', alignItems:'center', gap:'10px',
            color:'#ef4444', textDecoration:'none',
            fontSize:'0.9rem', fontWeight:'600', padding:'10px'
          }}>🚪 Logout</Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex:1, padding:'30px 40px', overflowX:'hidden' }}>

        {/* ===== OVERVIEW ===== */}
        {activePage === 'overview' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>
              Admin Overview 🛡️
            </h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>
              Welcome back! Here's what's happening on Pixer today.
            </p>

            {/* Stats Cards */}
            <div className="row g-4" style={{ marginBottom:'30px' }}>
              {stats.map((stat, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{
                    background:'white', borderRadius:'16px',
                    padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)',
                    transition:'all 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'15px' }}>
                      <div>
                        <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{stat.label}</p>
                        <h3 style={{ margin:'5px 0 0', color:'#1e1e2f', fontWeight:'700', fontSize:'1.5rem' }}>{stat.value}</h3>
                      </div>
                      <div style={{
                        width:'48px', height:'48px', borderRadius:'12px',
                        background:stat.bg, display:'flex',
                        alignItems:'center', justifyContent:'center', fontSize:'1.4rem'
                      }}>{stat.icon}</div>
                    </div>
                    <p style={{ margin:0, fontSize:'0.8rem', color:stat.color, fontWeight:'500' }}>{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders + Top Products */}
            <div className="row g-4" style={{ marginBottom:'25px' }}>

              {/* Recent Orders */}
              <div className="col-md-8">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
                    <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>Recent Orders</h5>
                    <button onClick={() => setActivePage('orders')} style={{
                      background:'transparent', color:'#4F46E5',
                      border:'1.5px solid #4F46E5', padding:'6px 16px',
                      borderRadius:'20px', fontSize:'0.85rem',
                      fontWeight:'600', cursor:'pointer'
                    }}>View All</button>
                  </div>
                  <div style={{ overflowX:'auto' }}>
                    <table style={{ width:'100%', borderCollapse:'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                          {['Order ID','Customer','Amount','Status'].map(h => (
                            <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#888', fontSize:'0.8rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {orders.slice(0,4).map((order, i) => (
                          <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}>
                            <td style={{ padding:'12px', color:'#4F46E5', fontWeight:'600', fontSize:'0.88rem' }}>{order.id}</td>
                            <td style={{ padding:'12px', color:'#1e1e2f', fontSize:'0.88rem' }}>{order.customer}</td>
                            <td style={{ padding:'12px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.88rem' }}>{order.amount}</td>
                            <td style={{ padding:'12px' }}>
                              <span style={{ background:order.statusBg, color:order.statusColor, padding:'3px 10px', borderRadius:'20px', fontSize:'0.78rem', fontWeight:'600' }}>{order.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Quick Stats Side */}
              <div className="col-md-4">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', height:'100%' }}>
                  <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Platform Overview</h5>
                  {[
                    { label:'Active Users', value:'1,180', bar:95, color:'#4F46E5' },
                    { label:'Active Products', value:'298', bar:87, color:'#06B6D4' },
                    { label:'Completed Orders', value:'2,541', bar:89, color:'#16a34a' },
                    { label:'Active Vendors', value:'48', bar:72, color:'#F59E0B' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom:'18px' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                        <span style={{ color:'#555', fontSize:'0.85rem' }}>{item.label}</span>
                        <span style={{ color:'#1e1e2f', fontWeight:'700', fontSize:'0.85rem' }}>{item.value}</span>
                      </div>
                      <div style={{ background:'#f0f0f0', borderRadius:'10px', height:'7px' }}>
                        <div style={{ width:`${item.bar}%`, background:item.color, height:'7px', borderRadius:'10px', transition:'width 0.5s ease' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Quick Actions</h5>
              <div style={{ display:'flex', gap:'15px', flexWrap:'wrap' }}>
                {[
                  { label:'Manage Users', icon:'👥', action:'users', color:'#4F46E5' },
                  { label:'Review Products', icon:'📦', action:'products', color:'#06B6D4' },
                  { label:'View Orders', icon:'🛒', action:'orders', color:'#F59E0B' },
                  { label:'Analytics', icon:'📈', action:'analytics', color:'#16a34a' },
                  { label:'Site Settings', icon:'⚙️', action:'settings', color:'#ef4444' },
                ].map((btn, i) => (
                  <button key={i} onClick={() => setActivePage(btn.action)} style={{
                    display:'flex', alignItems:'center', gap:'8px',
                    padding:'12px 20px', background:btn.color,
                    color:'white', border:'none', borderRadius:'10px',
                    fontWeight:'600', cursor:'pointer',
                    fontSize:'0.9rem', fontFamily:'Poppins'
                  }}>
                    {btn.icon} {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== USER MANAGEMENT ===== */}
        {activePage === 'users' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'25px' }}>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>User Management</h2>
                <p style={{ color:'#888', margin:0 }}>Manage all registered users.</p>
              </div>
              <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
                <input
                  type="text"
                  placeholder="🔍 Search users..."
                  value={searchUser}
                  onChange={e => setSearchUser(e.target.value)}
                  style={{
                    padding:'10px 15px', border:'1.5px solid #e2e8f0',
                    borderRadius:'10px', fontFamily:'Poppins',
                    fontSize:'0.9rem', outline:'none', color:'#1e1e2f', width:'220px'
                  }}
                />
              </div>
            </div>

            {/* User Stats */}
            <div className="row g-3" style={{ marginBottom:'25px' }}>
              {[
                { label:'Total Users', value:users.length, color:'#4F46E5', bg:'#EEF2FF' },
                { label:'Active', value:users.filter(u=>u.status==='Active').length, color:'#16a34a', bg:'#dcfce7' },
                { label:'Blocked', value:users.filter(u=>u.status==='Blocked').length, color:'#ef4444', bg:'#FEF2F2' },
                { label:'Vendors', value:users.filter(u=>u.role==='Vendor').length, color:'#F59E0B', bg:'#FEF3C7' },
              ].map((s, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'12px', padding:'18px 20px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{s.label}</p>
                      <h4 style={{ margin:'4px 0 0', color:s.color, fontWeight:'700' }}>{s.value}</h4>
                    </div>
                    <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', color:s.color, fontSize:'1rem' }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['#','Name','Email','Role','Orders','Status','Joined','Actions'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.8rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user, i) => (
                      <tr key={user.id} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{user.id}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                            <div style={{ width:'36px', height:'36px', borderRadius:'50%', background:'linear-gradient(135deg, #4F46E5, #06B6D4)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'700', fontSize:'0.85rem', flexShrink:0 }}>
                              {user.name.charAt(0)}
                            </div>
                            <span style={{ color:'#1e1e2f', fontWeight:'600', fontSize:'0.9rem' }}>{user.name}</span>
                          </div>
                        </td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{user.email}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{
                            background: user.role === 'Vendor' ? '#FEF3C7' : '#EEF2FF',
                            color: user.role === 'Vendor' ? '#F59E0B' : '#4F46E5',
                            padding:'3px 10px', borderRadius:'20px',
                            fontSize:'0.78rem', fontWeight:'600'
                          }}>{user.role}</span>
                        </td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.88rem', textAlign:'center' }}>{user.orders}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{
                            background: user.status === 'Active' ? '#dcfce7' : '#FEF2F2',
                            color: user.status === 'Active' ? '#16a34a' : '#ef4444',
                            padding:'3px 10px', borderRadius:'20px',
                            fontSize:'0.78rem', fontWeight:'600'
                          }}>{user.status}</span>
                        </td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.82rem' }}>{user.joined}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <div style={{ display:'flex', gap:'6px' }}>
                            <button
                              onClick={() => toggleUserStatus(user.id)}
                              style={{
                                padding:'5px 12px',
                                background: user.status === 'Active' ? '#FEF2F2' : '#dcfce7',
                                color: user.status === 'Active' ? '#ef4444' : '#16a34a',
                                border:'none', borderRadius:'8px',
                                fontSize:'0.78rem', fontWeight:'600', cursor:'pointer'
                              }}>
                              {user.status === 'Active' ? '🚫 Block' : '✅ Unblock'}
                            </button>
                            <button
                              onClick={() => toast.info(`Viewing ${user.name}'s profile`)}
                              style={{
                                padding:'5px 12px', background:'#EEF2FF',
                                color:'#4F46E5', border:'none', borderRadius:'8px',
                                fontSize:'0.78rem', fontWeight:'600', cursor:'pointer'
                              }}>
                              👁 View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== PRODUCT MANAGEMENT ===== */}
        {activePage === 'products' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'25px' }}>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Product Management</h2>
                <p style={{ color:'#888', margin:0 }}>Review and manage all products.</p>
              </div>
              <input
                type="text"
                placeholder="🔍 Search products..."
                value={searchProduct}
                onChange={e => setSearchProduct(e.target.value)}
                style={{
                  padding:'10px 15px', border:'1.5px solid #e2e8f0',
                  borderRadius:'10px', fontFamily:'Poppins',
                  fontSize:'0.9rem', outline:'none', color:'#1e1e2f', width:'220px'
                }}
              />
            </div>

            {/* Product Status Cards */}
            <div className="row g-3" style={{ marginBottom:'25px' }}>
              {[
                { label:'Total Products', value:products.length, color:'#4F46E5', bg:'#EEF2FF' },
                { label:'Active', value:products.filter(p=>p.status==='Active').length, color:'#16a34a', bg:'#dcfce7' },
                { label:'Pending Review', value:products.filter(p=>p.status==='Pending').length, color:'#F59E0B', bg:'#FEF3C7' },
                { label:'Rejected', value:products.filter(p=>p.status==='Rejected').length, color:'#ef4444', bg:'#FEF2F2' },
              ].map((s, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'12px', padding:'18px 20px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{s.label}</p>
                      <h4 style={{ margin:'4px 0 0', color:s.color, fontWeight:'700' }}>{s.value}</h4>
                    </div>
                    <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', color:s.color }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['#','Product','Vendor','Category','Price','Sales','Status','Actions'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.8rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, i) => (
                      <tr key={product.id} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{product.id}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.88rem' }}>{product.title}</td>
                        <td style={{ padding:'14px 15px', color:'#555', fontSize:'0.85rem' }}>{product.vendor}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{ background:'#EEF2FF', color:'#4F46E5', padding:'3px 10px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'500' }}>{product.category}</span>
                        </td>
                        <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'700', fontSize:'0.88rem' }}>₹{product.price.toLocaleString('en-IN')}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.88rem', textAlign:'center' }}>{product.sales}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{
                            background: product.status === 'Active' ? '#dcfce7' : product.status === 'Pending' ? '#FEF3C7' : '#FEF2F2',
                            color: product.status === 'Active' ? '#16a34a' : product.status === 'Pending' ? '#F59E0B' : '#ef4444',
                            padding:'3px 10px', borderRadius:'20px', fontSize:'0.78rem', fontWeight:'600'
                          }}>{product.status}</span>
                        </td>
                        <td style={{ padding:'14px 15px' }}>
                          <div style={{ display:'flex', gap:'5px', flexWrap:'wrap' }}>
                            {product.status === 'Pending' && (
                              <>
                                <button onClick={() => updateProductStatus(product.id, 'Active')} style={{ padding:'4px 10px', background:'#dcfce7', color:'#16a34a', border:'none', borderRadius:'6px', fontSize:'0.75rem', fontWeight:'600', cursor:'pointer' }}>✅ Approve</button>
                                <button onClick={() => updateProductStatus(product.id, 'Rejected')} style={{ padding:'4px 10px', background:'#FEF2F2', color:'#ef4444', border:'none', borderRadius:'6px', fontSize:'0.75rem', fontWeight:'600', cursor:'pointer' }}>❌ Reject</button>
                              </>
                            )}
                            {product.status === 'Active' && (
                              <button onClick={() => updateProductStatus(product.id, 'Rejected')} style={{ padding:'4px 10px', background:'#FEF2F2', color:'#ef4444', border:'none', borderRadius:'6px', fontSize:'0.75rem', fontWeight:'600', cursor:'pointer' }}>🚫 Remove</button>
                            )}
                            {product.status === 'Rejected' && (
                              <button onClick={() => updateProductStatus(product.id, 'Active')} style={{ padding:'4px 10px', background:'#dcfce7', color:'#16a34a', border:'none', borderRadius:'6px', fontSize:'0.75rem', fontWeight:'600', cursor:'pointer' }}>↩️ Restore</button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== ORDER MANAGEMENT ===== */}
        {activePage === 'orders' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'25px' }}>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Order Management</h2>
                <p style={{ color:'#888', margin:0 }}>Track and manage all orders.</p>
              </div>
              <input
                type="text"
                placeholder="🔍 Search orders..."
                value={searchOrder}
                onChange={e => setSearchOrder(e.target.value)}
                style={{
                  padding:'10px 15px', border:'1.5px solid #e2e8f0',
                  borderRadius:'10px', fontFamily:'Poppins',
                  fontSize:'0.9rem', outline:'none', color:'#1e1e2f', width:'220px'
                }}
              />
            </div>

            {/* Order Stats */}
            <div className="row g-3" style={{ marginBottom:'25px' }}>
              {[
                { label:'Total Orders', value:orders.length, color:'#4F46E5', bg:'#EEF2FF' },
                { label:'Completed', value:orders.filter(o=>o.status==='Completed').length, color:'#16a34a', bg:'#dcfce7' },
                { label:'Processing', value:orders.filter(o=>o.status==='Processing').length, color:'#F59E0B', bg:'#FEF3C7' },
                { label:'Refunded', value:orders.filter(o=>o.status==='Refunded').length, color:'#ef4444', bg:'#FEF2F2' },
              ].map((s, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'12px', padding:'18px 20px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{s.label}</p>
                      <h4 style={{ margin:'4px 0 0', color:s.color, fontWeight:'700' }}>{s.value}</h4>
                    </div>
                    <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', color:s.color }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['Order ID','Customer','Product','Date','Amount','Status','Action'].map(h => (
                        <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.8rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, i) => (
                      <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                        onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.88rem' }}>{order.id}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.88rem' }}>{order.customer}</td>
                        <td style={{ padding:'14px 15px', color:'#555', fontSize:'0.85rem' }}>{order.product}</td>
                        <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.82rem' }}>{order.date}</td>
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.88rem' }}>{order.amount}</td>
                        <td style={{ padding:'14px 15px' }}>
                          <span style={{ background:order.statusBg, color:order.statusColor, padding:'3px 10px', borderRadius:'20px', fontSize:'0.78rem', fontWeight:'600' }}>{order.status}</span>
                        </td>
                        <td style={{ padding:'14px 15px' }}>
                          <button
                            onClick={() => toast.info(`Viewing order ${order.id}`)}
                            style={{ padding:'5px 12px', background:'#EEF2FF', color:'#4F46E5', border:'none', borderRadius:'8px', fontSize:'0.78rem', fontWeight:'600', cursor:'pointer' }}>
                            👁 View
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

        {/* ===== ANALYTICS ===== */}
        {activePage === 'analytics' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Analytics</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Platform performance and insights.</p>

            {/* Revenue Cards */}
            <div className="row g-4" style={{ marginBottom:'30px' }}>
              {[
                { label:'Today Revenue', value:'₹12,450', change:'+12%', up:true, color:'#4F46E5', bg:'#EEF2FF' },
                { label:'This Week', value:'₹68,200', change:'+8%', up:true, color:'#06B6D4', bg:'#ECFEFF' },
                { label:'This Month', value:'₹2,84,500', change:'+15%', up:true, color:'#16a34a', bg:'#dcfce7' },
                { label:'This Year', value:'₹8,42,500', change:'+22%', up:true, color:'#F59E0B', bg:'#FEF3C7' },
              ].map((card, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                    <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{card.label}</p>
                    <h3 style={{ margin:'8px 0 5px', color:card.color, fontWeight:'700', fontSize:'1.4rem' }}>{card.value}</h3>
                    <span style={{ color:'#16a34a', fontSize:'0.82rem', fontWeight:'600' }}>↑ {card.change} vs last period</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Performance */}
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Sales by Category</h5>
                  {[
                    { category:'Source Code', sales:520, percent:38, color:'#4F46E5' },
                    { category:'Template', sales:380, percent:28, color:'#06B6D4' },
                    { category:'UI Kit', sales:280, percent:20, color:'#F59E0B' },
                    { category:'Graphics', sales:150, percent:11, color:'#16a34a' },
                    { category:'Ebook', sales:40, percent:3, color:'#ef4444' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom:'15px' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                        <span style={{ color:'#555', fontSize:'0.88rem', fontWeight:'500' }}>{item.category}</span>
                        <span style={{ color:'#1e1e2f', fontWeight:'700', fontSize:'0.88rem' }}>{item.sales} sales ({item.percent}%)</span>
                      </div>
                      <div style={{ background:'#f0f0f0', borderRadius:'10px', height:'8px' }}>
                        <div style={{ width:`${item.percent}%`, background:item.color, height:'8px', borderRadius:'10px' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-6">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Top Performing Products</h5>
                  {[
                    { title:'Ecommerce Source Code', sales:120, revenue:'₹4,91,880', color:'#4F46E5' },
                    { title:'React Admin Dashboard', sales:85, revenue:'₹1,78,415', color:'#06B6D4' },
                    { title:'Mobile App UI Kit', sales:65, revenue:'₹1,94,935', color:'#F59E0B' },
                    { title:'Modern UI Kit', sales:42, revenue:'₹62,958', color:'#16a34a' },
                    { title:'React Native Starter', sales:38, revenue:'₹2,08,962', color:'#ef4444' },
                  ].map((item, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom: i < 4 ? '1px solid #f0f0f0' : 'none' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                        <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:item.color, flexShrink:0 }}></div>
                        <p style={{ margin:0, color:'#1e1e2f', fontSize:'0.85rem', fontWeight:'500' }}>{item.title}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <p style={{ margin:0, color:item.color, fontWeight:'700', fontSize:'0.85rem' }}>{item.revenue}</p>
                        <p style={{ margin:0, color:'#888', fontSize:'0.75rem' }}>{item.sales} sales</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== VENDORS ===== */}
        {activePage === 'vendors' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Vendor Management</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Manage all marketplace vendors.</p>

            <div className="row g-4">
              {[
                { name:'David Smith', email:'david@vendor.com', products:5, sales:127, revenue:'₹2,12,450', rating:'4.8', status:'Verified', avatar:'👨‍💻' },
                { name:'Sophia Lee', email:'sophia@vendor.com', products:3, sales:85, revenue:'₹1,28,650', rating:'4.6', status:'Verified', avatar:'👩‍🎨' },
                { name:'John Miller', email:'john@vendor.com', products:4, sales:210, revenue:'₹5,18,400', rating:'4.9', status:'Verified', avatar:'👨‍💼' },
                { name:'Alex Brown', email:'alex@vendor.com', products:2, sales:15, revenue:'₹14,985', rating:'4.2', status:'Pending', avatar:'👨‍🔧' },
              ].map((vendor, i) => (
                <div className="col-md-6" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'15px', marginBottom:'20px' }}>
                      <div style={{ width:'55px', height:'55px', borderRadius:'50%', background:'linear-gradient(135deg, #4F46E5, #06B6D4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem', flexShrink:0 }}>{vendor.avatar}</div>
                      <div style={{ flex:1 }}>
                        <p style={{ margin:0, fontWeight:'700', color:'#1e1e2f', fontSize:'1rem' }}>{vendor.name}</p>
                        <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{vendor.email}</p>
                      </div>
                      <span style={{
                        background: vendor.status === 'Verified' ? '#dcfce7' : '#FEF3C7',
                        color: vendor.status === 'Verified' ? '#16a34a' : '#F59E0B',
                        padding:'4px 12px', borderRadius:'20px',
                        fontSize:'0.78rem', fontWeight:'600'
                      }}>{vendor.status === 'Verified' ? '✅' : '⏳'} {vendor.status}</span>
                    </div>

                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'15px', flexWrap:'wrap', gap:'10px' }}>
                      {[
                        { label:'Products', value:vendor.products },
                        { label:'Sales', value:vendor.sales },
                        { label:'Revenue', value:vendor.revenue },
                        { label:'Rating', value:`⭐${vendor.rating}` },
                      ].map((stat, j) => (
                        <div key={j} style={{ textAlign:'center' }}>
                          <p style={{ margin:0, fontWeight:'700', color:'#1e1e2f', fontSize:'0.95rem' }}>{stat.value}</p>
                          <p style={{ margin:0, color:'#888', fontSize:'0.75rem' }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ display:'flex', gap:'8px' }}>
                      <button onClick={() => toast.info(`Viewing ${vendor.name}'s store`)} style={{ flex:1, padding:'8px', background:'#EEF2FF', color:'#4F46E5', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>👁 View Store</button>
                      {vendor.status === 'Pending' && (
                        <button onClick={() => toast.success(`${vendor.name} approved!`)} style={{ flex:1, padding:'8px', background:'#dcfce7', color:'#16a34a', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>✅ Approve</button>
                      )}
                      <button onClick={() => toast.warning(`${vendor.name} suspended!`)} style={{ padding:'8px 12px', background:'#FEF2F2', color:'#ef4444', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>🚫</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== SITE SETTINGS ===== */}
        {activePage === 'settings' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Site Settings</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Configure your marketplace settings.</p>

            <div className="row g-4">

              {/* General Settings */}
              <div className="col-md-8">
                <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
                  <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'25px' }}>🌐 General Settings</h5>
                  {[
                    { label:'Site Name', value:'Pixer Marketplace', type:'text' },
                    { label:'Site URL', value:'https://pixer.com', type:'text' },
                    { label:'Admin Email', value:'admin@pixer.com', type:'email' },
                    { label:'Support Email', value:'support@pixer.com', type:'email' },
                    { label:'Commission Rate (%)', value:'10', type:'number' },
                  ].map((field, i) => (
                    <div key={i} style={{ marginBottom:'18px' }}>
                      <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.9rem' }}>{field.label}</label>
                      <input type={field.type} defaultValue={field.value}
                        style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                    </div>
                  ))}
                  <button onClick={() => toast.success('✅ Settings saved!')} style={{ padding:'12px 30px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', cursor:'pointer', fontFamily:'Poppins' }}>
                    Save Settings
                  </button>
                </div>

                {/* Toggle Settings */}
                <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h5 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'25px' }}>🔧 Feature Toggles</h5>
                  {[
                    { label:'Maintenance Mode', desc:'Put site in maintenance mode', enabled:false },
                    { label:'User Registration', desc:'Allow new user registrations', enabled:true },
                    { label:'Vendor Registration', desc:'Allow new vendor registrations', enabled:true },
                    { label:'Product Reviews', desc:'Allow customers to leave reviews', enabled:true },
                    { label:'Email Notifications', desc:'Send automated emails', enabled:true },
                    { label:'Two Factor Auth', desc:'Require 2FA for admin login', enabled:false },
                  ].map((setting, i, arr) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 0', borderBottom: i < arr.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                      <div>
                        <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.92rem' }}>{setting.label}</p>
                        <p style={{ margin:0, color:'#888', fontSize:'0.8rem' }}>{setting.desc}</p>
                      </div>
                      <div style={{ width:'46px', height:'26px', borderRadius:'13px', background: setting.enabled ? '#4F46E5' : '#e2e8f0', cursor:'pointer', position:'relative', flexShrink:0 }}>
                        <div style={{ width:'20px', height:'20px', borderRadius:'50%', background:'white', position:'absolute', top:'3px', left: setting.enabled ? '23px' : '3px', transition:'all 0.3s ease' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Info */}
              <div className="col-md-4">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'20px' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>📊 System Info</h6>
                  {[
                    { label:'Version', value:'v2.1.0' },
                    { label:'Last Backup', value:'Today 6:00 AM' },
                    { label:'Server Status', value:'🟢 Online' },
                    { label:'Database', value:'🟢 Connected' },
                    { label:'Storage Used', value:'2.4 GB / 10 GB' },
                    { label:'Total API Calls', value:'1,24,850' },
                  ].map((info, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom: i < 5 ? '1px solid #f0f0f0' : 'none' }}>
                      <span style={{ color:'#888', fontSize:'0.85rem' }}>{info.label}</span>
                      <span style={{ color:'#1e1e2f', fontWeight:'600', fontSize:'0.85rem' }}>{info.value}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background:'linear-gradient(135deg, #ef4444, #dc2626)', borderRadius:'16px', padding:'25px', color:'white', textAlign:'center' }}>
                  <p style={{ fontSize:'2rem', margin:'0 0 10px' }}>⚠️</p>
                  <h5 style={{ fontWeight:'700', margin:'0 0 8px' }}>Danger Zone</h5>
                  <p style={{ opacity:0.85, fontSize:'0.85rem', margin:'0 0 20px' }}>These actions cannot be undone</p>
                  <button onClick={() => toast.warning('⚠️ Are you sure? This cannot be undone!')} style={{ width:'100%', padding:'10px', background:'rgba(255,255,255,0.2)', color:'white', border:'1.5px solid rgba(255,255,255,0.5)', borderRadius:'10px', fontWeight:'600', cursor:'pointer', marginBottom:'10px', fontFamily:'Poppins', fontSize:'0.85rem' }}>
                    🗑 Clear All Cache
                  </button>
                  <button onClick={() => toast.warning('⚠️ Database reset warning!')} style={{ width:'100%', padding:'10px', background:'rgba(255,255,255,0.2)', color:'white', border:'1.5px solid rgba(255,255,255,0.5)', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.85rem' }}>
                    💣 Reset Database
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;