import React from "react";

import "./FeedHeader.css";

const FeedHeader = () => {
  return (
    <div className="FeedHeader">

        <div className="Header">หน้าแรก</div>

        <div className="Tab">
          <div className="Tab-foryou">สำหรับคุณ</div>
          <div className="Tab-following">กำลังติดตาม</div>
        </div>

    </div>
  );
};

export default FeedHeader;
