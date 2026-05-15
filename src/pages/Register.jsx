import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function Register() {

  const formik = useFormik({
    initialValues: {
      firstName:'', lastName:'', email:'',
      password:'', confirmPassword:'', role:'Customer', terms:false
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2,'Too short!').required('❌ First name is required'),
      lastName: Yup.string().min(2,'Too short!').required('❌ Last name is required'),
      email: Yup.string().email('❌ Invalid email format').required('❌ Email is required'),
      password: Yup.string().min(6,'❌ Minimum 6 characters').required('❌ Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null],'❌ Passwords do not match!')
        .required('❌ Please confirm your password'),
      terms: Yup.bool().oneOf([true],'❌ You must accept the terms')
    }),
          onSubmit: (values) => {
      localStorage.setItem('userName', values.firstName);
      localStorage.setItem('userEmail', values.email);
      localStorage.setItem('userRole', values.role);
      toast.success(`🎉 Account Created! Welcome ${values.firstName}!`);
      setTimeout(() => { window.location.href = '#/email-verification'; }, 2000);
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

  const labelStyle = {
    fontWeight:'600', marginBottom:'8px',
    display:'block', color:'#333',
    textAlign:'left', marginTop:'15px'
  };

  const errorStyle = { color:'#ef4444', fontSize:'0.82rem', marginBottom:'10px' };

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
        maxWidth:'540px', boxShadow:'0 20px 60px rgba(0,0,0,0.2)'
      }}>

        <h2 style={{color:'#4F46E5', fontWeight:'700', marginBottom:'10px', textAlign:'center'}}>
          Create Account 🚀
        </h2>
        <p style={{textAlign:'center', color:'#666', marginBottom:'30px'}}>
          Join Pixer Marketplace today
        </p>

        <form onSubmit={formik.handleSubmit}>

          {/* First & Last Name */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input type="text" name="firstName" placeholder="First name"
                onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.firstName} style={inputStyle('firstName')} />
              {formik.touched.firstName && formik.errors.firstName && (
                <p style={errorStyle}>{formik.errors.firstName}</p>
              )}
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input type="text" name="lastName" placeholder="Last name"
                onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.lastName} style={inputStyle('lastName')} />
              {formik.touched.lastName && formik.errors.lastName && (
                <p style={errorStyle}>{formik.errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <label style={labelStyle}>Email Address</label>
          <input type="email" name="email" placeholder="Enter your email"
            onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.email} style={inputStyle('email')} />
          {formik.touched.email && formik.errors.email && (
            <p style={errorStyle}>{formik.errors.email}</p>
          )}

          {/* Password */}
          <label style={labelStyle}>Password</label>
          <input type="password" name="password" placeholder="Create a password"
            onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.password} style={inputStyle('password')} />

          {/* Password Strength */}
          {formik.values.password && (
            <div style={{marginBottom:'10px'}}>
              <div style={{background:'#e2e8f0', borderRadius:'10px', height:'6px', marginTop:'8px'}}>
                <div style={{
                  width: strength.width, background: strength.color,
                  height:'6px', borderRadius:'10px', transition:'all 0.3s ease'
                }}></div>
              </div>
              <p style={{fontSize:'0.8rem', color: strength.color, marginTop:'4px', fontWeight:'600'}}>
                Password Strength: {strength.label}
              </p>
            </div>
          )}

          {formik.touched.password && formik.errors.password && (
            <p style={errorStyle}>{formik.errors.password}</p>
          )}

          {/* Confirm Password */}
          <label style={labelStyle}>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm your password"
            onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.confirmPassword} style={inputStyle('confirmPassword')} />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p style={errorStyle}>{formik.errors.confirmPassword}</p>
          )}

          {/* Role */}
          <label style={labelStyle}>Join as</label>
          <select name="role" onChange={formik.handleChange} value={formik.values.role}
            style={{
              width:'100%', padding:'14px', marginBottom:'15px',
              border:'1.5px solid #e2e8f0', borderRadius:'10px',
              fontFamily:'Poppins', fontSize:'0.95rem',
              outline:'none', background:'#f8fafc', color:'#1e1e2f'
            }}>
            <option>Customer</option>
            <option>Vendor</option>
          </select>

          {/* Terms */}
          <label style={{fontSize:'0.9rem', color:'#555', display:'flex', alignItems:'center', gap:'8px', marginBottom:'5px'}}>
            <input type="checkbox" name="terms"
              onChange={formik.handleChange} checked={formik.values.terms} />
            I agree to the{' '}
            <a href="/terms" style={{color:'#4F46E5', textDecoration:'none', fontWeight:'600'}}>
              Terms & Conditions
            </a>
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <p style={{...errorStyle, marginBottom:'15px'}}>{formik.errors.terms}</p>
          )}

          {/* Submit */}
          <button type="submit" style={{
            width:'100%', padding:'14px', background:'#4F46E5',
            color:'white', border:'none', borderRadius:'10px',
            fontSize:'1rem', fontWeight:'600', cursor:'pointer',
            fontFamily:'Poppins', marginTop:'15px', marginBottom:'20px'
          }}>Create Account</button>

          <p style={{textAlign:'center', color:'#666', margin:0}}>
            Already have an account?{' '}
            <a href="/login" style={{color:'#4F46E5', fontWeight:'700', textDecoration:'none'}}>
              Login Here
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;