import React from "react";
import "../RecentPost/RecentPost.css";

const RecentPost = ({ image, title, date }) => {
  return (
    <div className="recent-post">

      <img src={image} alt={title} className="recent-image" />

      <div className="recent-content">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>

    </div>
  );
};

export default RecentPost;