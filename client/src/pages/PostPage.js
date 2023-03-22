import { formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="lg:mx-40 mx-12">
      <div className="flex justify-center">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div className="flex items-center justify-center gap-60 text-gray-500">
        <div>by @{postInfo.author.username}</div>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      </div>
      <h1 className="flex items-center justify-center text-4xl font-bold my-12 text-white ">
        {postInfo.title}
      </h1>

      <div
        className="text-white leading-7 "
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
