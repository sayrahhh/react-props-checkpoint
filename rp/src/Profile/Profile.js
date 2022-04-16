import React from "react";
import PropTypes from "prop-types";
function Profile(props) {
  return (
    <div
      style={{
        display: "flex",
        background: "darkblue",
        width: "20rem",
        alignSelf: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div>{props.children}</div>

      <h1>Full Name: {props.fullName}</h1>
      <h3>
        {" "}
        Bio <br /> {props.bio}
      </h3>
      <h3>
        Profession <br /> {props.profession}
      </h3>
      <div>{props.handle()}</div>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "Deji Ice Money",
  bio: "i do love coding",
  profession: "i press computers for a living",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handle: PropTypes.func,
};

export default Profile;
