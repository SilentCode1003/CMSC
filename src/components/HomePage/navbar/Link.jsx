import React from "react";

const Link = ({ link, navTitle }) => {
  return (
    <div>
      <a href={link}>{navTitle}</a>
    </div>
  );
};

export default Link;
