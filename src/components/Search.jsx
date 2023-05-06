import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTROsqOnqOjfeLao7dyC78TW50pNg6hd7eeg&usqp=CAU"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
