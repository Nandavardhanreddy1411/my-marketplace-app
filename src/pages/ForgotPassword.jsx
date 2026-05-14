import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function ForgotPassword() {

  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('❌ Invalid email format')
        .required('❌ Email is required')
    }),
            onSubmit: (values) => {
            localStorage.setItem('resetEmail', values.email);
            toast.success('✅ OTP sent to your email!');
            setTimeout(() => { window.location.href = '/otp-verification'; }, 2000);
            setSubmitted(true);
            }
  });

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
        maxWidth:'460px', boxShadow:'0 20px 60px rgba(0,0,0,0.2)'
      }}>

        {/* Icon */}
        <div style={{
          width:'70px', height:'70px', borderRadius:'50%',
          background:'#EEF2FF', display:'flex',
          alignItems:'center', justifyContent:'center',
          fontSize:'2rem', margin:'0 auto 20px'
        }}>🔐</div>

        <h2 style={{ color:'#4F46E5', fontWeight:'700', marginBottom:'10px', textAlign:'center' }}>
          Forgot Password?
        </h2>
        <p style={{ textAlign:'center', color:'#666', marginBottom:'30px', fontSize:'0.95rem' }}>
          No worries! Enter your email and we'll send you a reset link.
        </p>

        {/* Success State */}
        {submitted ? (
          <div style={{
            background:'#dcfce7', borderRadius:'12px',
            padding:'25px', textAlign:'center'
          }}>
            <p style={{ fontSize:'2.5rem', margin:'0 0 10px' }}>📧</p>
            <h4 style={{ color:'#16a34a', fontWeight:'700', marginBottom:'8px' }}>
              Check your email!
            </h4>
            <p style={{ color:'#555', fontSize:'0.9rem', marginBottom:'20px' }}>
              We sent a password reset link to<br />
              <strong style={{ color:'#4F46E5' }}>{formik.values.email}</strong>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                background:'transparent', color:'#4F46E5',
                border:'1.5px solid #4F46E5', padding:'8px 20px',
                borderRadius:'20px', fontWeight:'600',
                cursor:'pointer', fontSize:'0.9rem'
              }}>
              Try another email
            </button>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit}>

            <label style={{
              fontWeight:'600', marginBottom:'8px',
              display:'block', color:'#333', textAlign:'left'
            }}>
              Email Address
            </label>
            <input
              type="email" name="email"
              placeholder="Enter your registered email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{
                width:'100%', padding:'14px', marginBottom:'5px',
                border: formik.touched.email && formik.errors.email
                  ? '1.5px solid #ef4444' : '1.5px solid #e2e8f0',
                borderRadius:'10px', fontSize:'0.95rem',
                fontFamily:'Poppins', outline:'none',
                background:'#f8fafc', color:'#1e1e2f'
              }}
            />
            {formik.touched.email && formik.errors.email && (
              <p style={{ color:'#ef4444', fontSize:'0.82rem', marginBottom:'15px' }}>
                {formik.errors.email}
              </p>
            )}

            <button type="submit" style={{
              width:'100%', padding:'14px', background:'#4F46E5',
              color:'white', border:'none', borderRadius:'10px',
              fontSize:'1rem', fontWeight:'600', cursor:'pointer',
              fontFamily:'Poppins', marginTop:'15px', marginBottom:'20px'
            }}>
              Send Reset Link 📨
            </button>

            <p style={{ textAlign:'center', color:'#666', margin:0 }}>
              Remember your password?{' '}
              <a href="/login" style={{ color:'#4F46E5', fontWeight:'700', textDecoration:'none' }}>
                Back to Login
              </a>
            </p>

          </form>
        )}

      </div>
    </div>
  );
}

export default ForgotPassword;