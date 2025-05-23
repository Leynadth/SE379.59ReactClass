import { useEffect, useState } from "react";
import axios from "axios";

const Loading = () => {
    return <p>Loading...</p>;
  };

const FetchingData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
    <h1>Fetching Data</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FetchingData;
