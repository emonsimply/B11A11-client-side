import React from 'react';
import { Link } from 'react-router';
import bannerImg from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section className="bg-teal-100 rounded-2xl">
      <div className=" p-8 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Side Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-500 leading-snug">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-gray-700">
            Explore amazing tour packages, book your dream trips, and make unforgettable memories. 
            We bring the best destinations closer to you.
          </p>

          <Link to="/allPackages">
            <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition">
              Explore All Packages
            </button>
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={bannerImg} 
            alt="Travel Banner"
            className="rounded-2xl shadow-lg border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;