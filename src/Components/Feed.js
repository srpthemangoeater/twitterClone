import React, { useState } from "react";
import Tweet from "./Tweet";

import "./Feed.css";

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState("");

  const handleTweetTextChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweetText) {
      const tweet = {
        id: new Date().getTime(),
        username: "your_username",
        content: tweetText,
      };

      setTweets([tweet, ...tweets]);
      setTweetText("");
    }
  };

  return (
    <div className="Feed">

      {/* <div className="FeedHeader">
        <div className="Header">หน้าแรก</div>
        <div className="Tab">
          <div className="Tab-foryou">สำหรับคุณ</div>
          <div className="Tab-following">กำลังติดตาม</div>
        </div>
      </div> */}

          <div className="TweetInput">
            <div className="UserAccount">
                <img
                  src="https://pbs.twimg.com/profile_images/1641773130279690240/4Qcrl-lP_400x400.jpg"
                  alt="User Profile"
                />
            </div>

              <textarea
                placeholder="What's on your mind?"
                value={tweetText}
                onChange={handleTweetTextChange}
              />

              <button onClick={handleTweetSubmit}>Tweet</button>
          </div>


          <div className="TweetFeed">
            {tweets.map((tweet) => (
              <div className="TweetItem" key={tweet.id}>
                <Tweet username={tweet.username} content={tweet.content} />
              </div>
            ))}
          </div>
        
        </div>
  );
};

export default Feed;
