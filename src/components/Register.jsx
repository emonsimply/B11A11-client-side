import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="flex items-center justify-center px-4">
          <div className="w-full max-w-md shadow-lg rounded-2xl p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
              Register
            </h2>
    
            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
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
              <div>
                <label className="block mb-1 text-sm text-gray-700">Photo URL</label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered w-full"
                  required
                />
              </div>
    
              <button
                type="submit"
                className="w-full btn  bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600 transition"
              >
                Register
              </button>
            </form>

            {/* Redirect link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-500 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
          </div>
        </div>
  );
};

export default Register;