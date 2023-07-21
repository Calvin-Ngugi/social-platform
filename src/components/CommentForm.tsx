const CommentForm = ({ handleAddComment, newComment, setNewComment }: any) => {
  return (
    <form
      onSubmit={handleAddComment}
      className="flex flex-col justify-between items-baseline border-2 w-[90%] p-3 border-slate-600"
    >
      <input
        type="text"
        className="outline-none text-[18px] border-slate-600 w-[100%] border-b-2 mb-2"
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
