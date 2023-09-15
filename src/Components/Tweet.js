import React from "react";
import "./Tweet.css";

const Tweet = ({ username, content }) => {
  return (
    <div className="Tweet">

    <div className="UserAccount">
        <img
          src="https://pbs.twimg.com/profile_images/1641773130279690240/4Qcrl-lP_400x400.jpg"
          alt="User Profile"
        />
        <div className="UserInfo">
          <span>
            <span className="UserName">displayName</span>
            <span className="UserHandle">@your_username</span>
          </span>
        </div>
    </div>

      <div className="TweetContent">
        <p className="TweetText">{content}</p>
      </div>
    </div>
  );
};

export default Tweet;