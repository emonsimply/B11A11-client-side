import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { ToastContainer, toast } from 'react-toastify';

const SocialLogin = () => {

const { signInWithGoogle } = use(AuthContext);

const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then(result => {
    console.log(result.user);
    toast("Logged In Successfully");
  })
  .catch(error => {
    console.log(error);
    toast(`${error.message}`);
  })
}

  return (
    <div>
      <div className="divider">OR</div>
      <ToastContainer />
      <button onClick={handleGoogleSignIn} className="btn w-full rounded-full text-black bg-white">
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
