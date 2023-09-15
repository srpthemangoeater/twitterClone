import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Navbar">
        <List>
          {[
            { icon: <HomeIcon />, text: "หน้าแรก" },
            { icon: <ExploreIcon />, text: "สำรวจ" },
            { icon: <NotificationsIcon />, text: "การแจ้งเตือน" },
            { icon: <MessageIcon />, text: "ข้อความ" },
            { icon: <PeopleIcon />, text: "รายชื่อ" },
            { icon: <BookmarkIcon />, text: "บุ๊คมาร์ก" },
            { icon: <CheckCircleIcon />, text: "ยืนยันแล้ว" },
            { icon: <PersonIcon />, text: "ข้อมูลส่วนตัว" },
            { icon: <MoreHorizIcon />, text: "เพิ่มเติม" }
          ].map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        style: {
                          display: 'flex',
                          alignItems: 'center', 
                          justifyContent: 'flex-end', 
                          textAlign: 'right',
                        },
                      }}
                    />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="PostButton">
        <button>โพสต์</button>
      </div>

      <div className="UserAccount">
        <img
          src="https://pbs.twimg.com/profile_images/1641773130279690240/4Qcrl-lP_400x400.jpg"
          alt="User Profile"
        />
        <div className="UserInfo">
          <span className="UserName">displayName</span>
          <span className="UserHandle">@username</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
