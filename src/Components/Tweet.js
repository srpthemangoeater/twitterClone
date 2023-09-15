// Tweet.js
import React from "react";
// import "./Tweet.css";

const Tweet = ({ username, content }) => {
  return (
    <div className="Tweet">
      <div className="TweetContent">
        <span className="TweetUsername">@{username}</span>
        <p className="TweetText">{content}</p>
      </div>
    </div>
  );
};

export default Tweet;