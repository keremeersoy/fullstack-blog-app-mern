import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createNewPost}>
      <div className="flex items-center justify-center my-4 text-white">
        <input
          className="w-3/4 block bg-[#393E46] p-4 outline-gray-300"
          type="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center my-4 text-white">
        <input
          className="w-3/4 block bg-[#393E46] p-4 outline-gray-300"
          type="summary"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-center my-4">
        <input
          type="file"
          onChange={(e) => setFiles(e.target.files)}
          className="bg-[#393E46] text-white w-3/4"
        />
      </div>
      <div className="flex items-center justify-center">
        <ReactQuill
          className="w-3/4 text-white"
          value={content}
          modules={modules}
          formats={formats}
          onChange={(newValue) => setContent(newValue)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-green-500 w-3/4 p-2 rounded-md mt-4 text-white">
          Create Post
        </button>
      </div>
    </form>
  );
}
