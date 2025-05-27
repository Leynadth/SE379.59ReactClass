import { useState } from 'react';
import usePost from '../hooks/usePost';
import Loading from './Loading';

const PostForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { data, loading, error, postData } = usePost('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, body, userId: 1 });
    setFormVisible(false);
  };

  const handleGoBack = () => {
    setTitle('');
    setBody('');
    setFormVisible(true);
  };

  if (loading) {
    return <Loading />;
  }

  if (data && !formVisible) {
    return (
      <div>
        <h2>Post Submitted Successfully!</h2>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Body:</strong> {data.body}</p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Post</button>
      {error && <p>An error occurred. Please try again.</p>}
    </form>
  );
};

export default PostForm;
