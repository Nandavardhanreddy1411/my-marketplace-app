import { useState } from 'react';

const allProducts = [
  { id:1, title:'React Admin Dashboard', category:'Template', price:2099, rating:4.8, reviews:120, badge:'Bestseller', image:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', vendor:'David Smith', vendorType:'Agency', date:'2025-05-01' },
  { id:2, title:'Modern UI Kit', category:'UI Kit', price:1499, rating:4.5, reviews:85, badge:'New', image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', vendor:'Sophia Lee', vendorType:'Individual', date:'2025-04-15' },
  { id:3, title:'Ecommerce Source Code', category:'Source Code', price:4099, rating:4.9, reviews:200, badge:'Hot', image:'https://images.unsplash.com/photo-1518770660439-4636190af475', vendor:'John Miller', vendorType:'Agency', date:'2025-03-10' },
  { id:4, title:'Landing Page Template', category:'Template', price:1299, rating:4.3, reviews:60, badge:'', image:'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8', vendor:'Alex Brown', vendorType:'Individual', date:'2025-04-20' },
  { id:5, title:'Mobile App UI Kit', category:'UI Kit', price:2999, rating:4.7, reviews:150, badge:'Popular', image:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c', vendor:'David Smith', vendorType:'Agency', date:'2025-05-05' },
  { id:6, title:'Node.js Backend Starter', category:'Source Code', price:4599, rating:4.6, reviews:90, badge:'', image:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31', vendor:'John Miller', vendorType:'Individual', date:'2025-02-28' },
  { id:7, title:'Figma Design System', category:'Graphics', price:1899, rating:4.4, reviews:75, badge:'New', image:'https://images.unsplash.com/photo-1561070791-2526d30994b5', vendor:'Sophia Lee', vendorType:'Individual', date:'2025-05-10' },
  { id:8, title:'React Native Starter', category:'Source Code', price:5499, rating:4.9, reviews:180, badge:'Bestseller', image:'https://images.unsplash.com/photo-1526498460520-4c246339dccb', vendor:'David Smith', vendorType:'Agency', date:'2025-04-01' },
  { id:9, title:'SEO Ebook Guide', category:'Ebook', price:999, rating:4.2, reviews:45, badge:'', image:'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c', vendor:'Alex Brown', vendorType:'Individual', date:'2025-03-15' },
];

const categories = ['All', 'Template', 'UI Kit', 'Source Code', 'Graphics', 'Ebook'];

// Product Preview Modal
function PreviewModal({ product, onClose }) {
  return (
    <div style={{
      position:'fixed', top:0, left:0, width:'100%', height:'100%',
      background:'rgba(0,0,0,0.7)', zIndex:9999,
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'20px'
    }} onClick={onClose}>
      <div style={{
        background:'white', borderRadius:'20px',
        padding:'30px', maxWidth:'700px', width:'100%',
        maxHeight:'90vh', overflowY:'auto',
        position:'relative'
      }} onClick={e => e.stopPropagation()}>

        {/* Close Button */}
        <button onClick={onClose} style={{
          position:'absolute', top:'15px', right:'15px',
          background:'#FEF2F2', color:'#ef4444',
          border:'none', width:'35px', height:'35px',
          borderRadius:'50%', fontSize:'1.1rem',
          cursor:'pointer', fontWeight:'700'
        }}>✕</button>

        {/* Preview Header */}
        <div style={{ marginBottom:'20px' }}>
          <span style={{
            background:'#EEF2FF', color:'#4F46E5',
            padding:'4px 12px', borderRadius:'20px',
            fontSize:'0.8rem', fontWeight:'500'
          }}>{product.category}</span>
          <h3 style={{ color:'#1e1e2f', fontWeight:'700', margin:'10px 0 5px' }}>
            {product.title}
          </h3>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap' }}>
            <span style={{ color:'#F59E0B' }}>⭐ {product.rating}</span>
            <span style={{ color:'#888', fontSize:'0.85rem' }}>({product.reviews} reviews)</span>
            <span style={{ color:'#888', fontSize:'0.85rem' }}>By {product.vendor}</span>
          </div>
        </div>

        {/* Preview Image */}
        <img src={product.image} alt={product.title}
          style={{ width:'100%', height:'280px', objectFit:'cover', borderRadius:'12px', marginBottom:'20px' }} />

        {/* Preview Details */}
        <div style={{ display:'flex', gap:'15px', marginBottom:'20px', flexWrap:'wrap' }}>
          <div style={{
            flex:1, background:'#F8FAFC', borderRadius:'12px', padding:'15px', minWidth:'150px'
          }}>
            <p style={{ margin:0, color:'#888', fontSize:'0.8rem' }}>Sale Price</p>
            <h3 style={{ margin:0, color:'#4F46E5', fontWeight:'700' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </h3>
          </div>
          <div style={{
            flex:1, background:'#F8FAFC', borderRadius:'12px', padding:'15px', minWidth:'150px'
          }}>
            <p style={{ margin:0, color:'#888', fontSize:'0.8rem' }}>Rating</p>
            <h3 style={{ margin:0, color:'#F59E0B', fontWeight:'700' }}>⭐ {product.rating}/5</h3>
          </div>
          <div style={{
            flex:1, background:'#F8FAFC', borderRadius:'12px', padding:'15px', minWidth:'150px'
          }}>
            <p style={{ margin:0, color:'#888', fontSize:'0.8rem' }}>Vendor</p>
            <h3 style={{ margin:0, color:'#1e1e2f', fontWeight:'700', fontSize:'0.95rem' }}>{product.vendor}</h3>
          </div>
        </div>

        {/* Description */}
        <p style={{ color:'#555', lineHeight:'1.7', marginBottom:'20px', fontSize:'0.9rem' }}>
          A premium quality {product.category.toLowerCase()} built with modern technologies.
          Perfect for developers and designers looking for production-ready solutions.
          Includes full documentation, source files, and lifetime updates.
        </p>

        {/* Action Buttons */}
        <div style={{ display:'flex', gap:'12px' }}>
          <button
            onClick={() => window.location.href=`#/product-details/${product.id}`}
            style={{
              flex:1, padding:'13px', background:'#4F46E5',
              color:'white', border:'none', borderRadius:'10px',
              fontWeight:'700', cursor:'pointer', fontFamily:'Poppins', fontSize:'0.95rem'
            }}>
            🛒 Buy Now — ₹{product.price.toLocaleString('en-IN')}
          </button>
          <button
            onClick={() => window.location.href=`#/product-details/${product.id}`}
            style={{
              padding:'13px 20px', background:'transparent',
              color:'#4F46E5', border:'2px solid #4F46E5',
              borderRadius:'10px', fontWeight:'600',
              cursor:'pointer', fontFamily:'Poppins', fontSize:'0.95rem'
            }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Products() {

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(6000);
  const [minRating, setMinRating] = useState(0);
  const [vendorType, setVendorType] = useState('All');
  const [previewProduct, setPreviewProduct] = useState(null);

  let filtered = allProducts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchPrice = p.price <= maxPrice;
    const matchRating = p.rating >= minRating;
    const matchVendor = vendorType === 'All' || p.vendorType === vendorType;
    return matchSearch && matchCategory && matchPrice && matchRating && matchVendor;
  });

  if (sortBy === 'price-low') filtered = [...filtered].sort((a,b) => a.price - b.price);
  if (sortBy === 'price-high') filtered = [...filtered].sort((a,b) => b.price - a.price);
  if (sortBy === 'rating') filtered = [...filtered].sort((a,b) => b.rating - a.rating);
  if (sortBy === 'popular') filtered = [...filtered].sort((a,b) => b.reviews - a.reviews);
  if (sortBy === 'latest') filtered = [...filtered].sort((a,b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px'}}>

      {/* Preview Modal */}
      {previewProduct && (
        <PreviewModal product={previewProduct} onClose={() => setPreviewProduct(null)} />
      )}

      {/* PAGE HEADER */}
      <div style={{
        background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
        padding:'60px 0 40px', textAlign:'center', color:'white'
      }}>
        <h1 style={{fontSize:'2.5rem', fontWeight:'700', marginBottom:'10px'}}>
          🛍️ Product Marketplace
        </h1>
        <p style={{fontSize:'1.1rem', opacity:0.9}}>
          Browse {allProducts.length}+ premium digital products
        </p>

        {/* Search Bar */}
        <div style={{maxWidth:'500px', margin:'25px auto 0', display:'flex', gap:'10px', padding:'0 20px'}}>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex:1, padding:'14px 20px',
              borderRadius:'25px', border:'none',
              fontSize:'1rem', fontFamily:'Poppins',
              outline:'none', color:'#1e1e2f'
            }}
          />
          <button style={{
            background:'#F59E0B', color:'white',
            border:'none', padding:'14px 25px',
            borderRadius:'25px', fontWeight:'600',
            cursor:'pointer', fontFamily:'Poppins'
          }}>Search</button>
        </div>
      </div>

      <div className="container-fluid px-5" style={{marginTop:'40px'}}>
        <div className="row">

          {/* SIDEBAR FILTERS */}
          <div className="col-md-3">
            <div style={{
              background:'white', borderRadius:'16px',
              padding:'25px', boxShadow:'0 4px 15px rgba(0,0,0,0.07)',
              position:'sticky', top:'80px'
            }}>
              <h5 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'20px'}}>🔧 Filters</h5>

              {/* Category Filter */}
              <div style={{marginBottom:'25px'}}>
                <h6 style={{color:'#4F46E5', fontWeight:'600', marginBottom:'12px'}}>Category</h6>
                {categories.map(cat => (
                  <div key={cat} style={{marginBottom:'8px'}}>
                    <label style={{display:'flex', alignItems:'center', gap:'8px', cursor:'pointer', fontSize:'0.9rem', color:'#444'}}>
                      <input type="radio" name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        style={{accentColor:'#4F46E5'}} />
                      {cat}
                    </label>
                  </div>
                ))}
              </div>

              {/* Price Filter */}
              <div style={{marginBottom:'25px'}}>
                <h6 style={{color:'#4F46E5', fontWeight:'600', marginBottom:'12px'}}>
                  Max Price: <span style={{color:'#F59E0B'}}>₹{maxPrice.toLocaleString('en-IN')}</span>
                </h6>
                <input type="range" min="500" max="6000" value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{width:'100%', accentColor:'#4F46E5'}} />
                <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.8rem', color:'#888'}}>
                  <span>₹500</span><span>₹6,000</span>
                </div>
              </div>

              {/* Rating Filter ✅ NEW */}
              <div style={{marginBottom:'25px'}}>
                <h6 style={{color:'#4F46E5', fontWeight:'600', marginBottom:'12px'}}>
                  Min Rating
                </h6>
                {[0, 3, 3.5, 4, 4.5].map(r => (
                  <div key={r} style={{marginBottom:'8px'}}>
                    <label style={{display:'flex', alignItems:'center', gap:'8px', cursor:'pointer', fontSize:'0.9rem', color:'#444'}}>
                      <input type="radio" name="rating"
                        checked={minRating === r}
                        onChange={() => setMinRating(r)}
                        style={{accentColor:'#4F46E5'}} />
                      {r === 0 ? 'All Ratings' : `⭐ ${r}+ Stars`}
                    </label>
                  </div>
                ))}
              </div>

              {/* Vendor Type Filter ✅ NEW */}
              <div style={{marginBottom:'25px'}}>
                <h6 style={{color:'#4F46E5', fontWeight:'600', marginBottom:'12px'}}>
                  Vendor Type
                </h6>
                {['All', 'Individual', 'Agency'].map(type => (
                  <div key={type} style={{marginBottom:'8px'}}>
                    <label style={{display:'flex', alignItems:'center', gap:'8px', cursor:'pointer', fontSize:'0.9rem', color:'#444'}}>
                      <input type="radio" name="vendorType"
                        checked={vendorType === type}
                        onChange={() => setVendorType(type)}
                        style={{accentColor:'#4F46E5'}} />
                      {type === 'All' ? '🏪 All Vendors' : type === 'Individual' ? '👤 Individual' : '🏢 Agency'}
                    </label>
                  </div>
                ))}
              </div>

              {/* Sort Filter */}
              <div style={{marginBottom:'25px'}}>
                <h6 style={{color:'#4F46E5', fontWeight:'600', marginBottom:'12px'}}>Sort By</h6>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    width:'100%', padding:'10px',
                    border:'1.5px solid #e2e8f0', borderRadius:'10px',
                    fontFamily:'Poppins', fontSize:'0.9rem',
                    outline:'none', color:'#1e1e2f', background:'#f8fafc'
                  }}>
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="popular">Most Popular</option>
                  <option value="latest">Latest Products</option>
                </select>
              </div>

              {/* Reset */}
              <button onClick={() => {
                setSearch(''); setSelectedCategory('All');
                setSortBy('default'); setMaxPrice(6000);
                setMinRating(0); setVendorType('All');
              }}
                style={{
                  width:'100%', padding:'10px', background:'#ef4444', color:'white',
                  border:'none', borderRadius:'10px', fontWeight:'600',
                  cursor:'pointer', fontFamily:'Poppins', fontSize:'0.9rem'
                }}>
                🔄 Reset Filters
              </button>
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <div className="col-md-9">

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', flexWrap:'wrap', gap:'10px'}}>
              <p style={{color:'#666', margin:0}}>
                Showing <strong style={{color:'#4F46E5'}}>{filtered.length}</strong> products
              </p>
              {search && (
                <p style={{color:'#666', margin:0}}>
                  Results for: <strong style={{color:'#4F46E5'}}>"{search}"</strong>
                </p>
              )}
            </div>

            {filtered.length === 0 && (
              <div style={{textAlign:'center', padding:'80px 20px', background:'white', borderRadius:'16px'}}>
                <p style={{fontSize:'3rem'}}>😕</p>
                <h4 style={{color:'#1e1e2f', fontWeight:'700'}}>No Products Found</h4>
                <p style={{color:'#666'}}>Try adjusting your search or filters</p>
              </div>
            )}

            <div className="row g-4">
              {filtered.map(product => (
                <div className="col-md-4" key={product.id}>
                  <div style={{
                    background:'white', borderRadius:'16px', overflow:'hidden',
                    boxShadow:'0 4px 15px rgba(0,0,0,0.07)',
                    transition:'all 0.3s ease', height:'100%', cursor:'pointer'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-8px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>

                    {/* Product Image */}
                    <div style={{position:'relative'}}>
                      <img src={product.image} alt={product.title}
                        style={{width:'100%', height:'180px', objectFit:'cover'}} />
                      {product.badge && (
                        <span style={{
                          position:'absolute', top:'10px', left:'10px',
                          background: product.badge === 'Bestseller' ? '#F59E0B' :
                                      product.badge === 'Hot' ? '#ef4444' :
                                      product.badge === 'New' ? '#22c55e' : '#4F46E5',
                          color:'white', padding:'4px 10px',
                          borderRadius:'20px', fontSize:'0.75rem', fontWeight:'600'
                        }}>{product.badge}</span>
                      )}
                      {/* Preview Button on Hover ✅ NEW */}
                      <div style={{
                        position:'absolute', inset:0,
                        background:'rgba(79,70,229,0.7)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        opacity:0, transition:'opacity 0.3s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity='1'}
                      onMouseLeave={e => e.currentTarget.style.opacity='0'}
                      onClick={() => setPreviewProduct(product)}>
                        <button style={{
                          background:'white', color:'#4F46E5',
                          border:'none', padding:'10px 22px',
                          borderRadius:'25px', fontWeight:'700',
                          cursor:'pointer', fontSize:'0.9rem',
                          fontFamily:'Poppins'
                        }}>👁️ Quick Preview</button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div style={{padding:'20px'}}>
                      {/* Category + Vendor Type ✅ NEW */}
                      <div style={{display:'flex', gap:'6px', marginBottom:'8px', flexWrap:'wrap'}}>
                        <span style={{
                          background:'#EEF2FF', color:'#4F46E5',
                          padding:'3px 10px', borderRadius:'20px',
                          fontSize:'0.72rem', fontWeight:'500'
                        }}>{product.category}</span>
                        <span style={{
                          background: product.vendorType === 'Agency' ? '#FEF3C7' : '#f0fdf4',
                          color: product.vendorType === 'Agency' ? '#F59E0B' : '#16a34a',
                          padding:'3px 10px', borderRadius:'20px',
                          fontSize:'0.72rem', fontWeight:'500'
                        }}>
                          {product.vendorType === 'Agency' ? '🏢' : '👤'} {product.vendorType}
                        </span>
                      </div>

                      <h5 style={{color:'#1e1e2f', fontWeight:'700', margin:'0 0 5px', fontSize:'0.95rem'}}>
                        {product.title}
                      </h5>

                      {/* Vendor Name ✅ NEW */}
                      <p style={{color:'#888', fontSize:'0.8rem', margin:'0 0 8px'}}>
                        By {product.vendor}
                      </p>

                      <div style={{display:'flex', alignItems:'center', gap:'5px', marginBottom:'12px'}}>
                        <span style={{color:'#F59E0B', fontSize:'0.85rem'}}>⭐</span>
                        <span style={{fontWeight:'600', fontSize:'0.85rem', color:'#1e1e2f'}}>{product.rating}</span>
                        <span style={{color:'#888', fontSize:'0.8rem'}}>({product.reviews} reviews)</span>
                      </div>

                      {/* Price & Buttons */}
                      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
                        <span style={{color:'#4F46E5', fontWeight:'700', fontSize:'1.1rem'}}>
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <div style={{display:'flex', gap:'6px'}}>
                          {/* Preview Button ✅ NEW */}
                          <button
                            onClick={() => setPreviewProduct(product)}
                            style={{
                              background:'#F8FAFC', color:'#4F46E5',
                              border:'1.5px solid #e2e8f0', padding:'7px 10px',
                              borderRadius:'20px', fontWeight:'600',
                              cursor:'pointer', fontSize:'0.75rem',
                              fontFamily:'Poppins'
                            }}>👁️</button>
                          <button
                            onClick={() => window.location.href=`#/product-details/${product.id}`}
                            style={{
                              background:'transparent', color:'#4F46E5',
                              border:'1.5px solid #4F46E5', padding:'7px 10px',
                              borderRadius:'20px', fontWeight:'600',
                              cursor:'pointer', fontSize:'0.75rem',
                              fontFamily:'Poppins'
                            }}>Details</button>
                          <button
                            onClick={() => window.location.href=`#/product-details/${product.id}`}
                            style={{
                              background:'#4F46E5', color:'white',
                              border:'none', padding:'7px 12px',
                              borderRadius:'20px', fontWeight:'600',
                              cursor:'pointer', fontSize:'0.75rem',
                              fontFamily:'Poppins'
                            }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
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

export default Products;