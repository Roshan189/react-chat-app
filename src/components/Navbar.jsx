import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTROsqOnqOjfeLao7dyC78TW50pNg6hd7eeg&usqp=CAU"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
