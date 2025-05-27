import { useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  total: number;
  onClose: () => void;
  onConfirm: () => void;
}

const CheckoutModal = ({ total, onClose, onConfirm }: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName || !email) {
      setError('Please fill out all fields.');
      return;
    }

    onConfirm();
  };

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 10, minWidth: 300 }}>
        <h2>Confirm Your Purchase</h2>
        <p>Total: ${total.toFixed(2)}</p>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        /><br />
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        /><br />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>,
    document.body
  );
};

export default CheckoutModal;
