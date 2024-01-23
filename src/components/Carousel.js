import React, { useState } from "react";
import '../assets/sass/Carousel.scss';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.src;

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel" >
      <button className="arrow left" onClick={goToPrevSlide}>
        &lt; 
      </button>
      <img src={images[currentIndex]} alt={`numero ${currentIndex + 1} des cover`} />
      <button className="arrow right" onClick={goToNextSlide}>
        &gt; 
      </button>
      <div className="position-indicator">{`${currentIndex + 1}/${images.length}`}</div>
    </div>
  );
}

export default Carousel;
