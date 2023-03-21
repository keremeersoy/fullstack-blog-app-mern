import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }

  return (
    <form onSubmit={register} className="w-[600px] mx-auto">
      <h1 className="text-3xl font-bold my-10 text-center">Register</h1>
      <input
        type="text"
        placeholder="username"
        className="block w-full h-12 mb-2 border-2 border-gray-300 rounded-md  pl-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="block w-full h-12 mb-8 border-2 border-gray-300 rounded-md  pl-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className=" bg-green-400 w-full p-2 text-white rounded-md text-xl">
        Register
      </button>
    </form>
  );
}
