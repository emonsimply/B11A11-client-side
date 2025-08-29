import Lottie from 'lottie-react';
import React from 'react';
import notFoundAnimation from '../assets/lotties/Page Not Found 404.json';

const NotFound = () => {
  return (
    <div>
      <Lottie animationData={notFoundAnimation}></Lottie>
    </div>
  );
};

export default NotFound;