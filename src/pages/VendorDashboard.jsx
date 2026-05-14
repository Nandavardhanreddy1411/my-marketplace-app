import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const salesData = [
  { month:'Jan', sales:12000, orders:8 },
  { month:'Feb', sales:18000, orders:12 },
  { month:'Mar', sales:15000, orders:10 },
  { month:'Apr', sales:24000, orders:16 },
  { month:'May', sales:21000, orders:14 },
  { month:'Jun', sales:32000, orders:22 },
];

const productAnalyticsData = [
  { name:'React Admin Dashboard', views:450, sales:85 },
  { name:'Modern UI Kit', views:320, sales:42 },
  { name:'Landing Page', views:280, sales:28 },
];

function VendorDashboard() {

  const [activePage, setActivePage] = useState('overview');
  const [products, setProducts] = useState([
    { id:1, title:'React Admin Dashboard', category:'Template', price:2099, sales:85, status:'Active', image:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', date:'01 May 2025' },
    { id:2, title:'Modern UI Kit', category:'UI Kit', price:1499, sales:42, status:'Active', image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', date:'15 Apr 2025' },
    { id:3, title:'Landing Page Template', category:'Template', price:1299, sales:28, status:'Pending', image:'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8', date:'10 Apr 2025' },
  ]);

  const [editProduct, setEditProduct] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [messages, setMessages] = useState([
    { id:1, customer:'Ravi Kumar', avatar:'https://randomuser.me/api/portraits/men/32.jpg', message:'Hi, does this template include dark mode?', time:'2 hours ago', read:false, product:'React Admin Dashboard' },
    { id:2, customer:'Priya Singh', avatar:'https://randomuser.me/api/portraits/women/44.jpg', message:'Can I use this for commercial projects?', time:'5 hours ago', read:false, product:'Modern UI Kit' },
    { id:3, customer:'Arjun Reddy', avatar:'https://randomuser.me/api/portraits/men/22.jpg', message:'Thanks for the quick support!', time:'1 day ago', read:true, product:'Landing Page Template' },
    { id:4, customer:'Meena Devi', avatar:'https://randomuser.me/api/portraits/women/33.jpg', message:'Is React 18 supported?', time:'2 days ago', read:true, product:'React Admin Dashboard' },
  ]);
  const [activeChat, setActiveChat] = useState(null);
  const [replyText, setReplyText] = useState('');

  const reviews = [
    { id:1, customer:'Ravi Kumar', avatar:'https://randomuser.me/api/portraits/men/32.jpg', product:'React Admin Dashboard', rating:5, comment:'Excellent template! Saved me weeks of work. Very clean code.', date:'12 May 2025', helpful:24 },
    { id:2, customer:'Priya Singh', avatar:'https://randomuser.me/api/portraits/women/44.jpg', product:'Modern UI Kit', rating:4, comment:'Beautiful components. Would love more color options.', date:'10 May 2025', helpful:18 },
    { id:3, customer:'Arjun Reddy', avatar:'https://randomuser.me/api/portraits/men/22.jpg', product:'Landing Page Template', rating:5, comment:'Perfect for client projects. Highly recommended!', date:'08 May 2025', helpful:15 },
    { id:4, customer:'Meena Devi', avatar:'https://randomuser.me/api/portraits/women/33.jpg', product:'React Admin Dashboard', rating:3, comment:'Good product but documentation needs improvement.', date:'05 May 2025', helpful:8 },
  ];

  const stats = [
    { label:'Total Products', value:'12', icon:'📦', color:'#4F46E5', bg:'#EEF2FF', change:'+2 this month' },
    { label:'Total Sales', value:'₹1,24,500', icon:'💰', color:'#16a34a', bg:'#dcfce7', change:'+₹12,000 this month' },
    { label:'Total Orders', value:'156', icon:'🛒', color:'#F59E0B', bg:'#FEF3C7', change:'+18 this month' },
    { label:'Avg Rating', value:'4.8 ⭐', icon:'🏆', color:'#06B6D4', bg:'#ECFEFF', change:'+0.2 this month' },
  ];

  const orders = [
    { id:'#ORD001', customer:'Ravi Kumar', product:'React Admin Dashboard', date:'12 May 2025', amount:'₹2,099', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD002', customer:'Priya Singh', product:'Modern UI Kit', date:'10 May 2025', amount:'₹1,499', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
    { id:'#ORD003', customer:'Arjun Reddy', product:'Landing Page Template', date:'08 May 2025', amount:'₹1,299', status:'Processing', statusColor:'#F59E0B', statusBg:'#FEF3C7' },
    { id:'#ORD004', customer:'Meena Devi', product:'React Admin Dashboard', date:'05 May 2025', amount:'₹2,099', status:'Completed', statusColor:'#16a34a', statusBg:'#dcfce7' },
  ];

  const navItems = [
    { id:'overview', icon:'📊', label:'Overview' },
    { id:'products', icon:'📦', label:'My Products' },
    { id:'upload', icon:'⬆️', label:'Add Product' },
    { id:'orders', icon:'🛒', label:'Orders' },
    { id:'analytics', icon:'📈', label:'Product Analytics' },
    { id:'earnings', icon:'💰', label:'Earnings' },
    { id:'messages', icon:'💬', label:'Messages', badge: messages.filter(m => !m.read).length },
    { id:'reviews', icon:'⭐', label:'Reviews & Ratings' },
    { id:'profile', icon:'👤', label:'Vendor Profile' },
    { id:'settings', icon:'⚙️', label:'Settings' },
  ];

  // Upload form
  const uploadFormik = useFormik({
    initialValues: { title:'', category:'', price:'', originalPrice:'', description:'', tags:'', demoUrl:'' },
    validationSchema: Yup.object({
      title: Yup.string().min(5,'❌ Min 5 characters').required('❌ Required'),
      category: Yup.string().required('❌ Required'),
      price: Yup.number().min(1,'❌ Must be > 0').required('❌ Required'),
      originalPrice: Yup.number().min(1,'❌ Required').required('❌ Required'),
      description: Yup.string().min(20,'❌ Min 20 characters').required('❌ Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newProduct = {
        id: products.length + 1,
        title: values.title,
        category: values.category,
        price: Number(values.price),
        sales: 0,
        status: 'Pending',
        image: imagePreview || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        date: new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }),
      };
      setProducts(prev => [newProduct, ...prev]);
      toast.success('🎉 Product uploaded! Under review.');
      resetForm();
      setImagePreview(null);
      setActivePage('products');
    }
  });

  const inputStyle = (field, formikInstance = uploadFormik) => ({
    width:'100%', padding:'12px 15px', marginBottom:'5px',
    border: formikInstance.touched[field] && formikInstance.errors[field] ? '1.5px solid #ef4444' : '1.5px solid #e2e8f0',
    borderRadius:'10px', fontSize:'0.9rem', fontFamily:'Poppins',
    outline:'none', background:'#f8fafc', color:'#1e1e2f'
  });

  const labelStyle = { fontWeight:'600', marginBottom:'8px', display:'block', color:'#333', fontSize:'0.9rem' };
  const errorStyle = { color:'#ef4444', fontSize:'0.8rem', marginBottom:'12px' };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} style={{ color: i < rating ? '#F59E0B' : '#e2e8f0', fontSize:'1rem' }}>★</span>
    ));
  };

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', display:'flex' }}>

      {/* SIDEBAR */}
     {/* SIDEBAR */}
            <div style={{
            width: window.innerWidth <= 768 ? '100%' : '260px',
            minHeight: window.innerWidth <= 768 ? 'auto' : '100vh',
            background:'linear-gradient(180deg, #1e1e2f 0%, #2d1b69 100%)',
            flexShrink:0, display:'flex',
            flexDirection:'column',
            position: window.innerWidth <= 768 ? 'relative' : 'sticky',
            top:0, overflowY:'auto'
            }}>

        <div style={{ padding:'25px 20px', textAlign:'center', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ width:'70px', height:'70px', borderRadius:'50%', background:'linear-gradient(135deg, #F59E0B, #ef4444)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem', margin:'0 auto 12px', boxShadow:'0 4px 15px rgba(245,158,11,0.4)' }}>🏪</div>
          <p style={{ margin:0, color:'white', fontWeight:'700', fontSize:'1rem' }}>David Smith</p>
          <p style={{ margin:'4px 0 0', color:'#94a3b8', fontSize:'0.8rem' }}>david@vendor.com</p>
          <span style={{ background:'#F59E0B', color:'white', padding:'3px 12px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'600', display:'inline-block', marginTop:'8px' }}>⭐ Verified Vendor</span>
        </div>

        <div style={{ display:'flex', justifyContent:'space-around', padding:'15px 10px', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
          {[{ label:'Products', value:'12' }, { label:'Sales', value:'156' }, { label:'Rating', value:'4.8' }].map((s, i) => (
            <div key={i} style={{ textAlign:'center' }}>
              <p style={{ margin:0, color:'white', fontWeight:'700', fontSize:'1rem' }}>{s.value}</p>
              <p style={{ margin:0, color:'#94a3b8', fontSize:'0.7rem' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <nav style={{ padding:'15px 0', flex:1 }}>
          {navItems.map(item => (
            <div key={item.id} onClick={() => setActivePage(item.id)}
              style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'13px 25px', cursor:'pointer', background: activePage === item.id ? 'rgba(245,158,11,0.15)' : 'transparent', borderLeft: activePage === item.id ? '3px solid #F59E0B' : '3px solid transparent', color: activePage === item.id ? '#F59E0B' : '#94a3b8', fontWeight: activePage === item.id ? '600' : '400', fontSize:'0.9rem', transition:'all 0.2s ease' }}>
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
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Vendor Dashboard 🏪</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Welcome back, David! Here's your store performance.</p>

            <div className="row g-4" style={{ marginBottom:'30px' }}>
              {stats.map((stat, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', transition:'all 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'15px' }}>
                      <div>
                        <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{stat.label}</p>
                        <h3 style={{ margin:'5px 0 0', color:'#1e1e2f', fontWeight:'700', fontSize:'1.4rem' }}>{stat.value}</h3>
                      </div>
                      <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:stat.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem' }}>{stat.icon}</div>
                    </div>
                    <p style={{ margin:0, fontSize:'0.8rem', color:stat.color, fontWeight:'500' }}>{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sales Chart */}
            <div className="row g-4" style={{ marginBottom:'30px' }}>
              <div className="col-md-8">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>📈 Sales Analytics</h6>
                  <ResponsiveContainer width="100%" height={230}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" tick={{ fontSize:12, fill:'#888' }} />
                      <YAxis tick={{ fontSize:12, fill:'#888' }} />
                      <Tooltip formatter={(val, name) => [name === 'sales' ? `₹${val}` : val, name === 'sales' ? 'Revenue' : 'Orders']} />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} dot={{ fill:'#4F46E5', r:5 }} name="sales" />
                      <Line type="monotone" dataKey="orders" stroke="#F59E0B" strokeWidth={3} dot={{ fill:'#F59E0B', r:5 }} name="orders" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', height:'100%' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>🏆 Top Products</h6>
                  {products.map((p, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'15px' }}>
                      <img src={p.image} alt="" style={{ width:'45px', height:'45px', borderRadius:'10px', objectFit:'cover' }} />
                      <div style={{ flex:1 }}>
                        <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.85rem' }}>{p.title}</p>
                        <p style={{ margin:0, color:'#888', fontSize:'0.78rem' }}>{p.sales} sales</p>
                      </div>
                      <span style={{ color:'#4F46E5', fontWeight:'700', fontSize:'0.85rem' }}>₹{p.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
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
                      {['Order ID','Customer','Product','Date','Amount','Status'].map(h => (
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
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{order.customer}</td>
                        <td style={{ padding:'14px 15px', color:'#555', fontSize:'0.85rem' }}>{order.product}</td>
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

            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Quick Actions</h5>
              <div style={{ display:'flex', gap:'15px', flexWrap:'wrap' }}>
                {[
                  { label:'Add Product', icon:'⬆️', action:'upload', color:'#4F46E5' },
                  { label:'View Products', icon:'📦', action:'products', color:'#06B6D4' },
                  { label:'Messages', icon:'💬', action:'messages', color:'#F59E0B' },
                  { label:'View Earnings', icon:'💰', action:'earnings', color:'#16a34a' },
                ].map((btn, i) => (
                  <button key={i} onClick={() => setActivePage(btn.action)} style={{ display:'flex', alignItems:'center', gap:'8px', padding:'12px 20px', background:btn.color, color:'white', border:'none', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', fontFamily:'Poppins' }}>
                    {btn.icon} {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== MY PRODUCTS ===== */}
        {activePage === 'products' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'25px' }}>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>My Products</h2>
                <p style={{ color:'#888', margin:0 }}>Manage all your listed digital products.</p>
              </div>
              <button onClick={() => setActivePage('upload')} style={{ background:'#4F46E5', color:'white', border:'none', padding:'12px 24px', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', fontFamily:'Poppins' }}>+ Add New Product</button>
            </div>

            <div className="row g-4">
              {products.map((product, i) => (
                <div className="col-md-4" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', transition:'all 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                    <div style={{ position:'relative' }}>
                      <img src={product.image} alt={product.title} style={{ width:'100%', height:'160px', objectFit:'cover' }} />
                      <span style={{ position:'absolute', top:'10px', right:'10px', background: product.status === 'Active' ? '#dcfce7' : '#FEF3C7', color: product.status === 'Active' ? '#16a34a' : '#F59E0B', padding:'4px 10px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'600' }}>{product.status}</span>
                    </div>
                    <div style={{ padding:'20px' }}>
                      <span style={{ background:'#EEF2FF', color:'#4F46E5', padding:'3px 10px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'500' }}>{product.category}</span>
                      <h6 style={{ color:'#1e1e2f', fontWeight:'700', margin:'10px 0 5px', fontSize:'0.95rem' }}>{product.title}</h6>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'15px' }}>
                        <span style={{ color:'#4F46E5', fontWeight:'700', fontSize:'1.1rem' }}>₹{product.price.toLocaleString('en-IN')}</span>
                        <span style={{ color:'#888', fontSize:'0.85rem' }}>📦 {product.sales} sales</span>
                      </div>
                      <p style={{ color:'#aaa', fontSize:'0.8rem', margin:'0 0 15px' }}>Listed: {product.date}</p>
                      <div style={{ display:'flex', gap:'8px' }}>
                        <button onClick={() => { setEditProduct(product); setActivePage('edit'); }}
                          style={{ flex:1, padding:'8px', background:'#EEF2FF', color:'#4F46E5', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>✏️ Edit</button>
                        <button onClick={() => { setProducts(prev => prev.filter(p => p.id !== product.id)); toast.success('Product deleted!'); }}
                          style={{ flex:1, padding:'8px', background:'#FEF2F2', color:'#ef4444', border:'none', borderRadius:'8px', fontWeight:'600', cursor:'pointer', fontSize:'0.85rem' }}>🗑 Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== EDIT PRODUCT ===== */}
        {activePage === 'edit' && editProduct && (
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'15px', marginBottom:'25px' }}>
              <button onClick={() => setActivePage('products')} style={{ background:'#EEF2FF', color:'#4F46E5', border:'none', padding:'8px 16px', borderRadius:'10px', fontWeight:'600', cursor:'pointer' }}>← Back</button>
              <div>
                <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'3px' }}>Edit Product</h2>
                <p style={{ color:'#888', margin:0 }}>Update your product details.</p>
              </div>
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'35px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', maxWidth:'750px' }}>
              <div className="row g-3">
                <div className="col-md-12">
                  <label style={labelStyle}>Product Title</label>
                  <input type="text" defaultValue={editProduct.title}
                    onChange={e => setEditProduct(prev => ({ ...prev, title:e.target.value }))}
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Category</label>
                  <select defaultValue={editProduct.category}
                    onChange={e => setEditProduct(prev => ({ ...prev, category:e.target.value }))}
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }}>
                    <option>Template</option>
                    <option>UI Kit</option>
                    <option>Source Code</option>
                    <option>Graphics</option>
                    <option>Ebook</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Sale Price (₹)</label>
                  <input type="number" defaultValue={editProduct.price}
                    onChange={e => setEditProduct(prev => ({ ...prev, price:Number(e.target.value) }))}
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                </div>
                <div className="col-md-12">
                  <label style={labelStyle}>Description</label>
                  <textarea rows="4" placeholder="Update product description..."
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc', resize:'none' }} />
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Status</label>
                  <select defaultValue={editProduct.status}
                    onChange={e => setEditProduct(prev => ({ ...prev, status:e.target.value }))}
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }}>
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Demo URL</label>
                  <input type="text" placeholder="https://demo.yourproduct.com"
                    style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                </div>
                <div className="col-md-12">
                  <div style={{ display:'flex', gap:'12px', marginTop:'10px' }}>
                    <button onClick={() => {
                        setProducts(prev => prev.map(p => p.id === editProduct.id ? editProduct : p));
                        toast.success('✅ Product updated successfully!');
                        setActivePage('products');
                      }}
                      style={{ flex:1, padding:'13px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>
                      💾 Save Changes
                    </button>
                    <button onClick={() => setActivePage('products')}
                      style={{ padding:'13px 25px', background:'#f1f5f9', color:'#64748b', border:'none', borderRadius:'10px', fontWeight:'600', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== ADD PRODUCT ===== */}
        {activePage === 'upload' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Add Product</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Fill in the details to list your digital product.</p>

            <div style={{ background:'white', borderRadius:'16px', padding:'35px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', maxWidth:'750px' }}>
              <form onSubmit={uploadFormik.handleSubmit}>
                <div className="row">
                  <div className="col-md-12" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Product Title *</label>
                    <input type="text" name="title" placeholder="e.g. React Admin Dashboard Template"
                      onChange={uploadFormik.handleChange} onBlur={uploadFormik.handleBlur}
                      value={uploadFormik.values.title} style={inputStyle('title')} />
                    {uploadFormik.touched.title && uploadFormik.errors.title && <p style={errorStyle}>{uploadFormik.errors.title}</p>}
                  </div>
                  <div className="col-md-6" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Category *</label>
                    <select name="category" onChange={uploadFormik.handleChange} onBlur={uploadFormik.handleBlur} value={uploadFormik.values.category} style={inputStyle('category')}>
                      <option value="">Select Category</option>
                      <option>Template</option>
                      <option>UI Kit</option>
                      <option>Source Code</option>
                      <option>Graphics</option>
                      <option>Ebook</option>
                    </select>
                    {uploadFormik.touched.category && uploadFormik.errors.category && <p style={errorStyle}>{uploadFormik.errors.category}</p>}
                  </div>
                  <div className="col-md-3" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Sale Price (₹) *</label>
                    <input type="number" name="price" placeholder="e.g. 1999"
                      onChange={uploadFormik.handleChange} onBlur={uploadFormik.handleBlur}
                      value={uploadFormik.values.price} style={inputStyle('price')} />
                    {uploadFormik.touched.price && uploadFormik.errors.price && <p style={errorStyle}>{uploadFormik.errors.price}</p>}
                  </div>
                  <div className="col-md-3" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Original Price (₹) *</label>
                    <input type="number" name="originalPrice" placeholder="e.g. 3999"
                      onChange={uploadFormik.handleChange} onBlur={uploadFormik.handleBlur}
                      value={uploadFormik.values.originalPrice} style={inputStyle('originalPrice')} />
                    {uploadFormik.touched.originalPrice && uploadFormik.errors.originalPrice && <p style={errorStyle}>{uploadFormik.errors.originalPrice}</p>}
                  </div>
                  <div className="col-md-12" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Description *</label>
                    <textarea name="description" rows="4" placeholder="Describe your product..."
                      onChange={uploadFormik.handleChange} onBlur={uploadFormik.handleBlur}
                      value={uploadFormik.values.description} style={{ ...inputStyle('description'), resize:'none' }} />
                    {uploadFormik.touched.description && uploadFormik.errors.description && <p style={errorStyle}>{uploadFormik.errors.description}</p>}
                  </div>
                  <div className="col-md-6" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Tags (comma separated)</label>
                    <input type="text" name="tags" placeholder="React, Dashboard, Admin"
                      onChange={uploadFormik.handleChange} value={uploadFormik.values.tags} style={inputStyle('tags')} />
                  </div>
                  <div className="col-md-6" style={{ marginBottom:'5px' }}>
                    <label style={labelStyle}>Demo URL</label>
                    <input type="text" name="demoUrl" placeholder="https://demo.yourproduct.com"
                      onChange={uploadFormik.handleChange} value={uploadFormik.values.demoUrl} style={inputStyle('demoUrl')} />
                  </div>
                  <div className="col-md-12" style={{ marginBottom:'20px' }}>
                    <label style={labelStyle}>Product Thumbnail</label>
                    <div style={{ border:'2px dashed #e2e8f0', borderRadius:'12px', padding:'30px', textAlign:'center', background:'#f8fafc', cursor:'pointer' }}
                      onClick={() => document.getElementById('imageInput').click()}>
                      {imagePreview ? (
                        <div>
                          <img src={imagePreview} alt="preview" style={{ width:'100%', maxHeight:'200px', objectFit:'cover', borderRadius:'8px', marginBottom:'10px' }} />
                          <p style={{ color:'#4F46E5', fontWeight:'600', margin:0, fontSize:'0.85rem' }}>Click to change</p>
                        </div>
                      ) : (
                        <div>
                          <p style={{ fontSize:'2.5rem', margin:'0 0 10px' }}>🖼️</p>
                          <p style={{ color:'#4F46E5', fontWeight:'600', margin:'0 0 5px' }}>Click to upload thumbnail</p>
                          <p style={{ color:'#aaa', fontSize:'0.82rem', margin:0 }}>PNG, JPG up to 5MB</p>
                        </div>
                      )}
                      <input id="imageInput" type="file" accept="image/*" style={{ display:'none' }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) { const reader = new FileReader(); reader.onloadend = () => setImagePreview(reader.result); reader.readAsDataURL(file); }
                        }} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div style={{ display:'flex', gap:'15px' }}>
                      <button type="submit" style={{ flex:1, padding:'14px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>🚀 Submit for Review</button>
                      <button type="button" onClick={() => { uploadFormik.resetForm(); setImagePreview(null); }}
                        style={{ padding:'14px 25px', background:'#f1f5f9', color:'#64748b', border:'none', borderRadius:'10px', fontWeight:'600', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>🗑 Clear</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ===== ORDERS ===== */}
        {activePage === 'orders' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Orders Management</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>All orders received for your products.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                      {['Order ID','Customer','Product','Date','Amount','Status'].map(h => (
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
                        <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{order.customer}</td>
                        <td style={{ padding:'14px 15px', color:'#555', fontSize:'0.85rem' }}>{order.product}</td>
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
          </div>
        )}

        {/* ===== PRODUCT ANALYTICS ===== */}
        {activePage === 'analytics' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Product Analytics</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Track views and sales performance per product.</p>

            <div className="row g-4" style={{ marginBottom:'30px' }}>
              {[
                { label:'Total Views', value:'1,050', icon:'👁️', color:'#4F46E5', bg:'#EEF2FF' },
                { label:'Conversion Rate', value:'14.8%', icon:'📊', color:'#16a34a', bg:'#dcfce7' },
                { label:'Avg Order Value', value:'₹1,632', icon:'💰', color:'#F59E0B', bg:'#FEF3C7' },
                { label:'Return Customers', value:'34%', icon:'🔄', color:'#06B6D4', bg:'#ECFEFF' },
              ].map((card, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
                      <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{card.label}</p>
                      <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:card.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem' }}>{card.icon}</div>
                    </div>
                    <h3 style={{ margin:0, color:card.color, fontWeight:'700', fontSize:'1.5rem' }}>{card.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="row g-4">
              <div className="col-md-8">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>📊 Views vs Sales per Product</h6>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={productAnalyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" tick={{ fontSize:11, fill:'#888' }} />
                      <YAxis tick={{ fontSize:12, fill:'#888' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="views" fill="#4F46E5" radius={[6,6,0,0]} name="Views" />
                      <Bar dataKey="sales" fill="#F59E0B" radius={[6,6,0,0]} name="Sales" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>📦 Product Performance</h6>
                  {productAnalyticsData.map((p, i) => (
                    <div key={i} style={{ marginBottom:'20px' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                        <span style={{ fontSize:'0.82rem', color:'#555', fontWeight:'500' }}>{p.name}</span>
                        <span style={{ fontSize:'0.82rem', color:'#4F46E5', fontWeight:'700' }}>{Math.round((p.sales/p.views)*100)}%</span>
                      </div>
                      <div style={{ background:'#f0f0f0', borderRadius:'10px', height:'8px' }}>
                        <div style={{ width:`${Math.round((p.sales/p.views)*100)}%`, background:'#4F46E5', height:'8px', borderRadius:'10px', transition:'all 0.3s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== EARNINGS ===== */}
        {activePage === 'earnings' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Earnings & Payouts</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Track your revenue and manage withdrawals.</p>

            <div className="row g-4" style={{ marginBottom:'30px' }}>
              {[
                { label:'Total Earnings', value:'₹1,24,500', icon:'💰', color:'#16a34a', bg:'#dcfce7' },
                { label:'This Month', value:'₹12,000', icon:'📈', color:'#4F46E5', bg:'#EEF2FF' },
                { label:'Pending Payout', value:'₹8,500', icon:'⏳', color:'#F59E0B', bg:'#FEF3C7' },
                { label:'Withdrawn', value:'₹1,16,000', icon:'🏦', color:'#06B6D4', bg:'#ECFEFF' },
              ].map((card, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
                      <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{card.label}</p>
                      <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:card.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem' }}>{card.icon}</div>
                    </div>
                    <h3 style={{ margin:0, color:card.color, fontWeight:'700', fontSize:'1.4rem' }}>{card.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'25px' }}>
              <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Transaction History</h5>
              <table style={{ width:'100%', borderCollapse:'collapse' }}>
                <thead>
                  <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                    {['Date','Product','Order ID','Amount','Commission','Net'].map(h => (
                      <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.82rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date:'12 May 2025', product:'React Admin Dashboard', order:'#ORD001', amount:'₹2,099', commission:'₹210', net:'₹1,889' },
                    { date:'10 May 2025', product:'Modern UI Kit', order:'#ORD002', amount:'₹1,499', commission:'₹150', net:'₹1,349' },
                    { date:'05 May 2025', product:'React Admin Dashboard', order:'#ORD004', amount:'₹2,099', commission:'₹210', net:'₹1,889' },
                  ].map((tx, i) => (
                    <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                      onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                      onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                      <td style={{ padding:'14px 15px', color:'#888', fontSize:'0.85rem' }}>{tx.date}</td>
                      <td style={{ padding:'14px 15px', color:'#1e1e2f', fontSize:'0.85rem' }}>{tx.product}</td>
                      <td style={{ padding:'14px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.85rem' }}>{tx.order}</td>
                      <td style={{ padding:'14px 15px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.85rem' }}>{tx.amount}</td>
                      <td style={{ padding:'14px 15px', color:'#ef4444', fontSize:'0.85rem' }}>-{tx.commission}</td>
                      <td style={{ padding:'14px 15px', color:'#16a34a', fontWeight:'700', fontSize:'0.85rem' }}>{tx.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <h5 style={{ margin:'0 0 15px', color:'#1e1e2f', fontWeight:'700' }}>Request Payout</h5>
              <p style={{ color:'#888', marginBottom:'15px', fontSize:'0.9rem' }}>Available balance: <strong style={{ color:'#16a34a' }}>₹8,500</strong></p>
              <div style={{ display:'flex', gap:'10px', alignItems:'center', flexWrap:'wrap' }}>
                <select style={{ padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }}>
                  <option>UPI Transfer</option>
                  <option>Bank Transfer</option>
                  <option>Razorpay</option>
                </select>
                <input type="number" placeholder="Enter amount ₹" style={{ padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc', width:'180px' }} />
                <button onClick={() => toast.success('✅ Payout request submitted!')}
                  style={{ background:'#16a34a', color:'white', border:'none', padding:'13px 30px', borderRadius:'10px', fontWeight:'700', cursor:'pointer', fontSize:'1rem', fontFamily:'Poppins' }}>
                  💸 Withdraw
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== CUSTOMER MESSAGES ===== */}
        {activePage === 'messages' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Customer Messages</h2>
            <p style={{ color:'#888', marginBottom:'25px' }}>Respond to customer queries about your products.</p>

            <div className="row g-0" style={{ background:'white', borderRadius:'16px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', overflow:'hidden', minHeight:'500px' }}>

              {/* Message List */}
              <div className="col-md-4" style={{ borderRight:'1px solid #f0f0f0' }}>
                <div style={{ padding:'20px', borderBottom:'1px solid #f0f0f0' }}>
                  <h6 style={{ margin:0, fontWeight:'700', color:'#1e1e2f' }}>Inbox ({messages.filter(m => !m.read).length} unread)</h6>
                </div>
                {messages.map((msg, i) => (
                  <div key={msg.id} onClick={() => { setActiveChat(msg); setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, read:true } : m)); }}
                    style={{ display:'flex', gap:'12px', padding:'18px 20px', cursor:'pointer', borderBottom:'1px solid #f8f8f8', background: activeChat?.id === msg.id ? '#EEF2FF' : msg.read ? 'white' : '#fafbff', transition:'all 0.2s' }}>
                    <img src={msg.avatar} alt="" style={{ width:'44px', height:'44px', borderRadius:'50%', objectFit:'cover', flexShrink:0 }} />
                    <div style={{ flex:1, overflow:'hidden' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'3px' }}>
                        <p style={{ margin:0, fontWeight: msg.read ? '500' : '700', color:'#1e1e2f', fontSize:'0.9rem' }}>{msg.customer}</p>
                        <span style={{ color:'#aaa', fontSize:'0.75rem' }}>{msg.time}</span>
                      </div>
                      <p style={{ margin:0, color:'#888', fontSize:'0.8rem', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{msg.message}</p>
                      {!msg.read && <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#4F46E5', marginTop:'4px' }}></div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Window */}
              <div className="col-md-8" style={{ display:'flex', flexDirection:'column' }}>
                {activeChat ? (
                  <>
                    <div style={{ padding:'20px', borderBottom:'1px solid #f0f0f0', display:'flex', alignItems:'center', gap:'12px' }}>
                      <img src={activeChat.avatar} alt="" style={{ width:'44px', height:'44px', borderRadius:'50%', objectFit:'cover' }} />
                      <div>
                        <p style={{ margin:0, fontWeight:'700', color:'#1e1e2f' }}>{activeChat.customer}</p>
                        <p style={{ margin:0, color:'#888', fontSize:'0.8rem' }}>Re: {activeChat.product}</p>
                      </div>
                    </div>
                    <div style={{ flex:1, padding:'25px', display:'flex', flexDirection:'column', gap:'15px' }}>
                      <div style={{ display:'flex', gap:'10px' }}>
                        <img src={activeChat.avatar} alt="" style={{ width:'36px', height:'36px', borderRadius:'50%', objectFit:'cover', flexShrink:0 }} />
                        <div style={{ background:'#f8fafc', padding:'12px 16px', borderRadius:'12px', borderBottomLeftRadius:'4px', maxWidth:'70%' }}>
                          <p style={{ margin:0, color:'#1e1e2f', fontSize:'0.9rem' }}>{activeChat.message}</p>
                          <span style={{ color:'#aaa', fontSize:'0.75rem' }}>{activeChat.time}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding:'20px', borderTop:'1px solid #f0f0f0', display:'flex', gap:'10px' }}>
                      <input type="text" placeholder="Type your reply..."
                        value={replyText} onChange={e => setReplyText(e.target.value)}
                        style={{ flex:1, padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f' }} />
                      <button onClick={() => { if (replyText) { toast.success('✅ Reply sent!'); setReplyText(''); } }}
                        style={{ background:'#4F46E5', color:'white', border:'none', padding:'12px 20px', borderRadius:'10px', fontWeight:'600', cursor:'pointer', fontFamily:'Poppins' }}>
                        Send 📨
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'10px' }}>
                    <p style={{ fontSize:'3rem' }}>💬</p>
                    <p style={{ color:'#888', fontWeight:'600' }}>Select a message to reply</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===== REVIEWS & RATINGS ===== */}
        {activePage === 'reviews' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Reviews & Ratings</h2>
            <p style={{ color:'#888', marginBottom:'25px' }}>What customers are saying about your products.</p>

            {/* Rating Summary */}
            <div className="row g-4" style={{ marginBottom:'30px' }}>
              {[
                { label:'Overall Rating', value:'4.3', icon:'⭐', color:'#F59E0B', bg:'#FEF3C7' },
                { label:'Total Reviews', value:'4', icon:'💬', color:'#4F46E5', bg:'#EEF2FF' },
                { label:'5 Star Reviews', value:'2', icon:'🏆', color:'#16a34a', bg:'#dcfce7' },
                { label:'Helpful Votes', value:'65', icon:'👍', color:'#06B6D4', bg:'#ECFEFF' },
              ].map((card, i) => (
                <div className="col-md-3" key={i}>
                  <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
                      <p style={{ margin:0, color:'#888', fontSize:'0.85rem' }}>{card.label}</p>
                      <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:card.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem' }}>{card.icon}</div>
                    </div>
                    <h3 style={{ margin:0, color:card.color, fontWeight:'700', fontSize:'1.6rem' }}>{card.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews List */}
            <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <h5 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700' }}>Customer Reviews</h5>
              {reviews.map((review, i) => (
                <div key={review.id} style={{ padding:'20px 0', borderBottom: i < reviews.length-1 ? '1px solid #f0f0f0' : 'none' }}>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:'15px' }}>
                    <img src={review.avatar} alt="" style={{ width:'48px', height:'48px', borderRadius:'50%', objectFit:'cover', flexShrink:0 }} />
                    <div style={{ flex:1 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'10px' }}>
                        <div>
                          <p style={{ margin:0, fontWeight:'700', color:'#1e1e2f', fontSize:'0.95rem' }}>{review.customer}</p>
                          <div style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'4px' }}>
                            <div>{renderStars(review.rating)}</div>
                            <span style={{ color:'#888', fontSize:'0.8rem' }}>{review.date}</span>
                          </div>
                        </div>
                        <span style={{ background:'#EEF2FF', color:'#4F46E5', padding:'4px 12px', borderRadius:'20px', fontSize:'0.78rem', fontWeight:'500' }}>{review.product}</span>
                      </div>
                      <p style={{ margin:'12px 0', color:'#555', fontSize:'0.9rem', lineHeight:'1.6' }}>{review.comment}</p>
                      <div style={{ display:'flex', alignItems:'center', gap:'15px' }}>
                        <button style={{ background:'#f1f5f9', color:'#64748b', border:'none', padding:'6px 14px', borderRadius:'20px', fontSize:'0.82rem', fontWeight:'500', cursor:'pointer' }}>
                          👍 Helpful ({review.helpful})
                        </button>
                        <button onClick={() => toast.info('Reply feature coming soon!')}
                          style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'6px 14px', borderRadius:'20px', fontSize:'0.82rem', fontWeight:'600', cursor:'pointer' }}>
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== VENDOR PROFILE ===== */}
        {activePage === 'profile' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Vendor Profile</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Manage your public vendor profile.</p>
            <div className="row g-4">
              <div className="col-md-8">
                <div style={{ background:'white', borderRadius:'16px', padding:'35px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
                  <div style={{ textAlign:'center', marginBottom:'30px' }}>
                    <div style={{ width:'90px', height:'90px', borderRadius:'50%', background:'linear-gradient(135deg, #F59E0B, #ef4444)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', margin:'0 auto 12px' }}>🏪</div>
                    <button style={{ background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'6px 16px', borderRadius:'20px', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer' }}>Upload Store Logo</button>
                  </div>
                  {[
                    { label:'Store Name', value:"David's Digital Store", type:'text' },
                    { label:'Full Name', value:'David Smith', type:'text' },
                    { label:'Email Address', value:'david@vendor.com', type:'email' },
                    { label:'Phone Number', value:'+91 98765 43210', type:'tel' },
                    { label:'Website URL', value:'https://davidsmith.dev', type:'text' },
                  ].map((field, i) => (
                    <div key={i} style={{ marginBottom:'18px' }}>
                      <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.9rem' }}>{field.label}</label>
                      <input type={field.type} defaultValue={field.value} style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc' }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:'20px' }}>
                    <label style={{ fontWeight:'600', color:'#333', display:'block', marginBottom:'8px', fontSize:'0.9rem' }}>Store Description</label>
                    <textarea rows="4" defaultValue="I create premium React templates, UI Kits and digital products for developers and designers."
                      style={{ width:'100%', padding:'12px 15px', border:'1.5px solid #e2e8f0', borderRadius:'10px', fontFamily:'Poppins', fontSize:'0.9rem', outline:'none', color:'#1e1e2f', background:'#f8fafc', resize:'none' }} />
                  </div>
                  <button onClick={() => toast.success('✅ Profile updated!')}
                    style={{ width:'100%', padding:'13px', background:'#4F46E5', color:'white', border:'none', borderRadius:'10px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins' }}>
                    Save Profile Changes
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', marginBottom:'20px' }}>
                  <h6 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'20px' }}>Store Stats</h6>
                  {[
                    { label:'Member Since', value:'Jan 2024' },
                    { label:'Total Products', value:'12' },
                    { label:'Total Sales', value:'156 orders' },
                    { label:'Avg Rating', value:'4.8 / 5.0' },
                    { label:'Response Rate', value:'98%' },
                  ].map((stat, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom: i < 4 ? '1px solid #f0f0f0' : 'none' }}>
                      <span style={{ color:'#888', fontSize:'0.85rem' }}>{stat.label}</span>
                      <span style={{ color:'#1e1e2f', fontWeight:'600', fontSize:'0.85rem' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background:'linear-gradient(135deg, #4F46E5, #06B6D4)', borderRadius:'16px', padding:'25px', color:'white', textAlign:'center' }}>
                  <p style={{ fontSize:'2rem', margin:'0 0 10px' }}>⭐</p>
                  <h4 style={{ fontWeight:'700', margin:'0 0 5px' }}>Verified Vendor</h4>
                  <p style={{ opacity:0.8, fontSize:'0.85rem', margin:'0 0 15px' }}>Your store is verified and trusted</p>
                  <span style={{ background:'rgba(255,255,255,0.2)', padding:'5px 15px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600' }}>✅ Badge Earned</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== SETTINGS ===== */}
        {activePage === 'settings' && (
          <div>
            <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>Settings</h2>
            <p style={{ color:'#888', marginBottom:'30px' }}>Manage your vendor account preferences.</p>
            <div style={{ background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', maxWidth:'600px' }}>
              {[
                { label:'New Order Notifications', desc:'Get notified when someone buys your product', enabled:true },
                { label:'Review Notifications', desc:'Get notified on new product reviews', enabled:true },
                { label:'Payout Alerts', desc:'Get notified when payout is processed', enabled:true },
                { label:'Marketing Emails', desc:'Receive tips to improve your sales', enabled:false },
                { label:'Product Approved Alert', desc:'Alert when product review is complete', enabled:true },
              ].map((setting, i, arr) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 0', borderBottom: i < arr.length-1 ? '1px solid #f0f0f0' : 'none' }}>
                  <div>
                    <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.95rem' }}>{setting.label}</p>
                    <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{setting.desc}</p>
                  </div>
                  <div style={{ width:'46px', height:'26px', borderRadius:'13px', background: setting.enabled ? '#4F46E5' : '#e2e8f0', cursor:'pointer', position:'relative' }}>
                    <div style={{ width:'20px', height:'20px', borderRadius:'50%', background:'white', position:'absolute', top:'3px', left: setting.enabled ? '23px' : '3px', transition:'all 0.3s ease' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default VendorDashboard;