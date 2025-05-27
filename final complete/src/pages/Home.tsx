import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay">
          <h1 className="title">Discover Your Signature Scent</h1>
          <p className="subtitle">Premium fragrances curated just for you.</p>
          <Link to="/products">
            <button className="shop-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
