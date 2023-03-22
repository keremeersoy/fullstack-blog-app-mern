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
    <div className="lg:flex mx-auto my-12 gap-6 w-3/4 bg-[#343541] text-white">
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
          {author.username && (
            <Link to={`profile/${author._id}`}>{author.username}</Link>
          )}
          {/* {console.log(author)} */}
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
        </p>
      </div>
    </div>
  );
}
