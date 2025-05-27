import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { clearCart, removeFromCart, addToCart } from '../features/cart/cartSlice';
import { useState } from 'react';
import CheckoutModal from '../components/CheckoutModal';

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    dispatch(clearCart());
    setShowModal(false);
    alert('Thank you for your purchase');
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (itemId: number) => {
    const item = cartItems.find(i => i.id === itemId);
    if (item) dispatch(addToCart(item));
  };

  const handleDecrease = (itemId: number) => {
    const item = cartItems.find(i => i.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(removeFromCart(itemId));
      const newItem = { ...item, quantity: item.quantity - 1 };
      for (let i = 0; i < newItem.quantity; i++) dispatch(addToCart(item));
    } else {
      dispatch(removeFromCart(itemId));
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table style={{ width: '100%', marginBottom: '30px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '10px 0' }}>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 0' }}>{item.name}</td>
                  <td>
                    <button onClick={() => handleDecrease(item.id)} style={{ marginRight: '6px' }}>-</button>
                    {item.quantity}
                    <button onClick={() => handleIncrease(item.id)} style={{ marginLeft: '6px' }}>+</button>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => handleRemove(item.id)}
                      style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ textAlign: 'right', marginBottom: '30px' }}>
            Total: <strong>${total.toFixed(2)}</strong>
          </h3>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={handleCheckout}
              style={{
                padding: '12px 24px',
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Buy
            </button>
          </div>
        </>
      )}

      {showModal && (
        <CheckoutModal
          total={total}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Checkout;
