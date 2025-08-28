import React from 'react';
import Banner from './Banner';
import FeaturedPackages from './FeaturedPackages';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
    </div>
  );
};

export default Home;