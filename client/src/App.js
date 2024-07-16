// client/src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch users data from backend
    fetch('/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log('Error fetching users:', error));

    // Fetch posts data from backend API
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.log('Error fetching posts:', error));
  }, []);

  return (
    <div className="App">
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>Posts:</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
