import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = (props) => {
  const [queryStr, setQueryStr] = useState("");
  const setSongs = props.setSongs;

  useEffect(() => {
    let delayTimer;

    if (delayTimer) clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      if (queryStr.length) {
        fetch(
          `https://sound-io-backend.herokuapp.com/api/song_query/?query=${queryStr}`
        )
          .then((data) => data.json())
          .then((data) => setSongs(data));
      } else {
        fetch("https://sound-io-backend.herokuapp.com/api/home_feed")
          .then((data) => data.json())
          .then((data) => {
            setSongs(data);
          });
      }
    }, 1000);
  }, [queryStr, setSongs]);

  return (
    <div
      className="card container mt-4"
      style={{ width: 900, display: props.loading ? "none" : "block" }}
    >
      <div className="p-4 d-flex align-items-center">
        <input
          type="text"
          className="form-control form-control-lg me-3"
          placeholder="Search for songs..."
          value={queryStr}
          onChange={(e) => setQueryStr(e.target.value)}
        />
        <BiSearch style={{ fontSize: 33 }} />
      </div>
    </div>
  );
};

export default SearchBar;
