import { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const monthlyData = [
  { month:'Jan', revenue:12000, orders:8, visitors:320 },
  { month:'Feb', revenue:18000, orders:12, visitors:450 },
  { month:'Mar', revenue:15000, orders:10, visitors:380 },
  { month:'Apr', revenue:24000, orders:16, visitors:520 },
  { month:'May', revenue:21000, orders:14, visitors:490 },
  { month:'Jun', revenue:32000, orders:22, visitors:680 },
  { month:'Jul', revenue:28000, orders:19, visitors:610 },
  { month:'Aug', revenue:35000, orders:25, visitors:720 },
];

const categoryData = [
  { name:'Templates', value:35, color:'#4F46E5' },
  { name:'UI Kits', value:25, color:'#06B6D4' },
  { name:'Source Code', value:28, color:'#F59E0B' },
  { name:'Graphics', value:8, color:'#16a34a' },
  { name:'Ebooks', value:4, color:'#ef4444' },
];

const topProducts = [
  { name:'React Admin Dashboard', sales:85, revenue:17839 },
  { name:'Modern UI Kit', sales:42, revenue:6296 },
  { name:'Ecommerce Source Code', sales:38, revenue:15576 },
  { name:'Landing Page Template', sales:28, revenue:3636 },
  { name:'Mobile App UI Kit', sales:22, revenue:6598 },
];

const weeklyData = [
  { day:'Mon', sales:4200 },
  { day:'Tue', sales:6800 },
  { day:'Wed', sales:5200 },
  { day:'Thu', sales:8900 },
  { day:'Fri', sales:7600 },
  { day:'Sat', sales:9200 },
  { day:'Sun', sales:5800 },
];

const kpiCards = [
  { label:'Total Revenue', value:'₹1,24,500', change:'+18%', icon:'💰', color:'#4F46E5', bg:'#EEF2FF', up:true },
  { label:'Total Orders', value:'156', change:'+12%', icon:'🛒', color:'#16a34a', bg:'#dcfce7', up:true },
  { label:'Total Visitors', value:'4,170', change:'+24%', icon:'👥', color:'#06B6D4', bg:'#ECFEFF', up:true },
  { label:'Avg Order Value', value:'₹798', change:'-3%', icon:'📦', color:'#F59E0B', bg:'#FEF3C7', up:false },
  { label:'Conversion Rate', value:'3.74%', change:'+0.5%', icon:'📈', color:'#8b5cf6', bg:'#f5f3ff', up:true },
  { label:'Return Customers', value:'34%', change:'+8%', icon:'🔄', color:'#ef4444', bg:'#FEF2F2', up:true },
  { label:'Products Listed', value:'12', change:'+2', icon:'🏪', color:'#F59E0B', bg:'#FEF3C7', up:true },
  { label:'Avg Rating', value:'4.8 ⭐', change:'+0.2', icon:'🏆', color:'#16a34a', bg:'#dcfce7', up:true },
];

function Analytics() {

  const [selectedRange, setSelectedRange] = useState('Last 8 Months');
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{
      background:'#F8FAFC',
      minHeight:'100vh',
      padding: isMobile ? '15px' : '30px 40px'
    }}>

      {/* Header */}
      <div style={{ marginBottom:'25px' }}>
        <h2 style={{
          color:'#1e1e2f', fontWeight:'700',
          marginBottom:'5px',
          fontSize: isMobile ? '1.4rem' : '1.8rem'
        }}>
          📊 Analytics Dashboard
        </h2>
        <p style={{ color:'#888', margin:0, fontSize:'0.9rem' }}>
          Track your marketplace performance with real-time analytics.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="row g-3" style={{ marginBottom:'25px' }}>
        {kpiCards.map((card, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div style={{
              background:'white', borderRadius:'14px',
              padding: isMobile ? '15px' : '22px',
              boxShadow:'0 4px 15px rgba(0,0,0,0.06)',
              transition:'all 0.3s ease', height:'100%'
            }}
            onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'10px' }}>
                <div style={{
                  width: isMobile ? '36px' : '46px',
                  height: isMobile ? '36px' : '46px',
                  borderRadius:'10px', background:card.bg,
                  display:'flex', alignItems:'center',
                  justifyContent:'center',
                  fontSize: isMobile ? '1rem' : '1.3rem'
                }}>
                  {card.icon}
                </div>
                <span style={{
                  background: card.up ? '#dcfce7' : '#FEF2F2',
                  color: card.up ? '#16a34a' : '#ef4444',
                  padding:'2px 7px', borderRadius:'20px',
                  fontSize:'0.7rem', fontWeight:'600'
                }}>
                  {card.up ? '↑' : '↓'} {card.change}
                </span>
              </div>
              <p style={{ margin:0, color:'#888', fontSize: isMobile ? '0.72rem' : '0.82rem', marginBottom:'4px' }}>
                {card.label}
              </p>
              <h3 style={{
                margin:0, color:'#1e1e2f', fontWeight:'700',
                fontSize: isMobile ? '1rem' : '1.4rem'
              }}>
                {card.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Area Chart + Pie Chart */}
      <div className="row g-4" style={{ marginBottom:'25px' }}>

        <div className="col-12 col-md-8">
          <div style={{ background:'white', borderRadius:'16px', padding: isMobile ? '15px' : '25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', flexWrap:'wrap', gap:'10px' }}>
              <h6 style={{ margin:0, color:'#1e1e2f', fontWeight:'700', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                📈 Revenue & Orders Trend
              </h6>
              <select
                value={selectedRange}
                onChange={e => setSelectedRange(e.target.value)}
                style={{ padding:'6px 12px', border:'1.5px solid #e2e8f0', borderRadius:'8px', fontFamily:'Poppins', fontSize:'0.82rem', outline:'none', color:'#555', background:'#f8fafc' }}>
                <option>Last 8 Months</option>
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={isMobile ? 200 : 260}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize:11, fill:'#888' }} />
                <YAxis tick={{ fontSize:11, fill:'#888' }} width={isMobile ? 40 : 60} />
                <Tooltip formatter={(val, name) => [
                  name === 'revenue' ? `₹${val.toLocaleString('en-IN')}` : val,
                  name === 'revenue' ? 'Revenue' : 'Orders'
                ]} />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={3} fill="url(#revenueGrad)" dot={{ fill:'#4F46E5', r: isMobile ? 3 : 5 }} name="revenue" />
                <Area type="monotone" dataKey="orders" stroke="#06B6D4" strokeWidth={3} fill="url(#ordersGrad)" dot={{ fill:'#06B6D4', r: isMobile ? 3 : 5 }} name="orders" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div style={{ background:'white', borderRadius:'16px', padding: isMobile ? '15px' : '25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
            <h6 style={{ margin:'0 0 15px', color:'#1e1e2f', fontWeight:'700', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              🥧 Sales by Category
            </h6>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%" cy="50%"
                  innerRadius={40} outerRadius={65}
                  paddingAngle={3} dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => `${val}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ marginTop:'10px' }}>
              {categoryData.map((cat, i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'7px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'7px' }}>
                    <div style={{ width:'9px', height:'9px', borderRadius:'50%', background:cat.color }}></div>
                    <span style={{ color:'#555', fontSize:'0.8rem' }}>{cat.name}</span>
                  </div>
                  <span style={{ color:'#1e1e2f', fontWeight:'600', fontSize:'0.8rem' }}>{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Bar + Visitors Line */}
      <div className="row g-4" style={{ marginBottom:'25px' }}>

        <div className="col-12 col-md-6">
          <div style={{ background:'white', borderRadius:'16px', padding: isMobile ? '15px' : '25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
            <h6 style={{ margin:'0 0 15px', color:'#1e1e2f', fontWeight:'700', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              📊 This Week's Sales (₹)
            </h6>
            <ResponsiveContainer width="100%" height={isMobile ? 180 : 220}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" tick={{ fontSize:11, fill:'#888' }} />
                <YAxis tick={{ fontSize:11, fill:'#888' }} width={isMobile ? 40 : 55} />
                <Tooltip formatter={(val) => `₹${val.toLocaleString('en-IN')}`} />
                <Bar dataKey="sales" fill="#4F46E5" radius={[8,8,0,0]} name="Sales" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div style={{ background:'white', borderRadius:'16px', padding: isMobile ? '15px' : '25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
            <h6 style={{ margin:'0 0 15px', color:'#1e1e2f', fontWeight:'700', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              👥 Monthly Visitors
            </h6>
            <ResponsiveContainer width="100%" height={isMobile ? 180 : 220}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize:11, fill:'#888' }} />
                <YAxis tick={{ fontSize:11, fill:'#888' }} width={isMobile ? 40 : 55} />
                <Tooltip />
                <Line type="monotone" dataKey="visitors" stroke="#F59E0B" strokeWidth={3} dot={{ fill:'#F59E0B', r: isMobile ? 3 : 5 }} name="Visitors" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Products Table */}
      <div style={{ background:'white', borderRadius:'16px', padding: isMobile ? '15px' : '25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
        <h6 style={{ margin:'0 0 20px', color:'#1e1e2f', fontWeight:'700', fontSize: isMobile ? '0.9rem' : '1rem' }}>
          🏆 Top Performing Products
        </h6>
        <div style={{ overflowX:'auto' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', minWidth:'500px' }}>
            <thead>
              <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                {['Rank','Product','Sales','Revenue','Performance'].map(h => (
                  <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#888', fontSize:'0.78rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, i) => (
                <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                  onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                  onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                  <td style={{ padding:'12px 12px' }}>
                    <span style={{
                      background: i === 0 ? '#FEF3C7' : i === 1 ? '#f1f5f9' : i === 2 ? '#fef2f2' : '#f8fafc',
                      color: i === 0 ? '#F59E0B' : i === 1 ? '#64748b' : i === 2 ? '#ef4444' : '#888',
                      width:'28px', height:'28px', borderRadius:'50%',
                      display:'inline-flex', alignItems:'center',
                      justifyContent:'center', fontWeight:'700', fontSize:'0.82rem'
                    }}>
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i+1}
                    </span>
                  </td>
                  <td style={{ padding:'12px 12px', color:'#1e1e2f', fontWeight:'600', fontSize:'0.85rem' }}>{product.name}</td>
                  <td style={{ padding:'12px 12px', color:'#555', fontSize:'0.85rem' }}>{product.sales}</td>
                  <td style={{ padding:'12px 12px', color:'#4F46E5', fontWeight:'700', fontSize:'0.85rem' }}>
                    ₹{product.revenue.toLocaleString('en-IN')}
                  </td>
                  <td style={{ padding:'12px 12px', minWidth:'120px' }}>
                    <div style={{ background:'#f0f0f0', borderRadius:'10px', height:'7px', marginBottom:'4px' }}>
                      <div style={{
                        width:`${Math.round((product.sales/85)*100)}%`,
                        background:'linear-gradient(90deg, #4F46E5, #06B6D4)',
                        height:'7px', borderRadius:'10px'
                      }}></div>
                    </div>
                    <span style={{ color:'#888', fontSize:'0.72rem' }}>
                      {Math.round((product.sales/85)*100)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Analytics;