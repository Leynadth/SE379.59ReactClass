import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the full list of products from the JSON file
    axios.get('/products.json')
      .then((response) => {
        // Find the specific product that matches the current id
        const found = response.data.products.find(p => p.id === parseInt(id));
        // Save that product to local state
        setProduct(found);
      })
      .catch((error) => {
        // If something geos wrong, log the error
        console.error("Error loading product:", error);
      });
  }, [id]); // Re-run the effect if the id changes

  // If the product hasn't been loaded yet so show a loading message
  if (!product) return <p>Loading product...</p>;

  // Display the product information once its available
  return (
    <div style={{
      padding: '20px',
      color: '#FFD700',
      fontFamily: "'Caveat', cursive"
    }}>
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} width="300" />

      <p>{product.description}</p>

      <p><strong>Price:</strong> ${product.price}</p>

      <button onClick={() => navigate('/products')}>Back</button>
    </div>
  );
}

export default ProductPage;
