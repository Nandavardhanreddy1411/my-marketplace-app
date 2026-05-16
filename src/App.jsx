import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy } from 'react';

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const OTPVerification = lazy(() => import("./pages/OTPVerification"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Payment = lazy(() => import("./pages/Payment"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const VendorDashboard = lazy(() => import("./pages/VendorDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Notifications = lazy(() => import("./pages/Notifications"));
const APIDemo = lazy(() => import("./pages/APIDemo"));
const StateDemo = lazy(() => import("./pages/StateDemo"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

function PageLoader() {
  return (
    <div style={{
      minHeight:'60vh', display:'flex',
      alignItems:'center', justifyContent:'center',
      flexDirection:'column', gap:'15px'
    }}>
      <div style={{
        width:'50px', height:'50px', borderRadius:'50%',
        border:'4px solid #EEF2FF',
        borderTop:'4px solid #4F46E5',
        animation:'spin 0.8s linear infinite'
      }}></div>
      <p style={{ color:'#888', fontFamily:'Poppins', fontSize:'0.9rem', margin:0 }}>
        Loading...
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Navbar logo="PIXER" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/api-demo" element={<APIDemo />} />
          <Route path="/state-demo" element={<StateDemo />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/vendor-dashboard" element={
            <ProtectedRoute><VendorDashboard /></ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute><AdminDashboard /></ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer company="Pixer Marketplace" />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </HashRouter>
  );
}

export default App;