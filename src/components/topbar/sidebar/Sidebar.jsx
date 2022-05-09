import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
import React from 'react';
import './sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sdiebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sdiebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sdiebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PermIdentity className="sdiebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Storefront className="sdiebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sdiebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sdiebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sdiebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sdiebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sdiebarIcon" />
              manages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className="sdiebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sdiebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sdiebarIcon" />
              Report
            </li>
            <li className="sidebarListItem">
              <Report className="sdiebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
