import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

function OTPVerification() {

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // numbers only
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move back on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      toast.error('❌ Please enter the complete 6-digit OTP');
      return;
    }
    // Demo: accept any 6 digit OTP
    toast.success('✅ OTP Verified Successfully!');
    setVerified(true);
    setTimeout(() => { window.location.href = '/login'; }, 2000);
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
    setCanResend(false);
    toast.info('📨 New OTP sent to your email!');
    inputRefs.current[0].focus();
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
        maxWidth:'460px', boxShadow:'0 20px 60px rgba(0,0,0,0.2)',
        textAlign:'center'
      }}>

        {verified ? (
          <div>
            <p style={{ fontSize:'4rem', margin:'0 0 15px' }}>🎉</p>
            <h2 style={{ color:'#16a34a', fontWeight:'700', marginBottom:'10px' }}>
              Verified Successfully!
            </h2>
            <p style={{ color:'#666' }}>Redirecting you to login...</p>
            <div style={{
              width:'50px', height:'4px', background:'#4F46E5',
              borderRadius:'2px', margin:'20px auto 0',
              animation:'none'
            }}></div>
          </div>
        ) : (
          <>
            {/* Icon */}
            <div style={{
              width:'70px', height:'70px', borderRadius:'50%',
              background:'#EEF2FF', display:'flex',
              alignItems:'center', justifyContent:'center',
              fontSize:'2rem', margin:'0 auto 20px'
            }}>📱</div>

            <h2 style={{ color:'#4F46E5', fontWeight:'700', marginBottom:'10px' }}>
              OTP Verification
            </h2>
            <p style={{ color:'#666', marginBottom:'10px', fontSize:'0.95rem' }}>
              We sent a 6-digit code to
            </p>
            <p style={{ color:'#4F46E5', fontWeight:'700', marginBottom:'30px', fontSize:'1rem' }}>
              nanda@email.com
            </p>

            {/* OTP Input Boxes */}
            <div style={{
              display:'flex', gap:'10px',
              justifyContent:'center', marginBottom:'25px'
            }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  style={{
                    width:'50px', height:'55px',
                    textAlign:'center', fontSize:'1.5rem',
                    fontWeight:'700', color:'#1e1e2f',
                    border: digit ? '2px solid #4F46E5' : '2px solid #e2e8f0',
                    borderRadius:'12px', outline:'none',
                    background: digit ? '#EEF2FF' : '#f8fafc',
                    transition:'all 0.2s ease',
                    fontFamily:'Poppins'
                  }}
                />
              ))}
            </div>

            {/* Timer */}
            <div style={{ marginBottom:'25px' }}>
              {!canResend ? (
                <p style={{ color:'#888', fontSize:'0.9rem', margin:0 }}>
                  Resend OTP in{' '}
                  <span style={{ color:'#4F46E5', fontWeight:'700' }}>
                    00:{timer.toString().padStart(2, '0')}
                  </span>
                </p>
              ) : (
                <button
                  onClick={handleResend}
                  style={{
                    background:'transparent', color:'#4F46E5',
                    border:'none', fontWeight:'700',
                    cursor:'pointer', fontSize:'0.9rem',
                    textDecoration:'underline', fontFamily:'Poppins'
                  }}>
                  🔄 Resend OTP
                </button>
              )}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              style={{
                width:'100%', padding:'14px', background:'#4F46E5',
                color:'white', border:'none', borderRadius:'10px',
                fontSize:'1rem', fontWeight:'600', cursor:'pointer',
                fontFamily:'Poppins', marginBottom:'20px'
              }}>
              Verify OTP ✅
            </button>

            <p style={{ color:'#666', margin:0, fontSize:'0.9rem' }}>
              Didn't receive the code?{' '}
              <a href="/register" style={{ color:'#4F46E5', fontWeight:'700', textDecoration:'none' }}>
                Check spam folder
              </a>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default OTPVerification;