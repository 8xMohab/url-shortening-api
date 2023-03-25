import React from "react";

function LinksList({ title, links }) {
  return (
    <div className="m-5 lg:mt-0">
      <h3 className="font-bold text-white m-3 lg:ml-0 lg:mt-0">{title}</h3>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li key={index + 5 * 8} className="text-gray m-1 hover:text-cyan">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinksList;
