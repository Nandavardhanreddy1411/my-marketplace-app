import { useState } from 'react';

const product = {
  id: 1,
  title: 'React Admin Dashboard',
  category: 'Template',
  price: 2099,
  originalPrice: 4099,
  rating: 4.8,
  reviews: 120,
  sales: 850,
  badge: 'Bestseller',
  vendor: 'David Smith',
  vendorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  description: `A fully responsive React Admin Dashboard template built with React JS, Bootstrap 5, and modern UI components. Perfect for SaaS applications, analytics platforms, and admin panels.`,
  features: [
    '✅ Fully Responsive Design',
    '✅ React JS + Bootstrap 5',
    '✅ 20+ Reusable Components',
    '✅ Charts & Analytics UI',
    '✅ Dark & Light Mode',
    '✅ Clean Code & Documentation',
    '✅ Lifetime Updates',
    '✅ Free Support'
  ],
  tags: ['React', 'Dashboard', 'Admin', 'Bootstrap', 'Template'],
  images: [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    'https://images.unsplash.com/photo-1518770660439-4636190af475',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
  ],
  reviews_list: [
    { name:'John Miller', avatar:'https://randomuser.me/api/portraits/men/12.jpg', rating:5, comment:'Excellent template! Saved me weeks of work.', date:'May 2025' },
    { name:'Sophia Lee', avatar:'https://randomuser.me/api/portraits/women/44.jpg', rating:5, comment:'Very clean code and easy to customize.', date:'Apr 2025' },
    { name:'Alex Brown', avatar:'https://randomuser.me/api/portraits/men/22.jpg', rating:4, comment:'Great product. Documentation could be better.', date:'Mar 2025' },
  ]
};

function ProductDetails() {

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating) => {
    return '⭐'.repeat(Math.floor(rating));
  };

  return (
    <div style={{background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px'}}>

      {/* BREADCRUMB */}
      <div style={{background:'white', padding:'15px 0', borderBottom:'1px solid #e2e8f0'}}>
        <div className="container-fluid px-5">
          <p style={{margin:0, color:'#888', fontSize:'0.9rem'}}>
            <a href="/" style={{color:'#4F46E5', textDecoration:'none'}}>Home</a>
            {' › '}
            <a href="/products" style={{color:'#4F46E5', textDecoration:'none'}}>Products</a>
            {' › '}
            <span style={{color:'#1e1e2f'}}>{product.title}</span>
          </p>
        </div>
      </div>

      <div className="container-fluid px-5" style={{marginTop:'40px'}}>
        <div className="row g-5">

          {/* LEFT — IMAGE GALLERY */}
          <div className="col-md-6">

            {/* Main Image */}
            <div style={{
              borderRadius:'16px', overflow:'hidden',
              boxShadow:'0 8px 30px rgba(0,0,0,0.1)',
              marginBottom:'15px', position:'relative'
            }}>
              <img
                src={product.images[activeImage]}
                alt={product.title}
                style={{width:'100%', height:'380px', objectFit:'cover'}}
              />
              {product.badge && (
                <span style={{
                  position:'absolute', top:'15px', left:'15px',
                  background:'#F59E0B', color:'white',
                  padding:'6px 14px', borderRadius:'20px',
                  fontSize:'0.85rem', fontWeight:'600'
                }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setActiveImage(index)}
                  style={{
                    width:'80px', height:'60px', objectFit:'cover',
                    borderRadius:'8px', cursor:'pointer',
                    border: activeImage === index ? '3px solid #4F46E5' : '3px solid transparent',
                    opacity: activeImage === index ? 1 : 0.7,
                    transition:'all 0.2s ease'
                  }}
                />
              ))}
            </div>

          </div>

          {/* RIGHT — PRODUCT INFO */}
          <div className="col-md-6">

            {/* Category & Badge */}
            <div style={{display:'flex', gap:'10px', marginBottom:'15px', flexWrap:'wrap'}}>
              <span style={{
                background:'#EEF2FF', color:'#4F46E5',
                padding:'4px 12px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'500'
              }}>
                {product.category}
              </span>
              <span style={{
                background:'#FEF3C7', color:'#F59E0B',
                padding:'4px 12px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'600'
              }}>
                🔥 {product.badge}
              </span>
            </div>

            {/* Title */}
            <h1 style={{fontSize:'1.8rem', fontWeight:'700', color:'#1e1e2f', marginBottom:'15px'}}>
              {product.title}
            </h1>

            {/* Rating & Sales */}
            <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'20px', flexWrap:'wrap'}}>
              <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <span style={{color:'#F59E0B'}}>{renderStars(product.rating)}</span>
                <strong style={{color:'#1e1e2f'}}>{product.rating}</strong>
                <span style={{color:'#888', fontSize:'0.9rem'}}>({product.reviews} reviews)</span>
              </div>
              <span style={{color:'#888', fontSize:'0.9rem'}}>📦 {product.sales}+ sales</span>
            </div>

            {/* Price in Rupees */}
            <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'25px'}}>
              <span style={{fontSize:'2.5rem', fontWeight:'700', color:'#4F46E5'}}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span style={{fontSize:'1.2rem', color:'#aaa', textDecoration:'line-through'}}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{
                background:'#dcfce7', color:'#16a34a',
                padding:'4px 10px', borderRadius:'20px',
                fontSize:'0.85rem', fontWeight:'600'
              }}>
                {Math.round((1 - product.price/product.originalPrice)*100)}% OFF
              </span>
            </div>

            {/* Vendor */}
            <div style={{
              display:'flex', alignItems:'center', gap:'12px',
              padding:'15px', background:'#f8fafc',
              borderRadius:'12px', marginBottom:'25px'
            }}>
              <img src={product.vendorAvatar} alt={product.vendor}
                style={{width:'45px', height:'45px', borderRadius:'50%', objectFit:'cover'}} />
              <div>
                <p style={{margin:0, fontSize:'0.8rem', color:'#888'}}>Sold by</p>
                <p style={{margin:0, fontWeight:'600', color:'#4F46E5'}}>{product.vendor}</p>
              </div>
              <button style={{
                marginLeft:'auto', background:'transparent',
                color:'#4F46E5', border:'1.5px solid #4F46E5',
                padding:'6px 14px', borderRadius:'20px',
                fontSize:'0.8rem', fontWeight:'600', cursor:'pointer'
              }}>
                View Store
              </button>
            </div>

            {/* Quantity */}
            <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'25px'}}>
              <span style={{fontWeight:'600', color:'#333'}}>Quantity:</span>
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q-1))}
                  style={{
                    width:'35px', height:'35px', borderRadius:'50%',
                    border:'1.5px solid #4F46E5', background:'#4F46E5',
                    fontSize:'1.2rem', cursor:'pointer', fontWeight:'700',
                    color:'white', display:'flex', alignItems:'center',
                    justifyContent:'center', lineHeight:'1'
                  }}>−</button>
                <span style={{fontWeight:'700', fontSize:'1.1rem', minWidth:'25px', textAlign:'center'}}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q+1)}
                  style={{
                    width:'35px', height:'35px', borderRadius:'50%',
                    border:'1.5px solid #4F46E5', background:'#4F46E5',
                    fontSize:'1.2rem', cursor:'pointer', fontWeight:'700',
                    color:'white', display:'flex', alignItems:'center',
                    justifyContent:'center', lineHeight:'1'
                  }}>+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{display:'flex', gap:'15px', marginBottom:'25px'}}>
              <button style={{
                flex:1, padding:'15px', background:'#4F46E5', color:'white',
                border:'none', borderRadius:'12px', fontWeight:'700',
                fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins'
              }}>🛒 Add to Cart</button>
              <button style={{
                flex:1, padding:'15px', background:'#F59E0B', color:'white',
                border:'none', borderRadius:'12px', fontWeight:'700',
                fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins'
              }}>⚡ Buy Now</button>
              <button style={{
                padding:'15px 18px', background:'white', color:'#ef4444',
                border:'1.5px solid #ef4444', borderRadius:'12px',
                fontSize:'1.2rem', cursor:'pointer'
              }}>♥</button>
            </div>

            {/* Tags */}
            <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
              {product.tags.map(tag => (
                <span key={tag} style={{
                  background:'#f1f5f9', color:'#64748b',
                  padding:'4px 12px', borderRadius:'20px',
                  fontSize:'0.8rem', fontWeight:'500'
                }}>#{tag}</span>
              ))}
            </div>

          </div>
        </div>

        {/* TABS SECTION */}
        <div style={{marginTop:'50px'}}>

          <div style={{display:'flex', gap:'5px', borderBottom:'2px solid #e2e8f0', marginBottom:'30px'}}>
            {['description', 'features', 'reviews'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  padding:'12px 25px', background:'transparent', border:'none',
                  borderBottom: activeTab === tab ? '3px solid #4F46E5' : '3px solid transparent',
                  color: activeTab === tab ? '#4F46E5' : '#888',
                  fontWeight: activeTab === tab ? '700' : '500',
                  fontSize:'0.95rem', cursor:'pointer',
                  fontFamily:'Poppins', textTransform:'capitalize', marginBottom:'-2px'
                }}>
                {tab === 'description' ? '📄 Description' :
                 tab === 'features' ? '⚙️ Features' : '⭐ Reviews'}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div style={{background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.05)'}}>
              <h4 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'15px'}}>About this Product</h4>
              <p style={{color:'#555', lineHeight:'1.8', fontSize:'1rem'}}>{product.description}</p>
            </div>
          )}

          {activeTab === 'features' && (
            <div style={{background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.05)'}}>
              <h4 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'20px'}}>What's Included</h4>
              <div className="row">
                {product.features.map((f, i) => (
                  <div className="col-md-6" key={i}>
                    <p style={{padding:'10px 0', borderBottom:'1px solid #f0f0f0', color:'#444', margin:0}}>{f}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div style={{background:'white', borderRadius:'16px', padding:'30px', boxShadow:'0 4px 15px rgba(0,0,0,0.05)'}}>
              <h4 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'20px'}}>Customer Reviews</h4>
              {product.reviews_list.map((review, i) => (
                <div key={i} style={{padding:'20px 0', borderBottom: i < product.reviews_list.length - 1 ? '1px solid #f0f0f0' : 'none'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'10px'}}>
                    <img src={review.avatar} alt={review.name}
                      style={{width:'45px', height:'45px', borderRadius:'50%', objectFit:'cover'}} />
                    <div>
                      <p style={{margin:0, fontWeight:'600', color:'#1e1e2f'}}>{review.name}</p>
                      <p style={{margin:0, fontSize:'0.8rem', color:'#888'}}>{review.date}</p>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                      <span style={{color:'#F59E0B'}}>{renderStars(review.rating)}</span>
                    </div>
                  </div>
                  <p style={{color:'#555', margin:0, paddingLeft:'57px'}}>{review.comment}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
// Add this INSIDE ProductDetails function, after the TABS section closing div:

{/* RELATED PRODUCTS ✅ NEW */}
<div style={{marginTop:'50px'}}>
  <h4 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'25px'}}>
    🔗 Related Products
  </h4>
  <div className="row g-4">
    {[
      { id:2, title:'Modern UI Kit', category:'UI Kit', price:1499, rating:4.5, reviews:85, image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', vendor:'Sophia Lee' },
      { id:5, title:'Mobile App UI Kit', category:'UI Kit', price:2999, rating:4.7, reviews:150, image:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c', vendor:'David Smith' },
      { id:7, title:'Figma Design System', category:'Graphics', price:1899, rating:4.4, reviews:75, image:'https://images.unsplash.com/photo-1561070791-2526d30994b5', vendor:'Sophia Lee' },
    ].map((rel, i) => (
      <div className="col-md-4" key={i}>
        <div style={{
          background:'white', borderRadius:'16px', overflow:'hidden',
          boxShadow:'0 4px 15px rgba(0,0,0,0.07)',
          transition:'all 0.3s ease', cursor:'pointer'
        }}
        onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
        onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
        onClick={() => window.location.href=`/product-details/${rel.id}`}>
          <img src={rel.image} alt={rel.title}
            style={{width:'100%', height:'160px', objectFit:'cover'}} />
          <div style={{padding:'18px'}}>
            <span style={{
              background:'#EEF2FF', color:'#4F46E5',
              padding:'3px 10px', borderRadius:'20px',
              fontSize:'0.75rem', fontWeight:'500'
            }}>{rel.category}</span>
            <h6 style={{color:'#1e1e2f', fontWeight:'700', margin:'10px 0 4px', fontSize:'0.95rem'}}>
              {rel.title}
            </h6>
            <p style={{color:'#888', fontSize:'0.8rem', margin:'0 0 8px'}}>By {rel.vendor}</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                <span style={{color:'#F59E0B', fontSize:'0.8rem'}}>⭐ {rel.rating}</span>
                <span style={{color:'#aaa', fontSize:'0.75rem'}}>({rel.reviews})</span>
              </div>
              <span style={{color:'#4F46E5', fontWeight:'700', fontSize:'1rem'}}>
                ₹{rel.price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

export default ProductDetails;