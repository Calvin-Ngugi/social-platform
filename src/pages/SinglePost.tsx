import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState<any>({});
  const [comments, setComments] = useState<any[]>([]);

  const { postId } = useParams();
  useEffect(() => {
    // Fetch the selected post
    axiosClient
      .get(`/posts/${postId}`)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });

    // Fetch comments for the selected post
    axiosClient
      .get(`/posts/${postId}/comments`)
      .then(({ data }) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Comments:</h2>
      <ul>
        {comments.map((comment: any) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePost;
