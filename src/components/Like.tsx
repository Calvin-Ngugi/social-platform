import { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const Like = () => {
    const [likes, setLikes] = useState(false);
    const like = () => {
      setLikes(!likes);
    };
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={like}>
      {likes ? <AiFillLike /> : <AiOutlineLike />} Like
    </div>
  );
}

export default Like