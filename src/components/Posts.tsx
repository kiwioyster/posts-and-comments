import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IPost } from '../type';
import Comments from './Comments';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const POSTS_URL = 'http://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(POSTS_URL);
        setPosts(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post, i) => {
        return (
          <li key={i}>
            <h1>Post Title: {post.title}</h1>
            <p>Body: {post.body}</p>

            <Comments postId={post.id}></Comments>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
