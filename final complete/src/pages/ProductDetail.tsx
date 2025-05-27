import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Product } from '../types/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, loading, error } = useFetch<Product[]>(`${process.env.PUBLIC_URL}/products.json`);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const product = products?.find(p => p.id === Number(id));
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: '40px' }}>
      <Link to="/products" style={{
        marginBottom: '20px',
        display: 'inline-block',
        textDecoration: 'none',
        color: '#000',
        fontWeight: 'bold',
        background: '#f2f2f2',
        padding: '6px 12px',
        borderRadius: '6px',
      }}>
        ← Back to Products
      </Link>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '400px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{product.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '10px' }}>
            ${product.price.toFixed(2)}
          </p>
          <p style={{ fontSize: '1rem', color: '#333', marginBottom: '20px' }}>
            {product.description}
          </p>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              alert(`${product.name} has been added to Cart`);
            }}
            style={{
              padding: '12px 20px',
              fontSize: '1rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Add to Cart
          </button>

          <div style={{ marginTop: '30px' }}>
            <h3>Details</h3>
            <ul style={{ paddingLeft: '20px', color: '#555' }}>
              <li>Long-lasting scent</li>
              <li>Perfect for day or night</li>
              <li>Unisex fragrance profile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
