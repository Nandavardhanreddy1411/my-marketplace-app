import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart, useWishlist } from '../context/CartContext';
import { toast } from 'react-toastify';

const allProducts = [
  { id:1, title:'React Admin Dashboard', category:'Template', price:2099, originalPrice:4099, rating:4.8, reviews:120, sales:850, badge:'Bestseller', vendor:'David Smith', vendorAvatar:'https://randomuser.me/api/portraits/men/32.jpg', description:'A fully responsive React Admin Dashboard template built with React JS, Bootstrap 5, and modern UI components. Perfect for SaaS applications, analytics platforms, and admin panels.', features:['✅ Fully Responsive Design','✅ React JS + Bootstrap 5','✅ 20+ Reusable Components','✅ Charts & Analytics UI','✅ Dark & Light Mode','✅ Clean Code & Documentation','✅ Lifetime Updates','✅ Free Support'], tags:['React','Dashboard','Admin','Bootstrap','Template'], images:['https://images.unsplash.com/photo-1461749280684-dccba630e2f6','https://images.unsplash.com/photo-1516321318423-f06f85e504b3','https://images.unsplash.com/photo-1518770660439-4636190af475','https://images.unsplash.com/photo-1507238691740-187a5b1d37b8'], reviews_list:[{name:'John Miller',avatar:'https://randomuser.me/api/portraits/men/12.jpg',rating:5,comment:'Excellent template! Saved me weeks of work.',date:'May 2025'},{name:'Sophia Lee',avatar:'https://randomuser.me/api/portraits/women/44.jpg',rating:5,comment:'Very clean code and easy to customize.',date:'Apr 2025'},{name:'Alex Brown',avatar:'https://randomuser.me/api/portraits/men/22.jpg',rating:4,comment:'Great product. Documentation could be better.',date:'Mar 2025'}] },
  { id:2, title:'Modern UI Kit', category:'UI Kit', price:1499, originalPrice:2999, rating:4.5, reviews:85, sales:420, badge:'New', vendor:'Sophia Lee', vendorAvatar:'https://randomuser.me/api/portraits/women/44.jpg', description:'A modern and clean UI Kit with 50+ components built for React. Includes buttons, forms, modals, cards, and much more.', features:['✅ 50+ UI Components','✅ Figma Source File','✅ React Ready','✅ Dark Mode Support','✅ Mobile First Design','✅ Easy Customization','✅ Regular Updates','✅ Community Support'], tags:['UI Kit','React','Components','Design','Figma'], images:['https://images.unsplash.com/photo-1516321318423-f06f85e504b3','https://images.unsplash.com/photo-1461749280684-dccba630e2f6','https://images.unsplash.com/photo-1507238691740-187a5b1d37b8','https://images.unsplash.com/photo-1518770660439-4636190af475'], reviews_list:[{name:'David Smith',avatar:'https://randomuser.me/api/portraits/men/32.jpg',rating:5,comment:'Beautiful components, very easy to use!',date:'Apr 2025'},{name:'Alex Brown',avatar:'https://randomuser.me/api/portraits/men/22.jpg',rating:4,comment:'Good quality. Worth the price.',date:'Mar 2025'}] },
  { id:3, title:'Ecommerce Source Code', category:'Source Code', price:4099, originalPrice:7999, rating:4.9, reviews:200, sales:1200, badge:'Hot', vendor:'John Miller', vendorAvatar:'https://randomuser.me/api/portraits/men/12.jpg', description:'Full ecommerce frontend source code built with React JS. Includes product listing, cart, checkout, and order tracking UI.', features:['✅ Full Cart System','✅ Product Listing','✅ Checkout UI','✅ Order Tracking','✅ Responsive Design','✅ Redux Integration','✅ API Ready','✅ Documentation'], tags:['Ecommerce','React','Cart','Checkout','Source Code'], images:['https://images.unsplash.com/photo-1518770660439-4636190af475','https://images.unsplash.com/photo-1461749280684-dccba630e2f6','https://images.unsplash.com/photo-1516321318423-f06f85e504b3','https://images.unsplash.com/photo-1526498460520-4c246339dccb'], reviews_list:[{name:'Sophia Lee',avatar:'https://randomuser.me/api/portraits/women/44.jpg',rating:5,comment:'Best ecommerce code I have bought!',date:'May 2025'},{name:'David Smith',avatar:'https://randomuser.me/api/portraits/men/32.jpg',rating:5,comment:'Very clean and well documented.',date:'Apr 2025'}] },
  { id:4, title:'Landing Page Template', category:'Template', price:1299, originalPrice:2499, rating:4.3, reviews:60, sales:310, badge:'', vendor:'Alex Brown', vendorAvatar:'https://randomuser.me/api/portraits/men/22.jpg', description:'A stunning SaaS landing page template built with React and Bootstrap. Includes hero, features, pricing, testimonials, and contact sections.', features:['✅ Hero Section','✅ Features Section','✅ Pricing Section','✅ Testimonials','✅ Contact Form','✅ Bootstrap 5','✅ Fully Responsive','✅ Easy Setup'], tags:['Landing Page','Template','SaaS','Bootstrap','React'], images:['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8','https://images.unsplash.com/photo-1516321318423-f06f85e504b3','https://images.unsplash.com/photo-1461749280684-dccba630e2f6','https://images.unsplash.com/photo-1518770660439-4636190af475'], reviews_list:[{name:'John Miller',avatar:'https://randomuser.me/api/portraits/men/12.jpg',rating:4,comment:'Clean design, easy to customize.',date:'Mar 2025'}] },
  { id:5, title:'Mobile App UI Kit', category:'UI Kit', price:2999, originalPrice:5499, rating:4.7, reviews:150, sales:680, badge:'Popular', vendor:'David Smith', vendorAvatar:'https://randomuser.me/api/portraits/men/32.jpg', description:'A complete mobile app UI kit with 80+ screens for React Native. Covers onboarding, dashboard, profile, settings, and more.', features:['✅ 80+ Screens','✅ React Native Ready','✅ Figma File Included','✅ Light & Dark Mode','✅ iOS & Android','✅ Easy Navigation','✅ Regular Updates','✅ Priority Support'], tags:['Mobile','React Native','UI Kit','iOS','Android'], images:['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c','https://images.unsplash.com/photo-1526498460520-4c246339dccb','https://images.unsplash.com/photo-1461749280684-dccba630e2f6','https://images.unsplash.com/photo-1516321318423-f06f85e504b3'], reviews_list:[{name:'Sophia Lee',avatar:'https://randomuser.me/api/portraits/women/44.jpg',rating:5,comment:'Amazing screens, very professional!',date:'May 2025'},{name:'Alex Brown',avatar:'https://randomuser.me/api/portraits/men/22.jpg',rating:4,comment:'Great kit. Highly recommended.',date:'Apr 2025'}] },
  { id:6, title:'Node.js Backend Starter', category:'Source Code', price:4599, originalPrice:8999, rating:4.6, reviews:90, sales:450, badge:'', vendor:'John Miller', vendorAvatar:'https://randomuser.me/api/portraits/men/12.jpg', description:'A production-ready Node.js backend starter with Express, MongoDB, JWT authentication, and REST API setup.', features:['✅ Express.js Setup','✅ MongoDB Integration','✅ JWT Auth','✅ REST API','✅ MVC Structure','✅ Error Handling','✅ Environment Config','✅ API Documentation'], tags:['Node.js','Backend','Express','MongoDB','API'], images:['https://images.unsplash.com/photo-1558494949-ef010cbdcc31','https://images.unsplash.com/photo-1461749280684-dccba630e2f6','https://images.unsplash.com/photo-1518770660439-4636190af475','https://images.unsplash.com/photo-1516321318423-f06f85e504b3'], reviews_list:[{name:'David Smith',avatar:'https://randomuser.me/api/portraits/men/32.jpg',rating:5,comment:'Saved me so much time. Great starter!',date:'Apr 2025'}] },
  { id:7, title:'Figma Design System', category:'Graphics', price:1899, originalPrice:3499, rating:4.4, reviews:75, sales:390, badge:'New', vendor:'Sophia Lee', vendorAvatar:'https://randomuser.me/api/portraits/women/44.jpg', description:'A comprehensive Figma design system with 200+ components, color styles, text styles, and design tokens.', features:['✅ 200+ Components','✅ Color Styles','✅ Text Styles','✅ Design Tokens','✅ Auto Layout','✅ Dark Mode','✅ Icon Library','✅ Team Library Ready'], tags:['Figma','Design System','UI','Components','Graphics'], images:['https://images.unsplash.com/photo-1561070791-2526d30994b5','https://images.unsplash.com/photo-1516321318423-f06f85e504b3','https://images.unsplash.com/photo-1507238691740-187a5b1d37b8','https://images.unsplash.com/photo-1461749280684-dccba630e2f6'], reviews_list:[{name:'Alex Brown',avatar:'https://randomuser.me/api/portraits/men/22.jpg',rating:4,comment:'Very organized design system. Love it!',date:'Mar 2025'}] },
  { id:8, title:'React Native Starter', category:'Source Code', price:5499, originalPrice:9999, rating:4.9, reviews:180, sales:920, badge:'Bestseller', vendor:'John Miller', vendorAvatar:'https://randomuser.me/api/portraits/men/12.jpg', description:'A full React Native starter app with navigation, authentication, state management, and API integration.', features:['✅ React Navigation','✅ Redux Toolkit','✅ Auth Flow','✅ API Integration','✅ Push Notifications','✅ iOS & Android','✅ TypeScript Ready','✅ Full Documentation'], tags:['React Native','Mobile','Starter','Redux','TypeScript'], images:['https://images.unsplash.com/photo-1526498460520-4c246339dccb','https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c','https://images.unsplash.com/photo-1558494949-ef010cbdcc31','https://images.unsplash.com/photo-1461749280684-dccba630e2f6'], reviews_list:[{name:'Sophia Lee',avatar:'https://randomuser.me/api/portraits/women/44.jpg',rating:5,comment:'Best React Native starter out there!',date:'May 2025'},{name:'David Smith',avatar:'https://randomuser.me/api/portraits/men/32.jpg',rating:5,comment:'Saved me months of work. Excellent!',date:'Apr 2025'}] },
  { id:9, title:'SEO Ebook Guide', category:'Ebook', price:999, originalPrice:1999, rating:4.2, reviews:45, sales:230, badge:'', vendor:'Alex Brown', vendorAvatar:'https://randomuser.me/api/portraits/men/22.jpg', description:'A complete SEO guide ebook covering on-page SEO, off-page SEO, technical SEO, keyword research, and link building strategies for 2025.', features:['✅ On-Page SEO','✅ Off-Page SEO','✅ Technical SEO','✅ Keyword Research','✅ Link Building','✅ SEO Tools Guide','✅ Case Studies','✅ 2025 Updated'], tags:['SEO','Ebook','Marketing','Digital','Guide'], images:['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c','https://images.unsplash.com/photo-1507238691740-187a5b1d37b8','https://images.unsplash.com/photo-1516321318423-f06f85e504b3','https://images.unsplash.com/photo-1461749280684-dccba630e2f6'], reviews_list:[{name:'John Miller',avatar:'https://randomuser.me/api/portraits/men/12.jpg',rating:4,comment:'Very helpful guide. Learned a lot!',date:'Mar 2025'}] },
];

function ProductDetails() {

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id)) || allProducts[0];
  const relatedProducts = allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0,3).length > 0
    ? allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0,3)
    : allProducts.filter(p => p.id !== product.id).slice(0,3);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating) => '⭐'.repeat(Math.floor(rating));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category,
      });
    }
    toast.success(`✅ ${product.title} added to cart!`);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info('Removed from wishlist');
    } else {
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category,
      });
      toast.success('❤️ Added to wishlist!');
    }
  };

  return (
    <div style={{background:'#F8FAFC', minHeight:'100vh', paddingBottom:'60px'}}>

      {/* BREADCRUMB */}
      <div style={{background:'white', padding:'15px 0', borderBottom:'1px solid #e2e8f0'}}>
        <div className="container-fluid px-5">
          <p style={{margin:0, color:'#888', fontSize:'0.9rem'}}>
            <a href="#/" style={{color:'#4F46E5', textDecoration:'none'}}>Home</a>
            {' › '}
            <a href="#/products" style={{color:'#4F46E5', textDecoration:'none'}}>Products</a>
            {' › '}
            <span style={{color:'#1e1e2f'}}>{product.title}</span>
          </p>
        </div>
      </div>

      <div className="container-fluid px-5" style={{marginTop:'40px'}}>
        <div className="row g-5">

          {/* LEFT — IMAGE GALLERY */}
          <div className="col-md-6">
            <div style={{borderRadius:'16px', overflow:'hidden', boxShadow:'0 8px 30px rgba(0,0,0,0.1)', marginBottom:'15px', position:'relative'}}>
              <img src={product.images[activeImage]} alt={product.title}
                style={{width:'100%', height:'380px', objectFit:'cover'}} />
              {product.badge && (
                <span style={{position:'absolute', top:'15px', left:'15px', background:'#F59E0B', color:'white', padding:'6px 14px', borderRadius:'20px', fontSize:'0.85rem', fontWeight:'600'}}>
                  {product.badge}
                </span>
              )}
            </div>
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
              {product.images.map((img, index) => (
                <img key={index} src={img} alt=""
                  onClick={() => setActiveImage(index)}
                  style={{width:'80px', height:'60px', objectFit:'cover', borderRadius:'8px', cursor:'pointer', border: activeImage === index ? '3px solid #4F46E5' : '3px solid transparent', opacity: activeImage === index ? 1 : 0.7, transition:'all 0.2s ease'}} />
              ))}
            </div>
          </div>

          {/* RIGHT — PRODUCT INFO */}
          <div className="col-md-6">

            <div style={{display:'flex', gap:'10px', marginBottom:'15px', flexWrap:'wrap'}}>
              <span style={{background:'#EEF2FF', color:'#4F46E5', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'500'}}>{product.category}</span>
              {product.badge && (
                <span style={{background:'#FEF3C7', color:'#F59E0B', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>🔥 {product.badge}</span>
              )}
            </div>

            <h1 style={{fontSize:'1.8rem', fontWeight:'700', color:'#1e1e2f', marginBottom:'15px'}}>{product.title}</h1>

            <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'20px', flexWrap:'wrap'}}>
              <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <span style={{color:'#F59E0B'}}>{renderStars(product.rating)}</span>
                <strong style={{color:'#1e1e2f'}}>{product.rating}</strong>
                <span style={{color:'#888', fontSize:'0.9rem'}}>({product.reviews} reviews)</span>
              </div>
              <span style={{color:'#888', fontSize:'0.9rem'}}>📦 {product.sales}+ sales</span>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'25px'}}>
              <span style={{fontSize:'2.5rem', fontWeight:'700', color:'#4F46E5'}}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span style={{fontSize:'1.2rem', color:'#aaa', textDecoration:'line-through'}}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{background:'#dcfce7', color:'#16a34a', padding:'4px 10px', borderRadius:'20px', fontSize:'0.85rem', fontWeight:'600'}}>
                {Math.round((1 - product.price/product.originalPrice)*100)}% OFF
              </span>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:'12px', padding:'15px', background:'#f8fafc', borderRadius:'12px', marginBottom:'25px'}}>
              <img src={product.vendorAvatar} alt={product.vendor}
                style={{width:'45px', height:'45px', borderRadius:'50%', objectFit:'cover'}} />
              <div>
                <p style={{margin:0, fontSize:'0.8rem', color:'#888'}}>Sold by</p>
                <p style={{margin:0, fontWeight:'600', color:'#4F46E5'}}>{product.vendor}</p>
              </div>
              <button style={{marginLeft:'auto', background:'transparent', color:'#4F46E5', border:'1.5px solid #4F46E5', padding:'6px 14px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600', cursor:'pointer'}}>
                View Store
              </button>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'25px'}}>
              <span style={{fontWeight:'600', color:'#333'}}>Quantity:</span>
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <button onClick={() => setQuantity(q => Math.max(1, q-1))}
                  style={{width:'35px', height:'35px', borderRadius:'50%', border:'1.5px solid #4F46E5', background:'#4F46E5', fontSize:'1.2rem', cursor:'pointer', fontWeight:'700', color:'white', display:'flex', alignItems:'center', justifyContent:'center', lineHeight:'1'}}>−</button>
                <span style={{fontWeight:'700', fontSize:'1.1rem', minWidth:'25px', textAlign:'center'}}>{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)}
                  style={{width:'35px', height:'35px', borderRadius:'50%', border:'1.5px solid #4F46E5', background:'#4F46E5', fontSize:'1.2rem', cursor:'pointer', fontWeight:'700', color:'white', display:'flex', alignItems:'center', justifyContent:'center', lineHeight:'1'}}>+</button>
              </div>
            </div>

            {/* Action Buttons — connected to Context */}
            <div style={{display:'flex', gap:'15px', marginBottom:'25px'}}>
              <button
                onClick={handleAddToCart}
                style={{flex:1, padding:'15px', background:'#4F46E5', color:'white', border:'none', borderRadius:'12px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins'}}>
                🛒 Add to Cart
              </button>
              <button
                onClick={() => { handleAddToCart(); window.location.href='#/state-demo'; }}
                style={{flex:1, padding:'15px', background:'#F59E0B', color:'white', border:'none', borderRadius:'12px', fontWeight:'700', fontSize:'1rem', cursor:'pointer', fontFamily:'Poppins'}}>
                ⚡ Buy Now
              </button>
              <button
                onClick={handleWishlist}
                style={{padding:'15px 18px', background: isInWishlist(product.id) ? '#FEF2F2' : 'white', color:'#ef4444', border:'1.5px solid #ef4444', borderRadius:'12px', fontSize:'1.2rem', cursor:'pointer', transition:'all 0.3s'}}>
                {isInWishlist(product.id) ? '❤️' : '♥'}
              </button>
            </div>

            <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
              {product.tags.map(tag => (
                <span key={tag} style={{background:'#f1f5f9', color:'#64748b', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'500'}}>#{tag}</span>
              ))}
            </div>

          </div>
        </div>

        {/* TABS */}
        <div style={{marginTop:'50px'}}>
          <div style={{display:'flex', gap:'5px', borderBottom:'2px solid #e2e8f0', marginBottom:'30px'}}>
            {['description','features','reviews'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{padding:'12px 25px', background:'transparent', border:'none', borderBottom: activeTab === tab ? '3px solid #4F46E5' : '3px solid transparent', color: activeTab === tab ? '#4F46E5' : '#888', fontWeight: activeTab === tab ? '700' : '500', fontSize:'0.95rem', cursor:'pointer', fontFamily:'Poppins', textTransform:'capitalize', marginBottom:'-2px'}}>
                {tab === 'description' ? '📄 Description' : tab === 'features' ? '⚙️ Features' : '⭐ Reviews'}
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
                <div key={i} style={{padding:'20px 0', borderBottom: i < product.reviews_list.length-1 ? '1px solid #f0f0f0' : 'none'}}>
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

        {/* RELATED PRODUCTS */}
        <div style={{marginTop:'50px'}}>
          <h4 style={{color:'#1e1e2f', fontWeight:'700', marginBottom:'25px'}}>
            🔗 Related Products
          </h4>
          <div className="row g-4">
            {relatedProducts.map((rel, i) => (
              <div className="col-md-4" key={i}>
                <div style={{background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 15px rgba(0,0,0,0.07)', transition:'all 0.3s ease', cursor:'pointer'}}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                  onClick={() => { window.location.href=`#/product-details/${rel.id}`; setActiveImage(0); setActiveTab('description'); }}>
                  <img src={rel.images[0]} alt={rel.title}
                    style={{width:'100%', height:'160px', objectFit:'cover'}} />
                  <div style={{padding:'18px'}}>
                    <span style={{background:'#EEF2FF', color:'#4F46E5', padding:'3px 10px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:'500'}}>{rel.category}</span>
                    <h6 style={{color:'#1e1e2f', fontWeight:'700', margin:'10px 0 4px', fontSize:'0.95rem'}}>{rel.title}</h6>
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

      </div>
    </div>
  );
}

export default ProductDetails;