import React from "react";
import Card from "../components/Card";

const Work = () => {
  return (
    <div className="min-h-screen bg-slate-50 w-full flex items-center justify-center">
      <div className="flex flex-col items-start max-w-3xl gap-5">
        <h1 className="text-6xl font-bold text-black text-center mt-20">
          Work
        </h1>
        <p>
          Here, you can find a collection of my projects and works that showcase
          my skills and creativity. Each project is a testament to my dedication
          and passion for what I do. Feel free to explore and get inspired!
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className="w-60 h-70 mt-5 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 text-sky-500 hover:scale-110 transition duration-500 ease-out"
              text="1"
            />
            <Card
              className="w-60 h-70 mt-5 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 text-sky-500 hover:scale-110 transition duration-600 ease-out"
              text="2"
            />
            <Card
              className="w-60 h-70 mt-5 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 text-sky-500 hover:scale-110 transition duration-600 ease-out"
              text="3"
            />
            <Card
              className="w-60 h-70 mt-5 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 text-sky-500 hover:scale-110 transition duration-600 ease-out"
              text="4"
            />
            <Card
              className="w-60 h-70 mt-5 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 text-sky-500 hover:scale-110 transition duration-600 ease-out"
              text="5"
            />
            <Card
              className="w-60 h-70 mt-5 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 text-sky-500 hover:scale-110 transition duration-600 ease-out"
              text="6"
            />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Work;
