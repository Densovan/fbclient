import React, { useState } from "react";

const Des = () => {
  const [value, setValue] = useState({
    fullname: "",
    major: "",
    des: "",
  });
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Successfully");
  };

  const { fullname, major, des } = value;
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <center>
        {message === "" ? (
          ""
        ) : (
          <h1 className="text-center mt-12 bg-green-400 w-96 p-3 rounded-md">
            {message}
          </h1>
        )}
      </center>
      <h1 className="text-center text-2xl mt-12">
        Survey Technology Advantage
      </h1>
      <form onSubmit={handleSubmit}>
        <center>
          <div className="w-[600px]">
            <input
              className="border w-full p-2 border-gray-300 rounded-md text-lg mt-4"
              placeholder="fullname"
              value={fullname}
              onChange={handleChange}
              name="fullname"
            />
            <br />
            <input
              className="border w-full p-2 border-gray-300 rounded-md text-lg mt-4"
              placeholder="major"
              value={major}
              onChange={handleChange}
              name="major"
            />
            <textarea
              className="border w-full p-2 border-gray-300 rounded-md text-lg mt-4"
              placeholder="Your Descrbtion"
              value={des}
              onChange={handleChange}
              name="des"
            />
          </div>
          {des === "" || major === "" || fullname === "" ? (
            <button
              disabled
              className="mb-2 w-96 bg-blue-200 p-2 mt-6 font-bold text-white text-lg rounded-md"
            >
              Submit
            </button>
          ) : (
            <button className="mb-2 w-96 bg-blue-500 p-2 mt-6 font-bold text-white text-lg rounded-md">
              Submit
            </button>
          )}
        </center>
      </form>
    </div>
  );
};

export default Des;
