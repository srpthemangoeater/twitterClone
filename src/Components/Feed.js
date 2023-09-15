// Feed.js
import React from "react";
import Tweet from "./Tweet";
// import "./Feed.css";

const tweetsData = [
  { id: 1, username: "user1", content: "This is a tweet!" },
  { id: 2, username: "user2", content: "Another tweet here." },
  // Add more tweets as needed
];

const Feed = () => {
  return (
    <div className="Feed">
      <h2>Twitter Feed</h2>
      <div className="TweetsList">
        {tweetsData.map((tweet) => (
          <Tweet key={tweet.id} username={tweet.username} content={tweet.content} />
        ))}
      </div>
    </div>
  );
};

export default Feed;