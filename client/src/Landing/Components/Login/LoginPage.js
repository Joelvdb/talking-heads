import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import LabeledInput from "../General/LabeledInput";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { email, password, formValid, handleChange } = useForm();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    let data;
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        data = await response.json();
        navigate("/main/1");
      }
    } catch (error) {
      console.log(error);
      return;
    }

    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        className="flex flex-col gap-4 bg-gray-400 p-8 rounded-md"
      >
        <LabeledInput
          labelText="Email Address"
          type="email"
          handleChange={handleChange}
          state={email}
          name="email"
        />
        <LabeledInput
          labelText="Password"
          type="password"
          handleChange={handleChange}
          state={password}
          name="password"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white font-bold p-1 text-center disabled:bg-blue-400"
          // disabled={!formValid}
          onClick={submitHandler}
        >
          Login
        </button>
        <Link
          className="bg-blue-700 text-white font-bold p-1 text-center disabled:bg-blue-400"
          to="/signup"
        >
          Signup
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
