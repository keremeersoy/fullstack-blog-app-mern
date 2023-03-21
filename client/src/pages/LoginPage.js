import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="w-[600px] mx-auto" onSubmit={login}>
      <h1 className="text-3xl font-bold my-10 text-center">Login</h1>
      <input
        type="text"
        placeholder="username"
        className="block w-full h-12 mb-2 border-2 border-gray-300 rounded-md pl-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="block w-full h-12 mb-8 border-2 border-gray-300 rounded-md pl-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className=" bg-green-400 w-full p-2 text-white rounded-md text-xl">
        Login
      </button>
    </form>
  );
}
