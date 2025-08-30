import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
const [errorMessage, setErrorMessage] = useState(" ");
  const {createUser} = use(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);



    setErrorMessage("");

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must include an uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must include a lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }


    // createUser
    createUser (email, password)
    .then(result => {
      console.log(result.user);
      toast("User Registered Successfully" );
    })
    .catch(error =>{
      console.log(error);
      setErrorMessage(error.message);
      toast(`${error.message}` );
    })

  }

  return (
    <div className="flex items-center justify-center px-4">
      <ToastContainer />
          <div className="w-full max-w-md shadow-lg rounded-2xl p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
              Register
            </h2>
    
            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
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
                Register Now
              </button>

              {errorMessage && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {errorMessage}
            </p>
          )}
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