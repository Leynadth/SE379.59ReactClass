import { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';

const Products = () => {
  const { data: products, loading, error } = useFetch<Product[]>(`${process.env.PUBLIC_URL}/products.json`);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sort === 'name-asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'name-desc') {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [products, search, sort]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fragrances</h2>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search fragrances..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />

        <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '8px' }}>
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '16px',
            backgroundColor: '#fff',
            width: '250px',
            transition: 'transform 0.2s',
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ margin: '10px 0 5px', fontSize: '1.1rem', color: ' black' }}>{product.name}</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>${product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`} style={{
              marginTop: '10px',
              display: 'inline-block',
              backgroundColor: '#800020',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              textDecoration: 'none'
            }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
