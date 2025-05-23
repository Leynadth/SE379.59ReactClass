import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

function ProductList() {
  // Get products and loading state from custom hook
  const { products, loading } = useFetchProducts('/products.json');

  // Local state to hold the user's search input
  const [search, setSearch] = useState('');

  // Hook to navigate to product detail pages
  const navigate = useNavigate();

  // Log the products array for debugging
  console.log("products in ProductList:", products);

  // Show loading message while products are being fetched
  if (loading) return <p>Loading products...</p>;

  // Show a message if there are no products
  if (!products || products.length === 0) return <p>No products found.</p>;

  return (
    <div>
      {/* Title of the page */}
      <h1>Product List</h1>

      {/* Input field to filter products by title */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search state on input
      />

      {/* Flexbox container for product cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Filter and map through the products based on search input */}
        {products
          .filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#111',
                color: '#FFD700',
                border: '2px dashed #FFD700',
                borderRadius: '8px',
                padding: '10px',
                margin: '10px',
                width: '200px',
                fontFamily: "'Caveat', cursive",
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => navigate(`/products/${product.id}`)}

              // Slightly enlarge the card on hover
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}

              // Return to original size when not hovered
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={product.image} alt={product.title} width="100%" />

              <h4>{product.title}</h4>

              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
