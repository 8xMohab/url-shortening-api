import React from "react";
import { Link } from "react-router-dom";

function LinkComp({ props }) {
  return (
    <li
      onClick={() => {
        props.setClickedLink(props.link.toLowerCase());
        props.setLinksList(false);
      }}
      className={`mx-4 hover:text-very-dark-blue font-bold ${props.style}`}
    >
      <Link
        className={`${
          props.clickedLink === props.link.toLowerCase()
            ? "text-very-dark-violet"
            : ""
        }`}
        to={`/url-shortening-api/${props.link}`}
      >
        {props.link}
      </Link>
    </li>
  );
}

export default LinkComp;
