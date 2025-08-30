import React from 'react';
import Banner from './Banner';
import FeaturedPackages from './FeaturedPackages';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials ';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;