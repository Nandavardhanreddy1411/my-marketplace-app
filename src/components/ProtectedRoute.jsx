import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProtectedRoute({ children, role }) {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole') || 'Customer';

  // Not logged in
  if (!isLoggedIn) {
    toast.error('❌ Please login to access this page!');
    return <Navigate to="/login" replace />;
  }

  // Role-based protection
  if (role && userRole !== role) {
    toast.warning('⚠️ You do not have permission to access this page!');
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;