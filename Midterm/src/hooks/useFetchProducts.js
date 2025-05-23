// Import React hooks and axios for making HTTP requests
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom React hook to fetch product data from a given URL
function useFetchProducts(url) {
  // Declare state to store the list of products
  const [products, setProducts] = useState([]);
  // Declare state to track whether data is still loading
  const [loading, setLoading] = useState(true);

  // useEffect runs once when the component using this hook mounts,
  // or when the `url` dependency changes
  useEffect(() => {
    console.log("Fetching from:", url); // Log which URL we are fetching from

    // Use axios to make a GET request to the provided URL
    axios.get(url)
      .then((response) => {
        // Log the full response to verify what we received
        console.log("Axios Response:", response.data);

        // Extract the 'products' array from the response and store it in state
        setProducts(response.data.products);

        // Set loading to false now that data is received
        setLoading(false);
      })
      .catch((error) => {
        // Log any error that happens during the fetch
        console.error("Axios Fetch Error:", error);

        // Still stop loading, even if there's an error
        setLoading(false);
      });

  }, [url]); // Dependency array ensures the effect runs again if the URL changes

  // Return the products and loading state so other components can use them
  return { products, loading };
}

// Export this hook so it can be used in ProductList or other components
export default useFetchProducts;
