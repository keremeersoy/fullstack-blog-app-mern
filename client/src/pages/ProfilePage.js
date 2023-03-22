import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

export default function ProfilePage() {
  //   const { setUserInfo, userInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/profile/${id}`).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        // console.log(userInfo);
      });
    });
  }, []);

  //   useEffect(() => {
  //     fetch(`http://localhost:4000/profile/${id}`, {
  //       credentials: "include",
  //     }).then((response) => {
  //       response.json().then((userInfo) => {
  //         // setUsername(userInfo.username);
  //         setUserInfo(userInfo);
  //         console.log(id);
  //       });
  //     });
  //   }, []);

  if (!userInfo) return "";

  return (
    <div className="text-white">
      <div className="flex items-center justify-center text-4xl font-bold">
        {userInfo.username} Posts
      </div>
      <div>
        {userInfo.posts &&
          userInfo.posts.map((post) => <Post key={post._id} {...post} />)}
      </div>
    </div>
  );
}
