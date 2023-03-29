import React from "react";
import "../App.css";

const User = ({ userData }) => {
  const {
    picture: { large: imageURL },
    name: { first, last },

    location: { country },
  } = userData;

  return (
    <div className="App">
      <img src={imageURL} alt={`${first} ${last}`} />
      <h2>
        {first} {last}
      </h2>
      <p>{country}</p>
    </div>
  );
};

export default User;
