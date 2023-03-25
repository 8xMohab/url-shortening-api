import React from "react";
import { useSelector } from "react-redux";
import Url from "./Url";
import { useUrlSlice } from "./urlSlice";
function UrlList() {
  const urls = useSelector((state) => useUrlSlice(state));
  return (
    <div className="-translate-y-12 lg:-translate-y-6">
      {urls.map((url) => (
        <Url
          key={url.short_id}
          longUrl={url.long_url}
          shortUrl={url.short_url}
        />
      ))}
    </div>
  );
}

export default UrlList;
