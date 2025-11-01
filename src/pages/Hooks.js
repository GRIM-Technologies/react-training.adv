import { useEffect, useState } from 'react';
import { fetchFrom, permissions } from '../utils';

const Hooks = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchFrom('users', setUsers);
    fetchFrom('albums', setAlbums);
    fetchFrom('posts', setPosts);
  }, []);

  return (
    <div className="content-section">
      <h2 className="section-title">Hooks</h2>

      <h2>Users</h2>
      <ul>
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>

      <h2>Albums</h2>
      <ul>
        {albums?.map((album) => {
          return <li key={album.id}>{album.title}</li>;
        })}
      </ul>

      <h2>Posts</h2>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hooks;
