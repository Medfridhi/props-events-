import React from 'react'
import PropTypes from "prop-types";
import "./profile.css"
 const Profile = ({ fullName,bio,profession,scrImage,clickButton}) => {
    return (
        <div>
            <ul>
          <li> <b>User:</b>{fullName} </li>
          
            <li> <b>Bio:</b>{bio} </li>
            
            <li><b> Profession:</b>{profession} </li>
            <img className="Image" src={scrImage} alt="avatar" />
            <button className="Button" onClick={clickButton} > ClickMe </button>
            </ul>
            <br></br>
        </div>
    )
    }
    Profile.propTypes = {
        fullName: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string,
      };
export default Profile;
