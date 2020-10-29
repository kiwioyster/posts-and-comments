import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IComments } from '../type';
interface Props {
  postId: number;
}

const Comments: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<IComments[]>([]);
  const COMMENTS_URL = 'http://jsonplaceholder.typicode.com/comments';
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${COMMENTS_URL}?postId=${postId}`);
        setComments(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchComments();
  }, [postId]);

  return (
    <ul>
      {comments.map((comment, i) => {
        return (
          <li style={{ border: 'solid 1px black', margin: '12px' }} key={i}>
            <p>Comment name: {comment.name}</p>
            <p>Comment email: {comment.email}</p>
            <p>Comment body: {comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
