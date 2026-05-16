import { useState, useEffect } from 'react';
import { getProducts, getProductById, createProduct } from '../api/productAPI';
import { getUsers } from '../api/userAPI';

function APIDemo() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeDemo, setActiveDemo] = useState('products');
  const [postResult, setPostResult] = useState(null);

  // GET all products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductById(1);
      setSingleProduct(data);
    } catch (err) {
      setError('Failed to fetch product: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
      setActiveDemo('users');
    } catch (err) {
      setError('Failed to fetch users: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePostRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const newProduct = {
        title: 'New Digital Product',
        body: 'This is a test product created via POST request',
        userId: 1,
      };
      const result = await createProduct(newProduct);
      setPostResult(result);
      setActiveDemo('post');
    } catch (err) {
      setError('POST failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const btnStyle = (active) => ({
    padding:'10px 20px',
    background: active ? '#4F46E5' : 'white',
    color: active ? 'white' : '#4F46E5',
    border:'2px solid #4F46E5',
    borderRadius:'10px', fontWeight:'600',
    cursor:'pointer', fontFamily:'Poppins',
    fontSize:'0.9rem', transition:'all 0.3s'
  });

  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh', padding:'30px 40px' }}>

      {/* Header */}
      <div style={{ marginBottom:'30px' }}>
        <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'5px' }}>
          🔗 Axios API Integration Demo
        </h2>
        <p style={{ color:'#888', margin:0 }}>
          Live API calls using Axios — GET, POST with async/await & error handling.
        </p>
      </div>

      {/* API Info Cards */}
      <div className="row g-4" style={{ marginBottom:'30px' }}>
        {[
          { method:'GET', endpoint:'/posts?_limit=9', desc:'Fetch all products', color:'#16a34a', bg:'#dcfce7' },
          { method:'GET', endpoint:'/posts/1', desc:'Fetch single product', color:'#4F46E5', bg:'#EEF2FF' },
          { method:'POST', endpoint:'/posts', desc:'Create new product', color:'#F59E0B', bg:'#FEF3C7' },
          { method:'GET', endpoint:'/users', desc:'Fetch all users', color:'#06B6D4', bg:'#ECFEFF' },
        ].map((api, i) => (
          <div className="col-md-3" key={i}>
            <div style={{ background:'white', borderRadius:'14px', padding:'20px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
              <span style={{ background:api.bg, color:api.color, padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'700' }}>
                {api.method}
              </span>
              <p style={{ margin:'10px 0 4px', fontWeight:'600', color:'#1e1e2f', fontSize:'0.9rem' }}>
                {api.endpoint}
              </p>
              <p style={{ margin:0, color:'#888', fontSize:'0.82rem' }}>{api.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'25px' }}>
        <button onClick={fetchProducts} style={btnStyle(activeDemo === 'products')}>
          📦 GET All Products
        </button>
        <button onClick={fetchSingleProduct} style={btnStyle(activeDemo === 'single')}>
          🔍 GET Single Product
        </button>
        <button onClick={handlePostRequest} style={btnStyle(activeDemo === 'post')}>
          ➕ POST New Product
        </button>
        <button onClick={fetchUsers} style={btnStyle(activeDemo === 'users')}>
          👥 GET All Users
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign:'center', padding:'40px', background:'white', borderRadius:'16px', marginBottom:'25px' }}>
          <div style={{ fontSize:'2rem', marginBottom:'10px' }}>⏳</div>
          <p style={{ color:'#4F46E5', fontWeight:'600' }}>Loading API data...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ background:'#FEF2F2', border:'1px solid #fca5a5', borderRadius:'12px', padding:'15px 20px', marginBottom:'25px' }}>
          <p style={{ color:'#ef4444', margin:0, fontWeight:'600' }}>❌ {error}</p>
        </div>
      )}

      {/* GET Products Result */}
      {!loading && activeDemo === 'products' && products.length > 0 && (
        <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
            <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>
              ✅ GET Response — {products.length} Products Fetched
            </h5>
            <span style={{ background:'#dcfce7', color:'#16a34a', padding:'4px 12px', borderRadius:'20px', fontSize:'0.82rem', fontWeight:'600' }}>
              Status: 200 OK
            </span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'15px' }}>
            {products.map((p, i) => (
              <div key={i} style={{ background:'#f8fafc', borderRadius:'12px', padding:'15px', border:'1px solid #e2e8f0' }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'8px' }}>
                  <span style={{ background:'#EEF2FF', color:'#4F46E5', padding:'2px 8px', borderRadius:'10px', fontSize:'0.75rem', fontWeight:'600' }}>
                    ID: {p.id}
                  </span>
                  <span style={{ background:'#dcfce7', color:'#16a34a', padding:'2px 8px', borderRadius:'10px', fontSize:'0.75rem', fontWeight:'600' }}>
                    userID: {p.userId}
                  </span>
                </div>
                <p style={{ margin:0, fontWeight:'600', color:'#1e1e2f', fontSize:'0.85rem', marginBottom:'6px' }}>
                  {p.title.substring(0,40)}...
                </p>
                <p style={{ margin:0, color:'#888', fontSize:'0.78rem' }}>
                  {p.body.substring(0,60)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GET Single Product */}
      {!loading && singleProduct && activeDemo !== 'products' && activeDemo !== 'users' && activeDemo !== 'post' && (
        <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
            <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>✅ GET /posts/1 — Single Product</h5>
            <span style={{ background:'#dcfce7', color:'#16a34a', padding:'4px 12px', borderRadius:'20px', fontSize:'0.82rem', fontWeight:'600' }}>Status: 200 OK</span>
          </div>
          <div style={{ background:'#f8fafc', borderRadius:'12px', padding:'20px' }}>
            <p style={{ margin:'0 0 8px' }}><strong>ID:</strong> {singleProduct.id}</p>
            <p style={{ margin:'0 0 8px' }}><strong>User ID:</strong> {singleProduct.userId}</p>
            <p style={{ margin:'0 0 8px' }}><strong>Title:</strong> {singleProduct.title}</p>
            <p style={{ margin:0 }}><strong>Body:</strong> {singleProduct.body}</p>
          </div>
          <div style={{ background:'#1e1e2f', borderRadius:'10px', padding:'15px', marginTop:'15px' }}>
            <p style={{ color:'#06B6D4', margin:0, fontSize:'0.85rem', fontFamily:'monospace' }}>
              {JSON.stringify(singleProduct, null, 2)}
            </p>
          </div>
        </div>
      )}

      {/* POST Result */}
      {!loading && postResult && activeDemo === 'post' && (
        <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
            <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>✅ POST /posts — Product Created</h5>
            <span style={{ background:'#FEF3C7', color:'#F59E0B', padding:'4px 12px', borderRadius:'20px', fontSize:'0.82rem', fontWeight:'600' }}>Status: 201 Created</span>
          </div>
          <div style={{ background:'#f8fafc', borderRadius:'12px', padding:'20px', marginBottom:'15px' }}>
            <p style={{ margin:'0 0 8px' }}><strong>New ID:</strong> {postResult.id}</p>
            <p style={{ margin:'0 0 8px' }}><strong>Title:</strong> {postResult.title}</p>
            <p style={{ margin:0 }}><strong>Body:</strong> {postResult.body}</p>
          </div>
          <div style={{ background:'#1e1e2f', borderRadius:'10px', padding:'15px' }}>
            <p style={{ color:'#F59E0B', margin:0, fontSize:'0.85rem', fontFamily:'monospace' }}>
              {JSON.stringify(postResult, null, 2)}
            </p>
          </div>
        </div>
      )}

      {/* GET Users Result */}
      {!loading && activeDemo === 'users' && users.length > 0 && (
        <div style={{ background:'white', borderRadius:'16px', padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
            <h5 style={{ margin:0, color:'#1e1e2f', fontWeight:'700' }}>✅ GET /users — {users.length} Users Fetched</h5>
            <span style={{ background:'#ECFEFF', color:'#06B6D4', padding:'4px 12px', borderRadius:'20px', fontSize:'0.82rem', fontWeight:'600' }}>Status: 200 OK</span>
          </div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead>
                <tr style={{ borderBottom:'2px solid #f0f0f0' }}>
                  {['ID','Name','Email','Phone','Company'].map(h => (
                    <th key={h} style={{ padding:'12px 15px', textAlign:'left', color:'#888', fontSize:'0.82rem', fontWeight:'600', textTransform:'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} style={{ borderBottom:'1px solid #f8f8f8' }}
                    onMouseEnter={e => e.currentTarget.style.background='#fafafa'}
                    onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                    <td style={{ padding:'12px 15px', color:'#4F46E5', fontWeight:'600', fontSize:'0.9rem' }}>{user.id}</td>
                    <td style={{ padding:'12px 15px', color:'#1e1e2f', fontSize:'0.9rem' }}>{user.name}</td>
                    <td style={{ padding:'12px 15px', color:'#555', fontSize:'0.85rem' }}>{user.email}</td>
                    <td style={{ padding:'12px 15px', color:'#888', fontSize:'0.85rem' }}>{user.phone}</td>
                    <td style={{ padding:'12px 15px', color:'#888', fontSize:'0.85rem' }}>{user.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}

export default APIDemo;