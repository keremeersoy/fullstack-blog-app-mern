import React from "react";

export default function Post() {
  return (
    <div className="flex mx-48 my-10 gap-10">
      <div className="w-[650px]">
        <img
          src="https://miro.medium.com/v2/resize:fit:828/0*af6qZrOt3hXhUqYc"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          How to Fetch API Data in React Like a Pro
        </h2>
        <p className="mt-2">
          <a className="text-lg mr-6 text-gray-600" href="">
            kerem ersoy
          </a>
          <time>2023-03-21 10:40</time>
        </p>
        <p className="mt-2 text-lg ">
          How This Simple Technique Will Boost User Experience? The technique we
          are going to talk about is known as render as you fetch. This simple
          technique is also suggested by React itself while fetching data.How
          This Simple Technique Will Boost User Experience? The technique we are
          going to talk about is known as render as you fetch.
        </p>
      </div>
    </div>
  );
}
