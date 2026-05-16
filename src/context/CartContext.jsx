import { createContext, useContext, useState, useReducer } from 'react';

const CartContext = createContext();
const AuthContext = createContext();
const WishlistContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload };
    case 'REMOVE_COUPON':
      return { ...state, coupon: null };
    default:
      return state;
  }
};

export function AppProvider({ children }) {

  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [], coupon: null });

  const [auth, setAuth] = useState({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    user: {
      name: localStorage.getItem('userName') || 'Guest',
      email: localStorage.getItem('userEmail') || '',
      role: localStorage.getItem('userRole') || 'Customer',
    }
  });

  const [wishlist, setWishlist] = useState([]);

  const [notifications, setNotifications] = useState([
    { id:1, message:'New product added to marketplace!', read:false },
    { id:2, message:'Your order #ORD003 is confirmed.', read:false },
    { id:3, message:'Flash sale — 20% off today!', read:true },
  ]);

  // Cart Actions
  const addToCart = (product) => cartDispatch({ type:'ADD_TO_CART', payload:product });
  const removeFromCart = (id) => cartDispatch({ type:'REMOVE_FROM_CART', payload:id });
  const updateQuantity = (id, quantity) => cartDispatch({ type:'UPDATE_QUANTITY', payload:{ id, quantity } });
  const clearCart = () => cartDispatch({ type:'CLEAR_CART' });
  const applyCoupon = (coupon) => cartDispatch({ type:'APPLY_COUPON', payload:coupon });
  const removeCoupon = () => cartDispatch({ type:'REMOVE_COUPON' });

  const cartTotal = cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartState.items.reduce((count, item) => count + item.quantity, 0);
  const discount = cartState.coupon === 'PIXER20' ? cartTotal * 0.20
                 : cartState.coupon === 'SAVE10' ? cartTotal * 0.10 : 0;
  const finalTotal = cartTotal - discount;

  // Auth Actions
  const login = (userData) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userEmail', userData.email);
    setAuth({ isLoggedIn:true, user:userData });
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setAuth({ isLoggedIn:false, user:{ name:'Guest', email:'', role:'Customer' } });
  };

  // Wishlist Actions
  const addToWishlist = (product) => {
    setWishlist(prev => prev.find(p => p.id === product.id) ? prev : [...prev, product]);
  };
  const removeFromWishlist = (id) => setWishlist(prev => prev.filter(p => p.id !== id));
  const isInWishlist = (id) => wishlist.some(p => p.id === id);

  // Notification Actions
  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read:true } : n));
  };
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <CartContext.Provider value={{
      cart: cartState.items,
      coupon: cartState.coupon,
      cartTotal, cartCount, discount, finalTotal,
      addToCart, removeFromCart, updateQuantity,
      clearCart, applyCoupon, removeCoupon,
    }}>
      <AuthContext.Provider value={{ auth, login, logout }}>
        <WishlistContext.Provider value={{
          wishlist, addToWishlist, removeFromWishlist, isInWishlist,
          notifications, markNotificationRead, unreadCount,
        }}>
          {children}
        </WishlistContext.Provider>
      </AuthContext.Provider>
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export const useAuth = () => useContext(AuthContext);
export const useWishlist = () => useContext(WishlistContext);