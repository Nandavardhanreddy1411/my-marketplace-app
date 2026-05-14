import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function EmailVerification() {

  const [status, setStatus] = useState('pending'); // pending | success | error
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    toast.info('📨 Verification email resent!');
  };

  const handleVerifyDemo = () => {
    setStatus('success');
    toast.success('✅ Email Verified Successfully!');
  };

  return (
    <div style={{
      minHeight:'100vh',
      background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
      display:'flex', alignItems:'center',
      justifyContent:'center', padding:'40px 20px'
    }}>
      <div style={{
        background:'white', borderRadius:'20px',
        padding:'50px 40px', width:'100%',
        maxWidth:'480px', boxShadow:'0 20px 60px rgba(0,0,0,0.2)',
        textAlign:'center'
      }}>

        {/* PENDING STATE */}
        {status === 'pending' && (
          <>
            {/* Animated Email Icon */}
            <div style={{
              width:'90px', height:'90px', borderRadius:'50%',
              background:'linear-gradient(135deg, #4F46E5, #06B6D4)',
              display:'flex', alignItems:'center',
              justifyContent:'center', fontSize:'2.5rem',
              margin:'0 auto 25px',
              boxShadow:'0 10px 30px rgba(79,70,229,0.3)'
            }}>📧</div>

            <h2 style={{ color:'#4F46E5', fontWeight:'700', marginBottom:'10px' }}>
              Verify Your Email
            </h2>
            <p style={{ color:'#666', marginBottom:'8px', fontSize:'0.95rem' }}>
              We've sent a verification link to
            </p>
            <p style={{ color:'#4F46E5', fontWeight:'700', fontSize:'1rem', marginBottom:'30px' }}>
              nanda@email.com
            </p>

            {/* Steps */}
            <div style={{
              background:'#F8FAFC', borderRadius:'12px',
              padding:'20px', marginBottom:'25px', textAlign:'left'
            }}>
              <p style={{ color:'#555', fontWeight:'600', marginBottom:'12px', fontSize:'0.9rem' }}>
                Follow these steps:
              </p>
              {[
                '1. Open your email inbox',
                '2. Find email from Pixer',
                '3. Click the verification link',
                '4. You\'ll be redirected back'
              ].map((step, i) => (
                <p key={i} style={{ color:'#666', margin:'0 0 8px', fontSize:'0.88rem', display:'flex', alignItems:'center', gap:'8px' }}>
                  <span style={{ color:'#4F46E5', fontWeight:'700' }}>→</span> {step}
                </p>
              ))}
            </div>

            {/* Timer */}
            <div style={{
              background:'#EEF2FF', borderRadius:'10px',
              padding:'12px', marginBottom:'20px'
            }}>
              {!canResend ? (
                <p style={{ color:'#4F46E5', fontWeight:'600', margin:0, fontSize:'0.9rem' }}>
                  ⏱ Resend available in{' '}
                  <span style={{ fontWeight:'700' }}>
                    00:{timer.toString().padStart(2, '0')}
                  </span>
                </p>
              ) : (
                <button onClick={handleResend} style={{
                  background:'transparent', color:'#4F46E5',
                  border:'none', fontWeight:'700',
                  cursor:'pointer', fontSize:'0.9rem',
                  fontFamily:'Poppins'
                }}>
                  🔄 Resend Verification Email
                </button>
              )}
            </div>

            {/* Demo verify button */}
            <button onClick={handleVerifyDemo} style={{
              width:'100%', padding:'14px', background:'#4F46E5',
              color:'white', border:'none', borderRadius:'10px',
              fontSize:'1rem', fontWeight:'600', cursor:'pointer',
              fontFamily:'Poppins', marginBottom:'15px'
            }}>
              ✅ I've Verified My Email
            </button>

            <p style={{ color:'#888', fontSize:'0.85rem', margin:0 }}>
              Wrong email?{' '}
              <a href="/register" style={{ color:'#4F46E5', fontWeight:'600', textDecoration:'none' }}>
                Change email address
              </a>
            </p>
          </>
        )}

        {/* SUCCESS STATE */}
        {status === 'success' && (
          <>
            <div style={{
              width:'90px', height:'90px', borderRadius:'50%',
              background:'#dcfce7', display:'flex',
              alignItems:'center', justifyContent:'center',
              fontSize:'2.5rem', margin:'0 auto 25px'
            }}>✅</div>

            <h2 style={{ color:'#16a34a', fontWeight:'700', marginBottom:'10px' }}>
              Email Verified!
            </h2>
            <p style={{ color:'#666', marginBottom:'30px', fontSize:'0.95rem' }}>
              Your email has been successfully verified.<br />
              You can now access all features of Pixer.
            </p>

            {/* Benefits */}
            <div style={{
              background:'#f0fdf4', borderRadius:'12px',
              padding:'20px', marginBottom:'25px', textAlign:'left'
            }}>
              {[
                '🛍️ Browse & purchase products',
                '📥 Download your purchases',
                '❤️ Save items to wishlist',
                '🏪 Become a vendor'
              ].map((benefit, i) => (
                <p key={i} style={{ color:'#16a34a', margin:'0 0 8px', fontSize:'0.9rem', fontWeight:'500' }}>
                  {benefit}
                </p>
              ))}
            </div>

            <button
              onClick={() => window.location.href = '/login'}
              style={{
                width:'100%', padding:'14px', background:'#16a34a',
                color:'white', border:'none', borderRadius:'10px',
                fontSize:'1rem', fontWeight:'600', cursor:'pointer',
                fontFamily:'Poppins', marginBottom:'12px'
              }}>
              Continue to Login 🚀
            </button>

            <button
              onClick={() => window.location.href = '/'}
              style={{
                width:'100%', padding:'14px', background:'transparent',
                color:'#4F46E5', border:'1.5px solid #4F46E5',
                borderRadius:'10px', fontSize:'1rem',
                fontWeight:'600', cursor:'pointer', fontFamily:'Poppins'
              }}>
              Go to Homepage
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default EmailVerification;