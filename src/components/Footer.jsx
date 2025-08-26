import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-teal-700 text-white py-10 mt-12">
        <div className="flex justify-center mb-6">
          <a className="">
            <img src={logo} alt="logo" className="w-10 h-10 " />
          </a>
        </div>

        <div className="container max-w-7xl  mx-auto md:px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">TripNest</h2>
            <p>123 Travel Street, Dhaka, Bangladesh</p>
            <p>support@tripnest.com</p>
            <p> +880 123 456 789</p>
          </div>

          {/* Terms and Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">FAQs</p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center items-center gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-teal-500" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-teal-500" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-teal-500" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-teal-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm flex justify-center flex-wrap mt-8 md:flex-nowrap md:whitespace-nowrap opacity-60">
          © {new Date().getFullYear()} TripNest. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
