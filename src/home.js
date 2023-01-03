import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl mt-12">
        Welcome to Technology Survey
      </h1>
      <center>
        <Link to="/login">
          <button className="w-[200px] mb-2 bg-blue-500 p-2 mt-6 font-bold text-white text-lg rounded-md">
            Login with Facebook
          </button>
        </Link>
      </center>
    </div>
  );
};

export default Home;
