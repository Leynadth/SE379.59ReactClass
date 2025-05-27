import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#FFD700',
            color: '#000',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: "'Caveat', cursive",
            fontSize: '24px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            borderBottom: '4px dashed black'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ fontWeight: 'bold', fontSize: '30px' }}>LeyLeys</span>
            </Link>
            <div>
                <Link to="/" style={{ color: '#000', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
                <Link to="/products" style={{ color: '#000', textDecoration: 'none' }}>Products</Link>
            </div>
        </nav>
    );
}

export default Navbar;
