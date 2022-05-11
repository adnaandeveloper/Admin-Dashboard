import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const topRight = [
  {
    id: 1,
    icon: <NotificationsNone />,
    spanData: '2',
  },
  {
    id: 2,
    icon: <Language />,
    spanData: '2',
  },
  {
    id: 3,
    icon: <Settings />,
    spanData: '',
  },
];
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">Adnaan Admin</span>
          </Link>
        </div>
        <div className="topRight">
          {topRight.map((item) => (
            <div className="topbarIconContainer" key={item.id}>
              {item.icon}
              {item.spanData && (
                <span className="topIconBadge">{item.spanData}</span>
              )}
            </div>
          ))}
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
