import useFetch from '../hooks/useFetch';
import Loading from './Loading';

const FetchingData = () => {
  const { data, error, loading } = useFetch('posts');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred.</p>;
  }

  return (
    <>
      {data?.map((post) => (
        <div key={post.id}>
          <p><strong>{post.title}</strong></p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default FetchingData;
