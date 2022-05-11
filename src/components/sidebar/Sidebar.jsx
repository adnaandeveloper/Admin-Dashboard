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
import { Link } from 'react-router-dom';
import './sidebar.css';

const Dashboard = [
  {
    location: '/',
    icon: <LineStyle className="sidebarIcon" />,
    name: 'Home',
  },
  {
    location: '/',
    icon: <Timeline className="sidebarIcon" />,
    name: 'Analytics',
  },
  {
    location: '/',
    icon: <TrendingUp className="sidebarIcon" />,
    name: 'Sales',
  },
];

const quickMenu = [
  {
    location: '/users',
    icon: <PermIdentity className="sidebarIcon" />,
    name: 'Users',
  },
  {
    location: '/products',
    icon: <Storefront className="sidebarIcon" />,
    name: 'Products',
  },
  {
    location: '/',
    icon: <AttachMoney className="sidebarIcon" />,
    name: 'Transactions',
  },
  {
    location: '/',
    icon: <BarChart className="sidebarIcon" />,
    name: 'Reports',
  },
];

const notifications = [
  {
    location: '/',
    icon: <MailOutline className="sidebarIcon" />,
    name: 'Mail',
  },
  {
    location: '/',
    icon: <DynamicFeed className="sidebarIcon" />,

    name: 'Feedback',
  },
  {
    location: '/',
    icon: <ChatBubbleOutline className="sidebarIcon" />,

    name: 'Messages',
  },
];

const staf = [
  {
    location: '/',
    icon: <WorkOutline className="sidebarIcon" />,

    name: 'Manage',
  },
  {
    location: '/',
    icon: <Timeline className="sidebarIcon" />,

    name: 'Analytics',
  },
  {
    location: '/',
    icon: <Report className="sidebarIcon" />,
    name: 'Reports',
  },
];
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {Dashboard.map((item, index) => (
              <Link to={item.location} className="link">
                <li className="sidebarListItem" key={index}>
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {quickMenu.map((item, index) => (
              <Link to={item.location} className="link">
                <li className="sidebarListItem" key={index}>
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            {notifications.map((item, index) => (
              <Link to={item.location} className="link">
                <li className="sidebarListItem" key={index}>
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            {staf.map((item, index) => (
              <Link to={item.location} className="link">
                <li className="sidebarListItem" key={index}>
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
