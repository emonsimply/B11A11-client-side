import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-lg rounded-2xl p-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn  bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600 transition"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Login */}
        <button className="btn w-full rounded-full text-black bg-white">
          <FcGoogle />Login with Google
        </button>

        {/* Redirect link */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-teal-500 font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
