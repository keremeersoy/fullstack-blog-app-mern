import React from "react";

export default function Post() {
  return (
    <div className="lg:flex mx-auto my-12 gap-6 w-3/4 bg-gray-100">
      <img
        src="https://miro.medium.com/v2/resize:fit:828/0*af6qZrOt3hXhUqYc"
        alt=""
        className="xl:w-3/12 lg:w-4/12 object-fill"
      />

      <div className="p-4">
        <h1 className="text-3xl font-bold lg:mt-0 mt-4">
          How to Fetch API Data in React Like a Pro
        </h1>
        <p className="mt-4">
          How This Simple Technique Will Boost User Experience? The technique we
          are going to talk about is known as render as you fetch. This simple
          technique is also suggested by React itself while fetching data.How
          This Simple Technique Will Boost User Experience? The technique we are
          going to talk about is known as render as you fetch.How This Simple
          Technique Will Boost User How This Simple Technique Will Boost User
          Experience? as render as you fetch.How This Simple Technique Will
          Boost User How This Simple Technique Will Boost User Experience?
        </p>
        <p className="flex gap-6 mt-4 text-gray-500">
          <a href="">kerem ersoy</a>
          <time>2023-03-21 10:40</time>
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
