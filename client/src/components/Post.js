import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="lg:flex mx-auto my-12 gap-6 w-3/4 bg-gray-100">
      <Link to={`/post/${_id}`} className="max-w-[400px]">
        <img
          src={"http://localhost:4000/" + cover}
          alt=""
          className="object-fill w-full h-full"
        />
      </Link>

      <div className="p-4">
        <Link to={`/post/${_id}`}>
          <h1 className="text-3xl font-bold lg:mt-0 mt-4">{title}</h1>
        </Link>
        <p className="mt-4">{summary}</p>
        <p className="flex gap-6 mt-4 text-gray-500">
          <a href="">{author.username}</a>
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
        </p>
      </div>
    </div>

    // <div className="flex mx-48 my-10 gap-10">
    //   <div className="w-[500px] ">
    //     <img
    //       src="https://miro.medium.com/v2/resize:fit:828/0*af6qZrOt3hXhUqYc"
    //       alt=""
    //     />
    //   </div>
    //   <div>
    //     <h2 className="text-3xl font-bold">
    //       How to Fetch API Data in React Like a Pro
    //     </h2>
    //     <p className="mt-2">
    //       <a className="text-lg mr-6 text-gray-600" href="">
    //         kerem ersoy
    //       </a>
    //       <time>2023-03-21 10:40</time>
    //     </p>
    //     <p className="mt-2">
    //       How This Simple Technique Will Boost User Experience? The technique we
    //       are going to talk about is known as render as you fetch. This simple
    //       technique is also suggested by React itself while fetching data.How
    //       This Simple Technique Will Boost User Experience? The technique we are
    //       going to talk about is known as render as you fetch.How This Simple
    //       Technique Will Boost User How This Simple Technique Will Boost User
    //       Experience? as render as you fetch.How This Simple Technique Will
    //       Boost User How This Simple Technique Will Boost User Experience?
    //     </p>
    //   </div>
    // </div>
  );
}
