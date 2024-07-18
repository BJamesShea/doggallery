import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Header;
