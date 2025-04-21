import React, { useState, useEffect } from 'react';
import './Image.css';  // You can style the component separately

const images = [
    '/photos/ankuram trip.jpeg',  // Image inside public/photos folder
    '/photos/Annual Sports Day.jpeg',
];

function Image() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="slider-container">
    <img className="slider-image" src={images[currentIndex]} alt="Slide" />
  </div>
  
  );
}

export default Image;
