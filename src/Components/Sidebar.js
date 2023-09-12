import React from "react";
import "./Sidebar.css";
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

function Sidebar() {
  return (
    <div className="Sidebar">
      
      <div className="Navbar">
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="หน้าแรก"/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="สำรวจ" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="การแจ้งเตือน" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary="ข้อความ" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="รายชื่อ" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="บุ๊คมาร์ก" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="ยืนยันแล้ว" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="ข้อมูลส่วนตัว" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoreHorizIcon />
            </ListItemIcon>
            <ListItemText primary="เพิ่มเติม" />
          </ListItem>
        </List>
      </div>

      <div className="PostButton">
        <button>โพสต์</button>
      </div>

      <div className="UserAccount">
          <img
            src="https://pbs.twimg.com/profile_images/1641773130279690240/4Qcrl-lP_400x400.jpg" // Replace with the user's profile picture
            alt="User Profile"
          />
          <div className="UserInfo">
            <span className="UserName">displayName</span>
            <span className="UserHandle">@username</span>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
