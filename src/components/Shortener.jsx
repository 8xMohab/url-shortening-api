import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useShortenLinkMutation } from "../features/api/apiSlice";
import UrlList from "../features/url/UrlList";
import { setNewUrls, useUrlSlice } from "../features/url/urlSlice";
function Shortener() {
  const dispatch = useDispatch();
  const urls = useSelector((state) => useUrlSlice(state));
  const [shortenLink] = useShortenLinkMutation();
  // local states: validating url, url input. and submit handling
  const [url, setUrl] = useState("");
  const [valid, setValid] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate if it's a link (thanks chat-gpt)
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (regex.test(url)) {
      setValid(true);
      const data = await shortenLink(url).unwrap();
      dispatch(setNewUrls(data));
      localStorage.setItem("urls", JSON.stringify([...urls, data]));
    } else {
      setValid(false);
    }
  };
  return (
    <div className="relative container">
      <div className="container bg-dark-violet flex) bg-right-bottom bg-no-repeat rounded-lg bg-contain p-0 relative -translate-y-1/2">
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="./bg-shorten-desktop.svg"
            className="absolute right-0 rounded-lg h-full w-full"
          />
          <img
            src="./bg-shorten-mobile.svg"
            alt="bg-shorten"
            className="absolute right-0 rounded-lg h-full lg:w-full"
          />
        </picture>
        <form
          onSubmit={handleSubmit}
          className="flex w-full p-6 lg:p-8 flex-col lg:flex-row"
        >
          <div
            className={`relative mr-4 w-full flex-1 ${
              valid ? "" : "mb-7 lg:mb-0"
            }`}
          >
            <input
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
              className={`flex-1 relative pl-5 py-2 outline-none rounded-lg text-grayish-violet w-full mb-4 lg:mb-0 z-10 ${
                valid
                  ? ""
                  : "text-red placeholder:text-red border-red border-2 placeholder:opacity-50"
              }`}
            />
            <span
              className={`text-red italic absolute left-0 -bottom-2 lg:-bottom-6 text-sm ${
                valid ? "hidden" : ""
              }`}
            >
              Please add a valid link
            </span>
          </div>
          <button
            type="submit"
            className="btn-primary btn-primary-fhover rounded-lg px-8"
          >
            <p>Shorten It!</p>
          </button>
        </form>
      </div>
      <UrlList />
    </div>
  );
}
export default Shortener;
