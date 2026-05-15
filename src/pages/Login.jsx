import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function Login() {

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('❌ Invalid email format')
        .required('❌ Email is required'),
      password: Yup.string()
        .min(6, '❌ Minimum 6 characters required')
        .required('❌ Password is required')
    }),
        onSubmit: (values) => {
      localStorage.setItem('userEmail', values.email);
      localStorage.setItem('isLoggedIn', 'true');
      toast.success(`✅ Login Successful! Welcome back!`);
      setTimeout(() => { window.location.href = '#/'; }, 2000);
    }
  });

  const inputStyle = (field) => ({
    width:'100%', padding:'14px', marginBottom:'5px',
    border: formik.touched[field] && formik.errors[field]
      ? '1.5px solid #ef4444' : '1.5px solid #e2e8f0',
    borderRadius:'10px', fontSize:'0.95rem',
    fontFamily:'Poppins', outline:'none',
    background:'#f8fafc', color:'#1e1e2f'
  });

  // Password strength checker
  const getPasswordStrength = (password) => {
    if (!password) return null;
    if (password.length < 4) return { label:'Weak', color:'#ef4444', width:'25%' };
    if (password.length < 6) return { label:'Fair', color:'#F59E0B', width:'50%' };
    if (password.length < 10) return { label:'Good', color:'#06B6D4', width:'75%' };
    return { label:'Strong', color:'#22c55e', width:'100%' };
  };

  const strength = getPasswordStrength(formik.values.password);

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
        maxWidth:'480px', boxShadow:'0 20px 60px rgba(0,0,0,0.2)'
      }}>

        <h2 style={{color:'#4F46E5', fontWeight:'700', marginBottom:'10px', textAlign:'center'}}>
          Welcome Back 👋
        </h2>
        <p style={{textAlign:'center', color:'#666', marginBottom:'30px'}}>
          Login to your Pixer account
        </p>

        <form onSubmit={formik.handleSubmit}>

          {/* Email */}
          <label style={{fontWeight:'600', marginBottom:'8px', display:'block', color:'#333', textAlign:'left'}}>
            Email Address
          </label>
          <input type="email" name="email" placeholder="Enter your email"
            onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.email} style={inputStyle('email')} />
          {formik.touched.email && formik.errors.email && (
            <p style={{color:'#ef4444', fontSize:'0.82rem', marginBottom:'10px'}}>
              {formik.errors.email}
            </p>
          )}

          {/* Password */}
          <label style={{fontWeight:'600', marginBottom:'8px', display:'block', color:'#333', textAlign:'left', marginTop:'15px'}}>
            Password
          </label>
          <input type="password" name="password" placeholder="Enter your password"
            onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.password} style={inputStyle('password')} />

          {/* Password Strength Bar */}
          {formik.values.password && (
            <div style={{marginBottom:'10px'}}>
              <div style={{background:'#e2e8f0', borderRadius:'10px', height:'6px', marginTop:'8px'}}>
                <div style={{
                  width: strength.width,
                  background: strength.color,
                  height:'6px', borderRadius:'10px',
                  transition:'all 0.3s ease'
                }}></div>
              </div>
              <p style={{fontSize:'0.8rem', color: strength.color, marginTop:'4px', fontWeight:'600'}}>
                Password Strength: {strength.label}
              </p>
            </div>
          )}

          {formik.touched.password && formik.errors.password && (
            <p style={{color:'#ef4444', fontSize:'0.82rem', marginBottom:'10px'}}>
              {formik.errors.password}
            </p>
          )}

          {/* Remember & Forgot */}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'20px 0'}}>
            <label style={{fontSize:'0.9rem', color:'#555', display:'flex', alignItems:'center', gap:'6px'}}>
              <input type="checkbox" /> Remember me
            </label>
           <a href="/forgot-password" style={{color:'#4F46E5', fontSize:'0.9rem', textDecoration:'none', fontWeight:'500'}}>
            Forgot Password?
          </a>
          </div>

          {/* Submit */}
          <button type="submit" style={{
            width:'100%', padding:'14px', background:'#4F46E5',
            color:'white', border:'none', borderRadius:'10px',
            fontSize:'1rem', fontWeight:'600', cursor:'pointer',
            fontFamily:'Poppins', marginBottom:'20px'
          }}>Login</button>

          {/* Social */}
          <div style={{textAlign:'center', color:'#aaa', fontSize:'0.9rem', marginBottom:'15px'}}>
            — or continue with —
          </div>
          <div style={{display:'flex', gap:'10px', marginBottom:'25px'}}>
            <button type="button" style={{
              flex:1, padding:'12px', background:'#fff',
              border:'1.5px solid #e2e8f0', borderRadius:'10px',
              fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', color:'#333'
            }}>🌐 Google</button>
            <button type="button" style={{
              flex:1, padding:'12px', background:'#fff',
              border:'1.5px solid #e2e8f0', borderRadius:'10px',
              fontWeight:'600', cursor:'pointer', fontSize:'0.9rem', color:'#333'
            }}>🐙 GitHub</button>
          </div>

          <p style={{textAlign:'center', color:'#666', margin:0}}>
            Don't have an account?{' '}
            <a href="/register" style={{color:'#4F46E5', fontWeight:'700', textDecoration:'none'}}>
              Register Now
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;