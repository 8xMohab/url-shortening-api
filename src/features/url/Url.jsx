import React, { useState } from "react";
function Url({ longUrl, shortUrl }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    // save the url to the user's clipboard
    navigator.clipboard.writeText(shortUrl);
  };
  return (
    <div className="flex bg-white flex-col mb-6 last:mb-0 p-4 rounded-lg lg:flex-row lg:justify-between">
      <p className="text-very-dark-violet py-3 relative lg:flex-1 lg:items-center">
        {longUrl}
        <span className="absolute w-135% h-[1px] bg-gray bottom-0 -left-5 lg:hidden"></span>
      </p>

      <p className="text-cyan py-3 lg:mr-5">{shortUrl}</p>
      <button
        className={`btn-primary btn-primary-fhover w-full rounded-lg lg:w-fit lg:px-8 ${
          copied ? "bg-dark-violet btn-primary-nhover" : ""
        }`}
        onClick={handleCopy}
      >
        {copied ? <p>Copied!</p> : <p>Copy</p>}
      </button>
    </div>
  );
}

export default Url;
