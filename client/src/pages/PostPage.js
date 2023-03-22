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
      <div className="flex items-center justify-center mt-4 gap-10 text-gray-500">
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div>by @{postInfo.author.username}</div>
      </div>
      <h1 className="flex items-center justify-center text-4xl font-bold my-12">
        {postInfo.title}
      </h1>

      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
