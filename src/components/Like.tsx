import { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const Like = () => {
  const [likes, setLikes] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
    const like = () => {
      setLikes(!likes);
      setLikesCount(likes ? likesCount - 1 : likesCount + 1);
    };
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={like}>
      {likes ? (
        <>
          <AiFillLike />
          {likesCount}{" "}
          Like
        </>
      ) : (
        <>
          <AiOutlineLike />
          {likesCount}{" "}
          Likes
        </>
      )}
    </div>
  );
}

export default Like