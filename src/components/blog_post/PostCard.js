import React from "react";
import "./postcard.css";
const PostCard = ({ title, body, tags, reactions, views }) => {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{body}</p>

      <div className="tag-box">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="reactions">
        <p>👍 {reactions.likes}</p>
        <p>👎 {reactions.dislikes}</p>
        <p>👁️ {views}</p>
      </div>
    </div>
  );
};

export default PostCard;
