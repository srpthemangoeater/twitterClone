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
          <div className="TweetInput">
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
