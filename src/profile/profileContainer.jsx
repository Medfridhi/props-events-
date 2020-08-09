import React from "react";
import Profile from "./profileComponent";
import PropTypes from "prop-types";

const ProfileContain = ({ profiles }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Profile
          fullName={profile.fullName}
          bio={profile.bio}
          profession={profile.profession}
          scrImage={profile.image}
          clickButton={()=>alert(profile.link)}
        />
      ))}
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default ProfileContain;
