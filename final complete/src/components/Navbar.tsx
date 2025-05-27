import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { CartItem } from '../features/cart/cartSlice';

const Navbar = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total: number, item: CartItem) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="logo" className="logo" />

        <Link to="/" className="title">
          LeyLeys Aroma
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/checkout" className="nav-link">Cart ({cartCount})</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
