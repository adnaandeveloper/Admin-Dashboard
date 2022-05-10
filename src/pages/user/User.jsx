import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@material-ui/icons';
import React from 'react';
import './user.css';
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3 className="userTitle">Edit User</h3>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              src="https://historycouk.s3.eu-west-2.amazonaws.com/s3fs-public/2020-07/gettyimages-1132214_1.jpg"
              alt=""
              className="userDisplayImg"
            />
            <div className="userDisplayTopTitle">
              <span className="userDisplayUserName">Adnaan Mohamud</span>
              <span className="userDisplayUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplayTitle"> Account Details</span>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">AbuZeyd</span>
            </div>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">12.3.2022</span>
            </div>
            <span className="userDisplayTitle"> Contact Details</span>
            <div className="userDisplayInfo">
              <PhoneAndroid className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">+4550455278</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">abuuzeyd@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
              <LocationSearching className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">Aarhus</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
};

export default User;
