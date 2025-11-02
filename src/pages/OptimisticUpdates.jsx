import { useEffect, useState } from 'react';
import { fetchFrom, deletePost } from '../utils';

const OptimisticUpdates = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchFrom('posts', (data) => setPosts(data.slice(0, 3)));
  }, []);

  const handleDeletePost = async (id) => {
    try {
      // Essentially just a delay...
      await deletePost(id);

      // Here we set the posts to what we would receive from the API
      setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
      console.log('Delete done!');
    } catch (error) {
      console.error('Delete failed, reverting...', error);
    }
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Optimistic Updates</h2>

      <h3>Posts</h3>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h4 className="text-capitalize">{post.title}</h4>
            <p>{post.body}</p>
            <button
              className="btn btn--danger"
              onClick={() => handleDeletePost(post.id)}
            >
              Delete Post
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OptimisticUpdates;
