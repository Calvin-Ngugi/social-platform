import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import { useParams } from "react-router-dom";
import Like from "../components/Like";
import { AiOutlineShareAlt } from "react-icons/ai";
import Comments from "../components/Comments";
import CommentForm from "../components/CommentForm";

const SinglePost = ({ loggedInUser }: any) => {
  const [post, setPost] = useState<any | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    // Fetch the selected post
    axiosClient
      .get(`/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });

    // Fetch comments for the selected post
    axiosClient
      .get(`/posts/${id}/comments`)
      .then(({ data }) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  const handleAddComment = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // You should have a function to post the new comment to the API
    // For simplicity, we'll just add the comment to the state here
    const newCommentObject = {
      postId: post.id,
      id: comments.length + 1, // Replace this with the actual ID from the API
      name: loggedInUser.username, // Replace this with the logged-in user's name
      email: loggedInUser.email, // Replace this with the logged-in user's email
      body: newComment,
    };

    // Update the comments state with the new comment
    setComments([...comments, newCommentObject]);
    setNewComment("");
  };

  const displayComments = comments.map((comment: any) => (
    <Comments comment={comment} key={comment.id} />
  ));

  if (!post || post.length === 0) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="sm:ms-0 ms-10 mr-10 mt-20">
      <div className="mb-5">
        <h1 className="font-bold text-[20px] uppercase">{post.title}</h1>
        <p className="mt-5">{post.body}</p>
      </div>
      <div className="mb-5 mr-7">
        <hr />
        <div className="my-2 flex items-center justify-around">
          <Like />
          <span className="flex items-center gap-2 cursor-pointer">
            <AiOutlineShareAlt className="h-5 w-5" /> Share
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between my-5">
          <p className="text-[18px]">Leave a comment:</p>
          <CommentForm
            handleAddComment={handleAddComment}
            newComment={newComment}
            setNewComment={setNewComment}
          />
        </div>
        <hr />
      </div>
      <h2 className="font-semibold text-[20px]">Comments:</h2>
      {displayComments}
    </div>
  );
};

export default SinglePost;
