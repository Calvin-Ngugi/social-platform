const CommentForm = ({ handleAddComment, newComment, setNewComment }: any) => {
  return (
    <form
      onSubmit={handleAddComment}
      className="flex flex-col justify-between items-baseline w-[90%] p-3"
    >
      <input
        type="text"
        className="outline-none text-[18px] w-[100%] mb-3 "
        required
        placeholder="Reply"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        className="outline-none p-1 px-2 rounded-lg bg-blue-500 hover:bg-blue-700 hover:outline-none hover:text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
