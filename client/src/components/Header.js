import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Header() {
  //   const [username, setUsername] = useState(null);
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        // setUsername(userInfo.username);
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    // setUsername(null);
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="flex items-center justify-between  py-4 mb-8 px-24 bg-[#079aa8] text-white">
      <Link to="/" className="text-4xl font-bold">
        MernBlog
      </Link>
      <nav className="flex gap-10 text-lg items-center">
        {username && (
          <>
            <Link
              to="/create"
              className="bg-[#EEEEEE] text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white duration-300"
            >
              Create New Post
            </Link>
            <Link
              to={`/profile/${userInfo.id}`}
              className="hover:text-black duration-300"
            >
              Profile
            </Link>
            <a
              className="hover:text-black duration-300 cursor-pointer"
              onClick={logout}
            >
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="hover:text-black duration-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-black duration-300">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
