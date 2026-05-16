// Simulate JWT token handling (frontend only)

// Generate fake token
export function generateToken(user) {
  const payload = {
    id: user.id || 1,
    email: user.email,
    role: user.role || 'Customer',
    name: user.name,
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };
  // Base64 encode (simulated JWT)
  const token = btoa(JSON.stringify(payload));
  return token;
}

// Decode token
export function decodeToken(token) {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
}

// Check if token is valid
export function isTokenValid(token) {
  try {
    const decoded = decodeToken(token);
    if (!decoded) return false;
    return decoded.exp > Date.now();
  } catch {
    return false;
  }
}

// Save token
export function saveToken(token) {
  localStorage.setItem('pixer_token', token);
}

// Get token
export function getToken() {
  return localStorage.getItem('pixer_token');
}

// Remove token (logout)
export function removeToken() {
  localStorage.removeItem('pixer_token');
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
}