import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

interface Comment {
  id: number;
  body: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    api.get(`/comments?postId=${id}`).then((res) => setComments(res.data));
  }, [id]);

  return (
    <>
      <div>
        <h2>Post {id}</h2>
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PostDetail;
