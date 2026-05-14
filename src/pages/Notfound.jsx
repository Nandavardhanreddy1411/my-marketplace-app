function NotFound() {
  return (
    <div style={{
      minHeight:'80vh',
      display:'flex', alignItems:'center',
      justifyContent:'center', flexDirection:'column',
      background:'#F8FAFC', textAlign:'center',
      padding:'40px 20px'
    }}>
      <p style={{ fontSize:'5rem', margin:'0 0 20px' }}>🔍</p>
      <h1 style={{ color:'#4F46E5', fontWeight:'700', fontSize:'4rem', margin:'0 0 10px' }}>
        404
      </h1>
      <h2 style={{ color:'#1e1e2f', fontWeight:'700', marginBottom:'10px' }}>
        Page Not Found!
      </h2>
      <p style={{ color:'#888', marginBottom:'30px', fontSize:'1rem', maxWidth:'400px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display:'flex', gap:'15px', justifyContent:'center', flexWrap:'wrap' }}>
        <button
          onClick={() => window.location.href='/'}
          style={{
            background:'#4F46E5', color:'white',
            border:'none', padding:'12px 30px',
            borderRadius:'25px', fontWeight:'600',
            cursor:'pointer', fontSize:'1rem',
            fontFamily:'Poppins'
          }}>
          🏠 Go to Home
        </button>
        <button
          onClick={() => window.history.back()}
          style={{
            background:'transparent', color:'#4F46E5',
            border:'2px solid #4F46E5', padding:'12px 30px',
            borderRadius:'25px', fontWeight:'600',
            cursor:'pointer', fontSize:'1rem',
            fontFamily:'Poppins'
          }}>
          ← Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;