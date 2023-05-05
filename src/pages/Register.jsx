import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img
              src="https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-gallery-logo-icon-design-template-vector-png-image_1048779.jpg"
              alt=""
            />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
