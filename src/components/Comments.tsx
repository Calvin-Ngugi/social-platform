import { FaUser } from "react-icons/fa";

const Comments = ({comment}: any) => {
  return (
    <div key={comment.id} className="my-5">
      <div className="flex gap-2 items-center">
        <FaUser className="rounded-full outline p-1 w-5 h-5" />
        <h6 className="font-bold">{comment.email}</h6>
      </div>
      <p className="mt-1">{comment.body}</p>
    </div>
  );
}

export default Comments