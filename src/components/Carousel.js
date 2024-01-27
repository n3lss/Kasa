import { useState } from "react";
import '../assets/sass/Carousel.scss';
import Vector from "./Vector";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.src;
  if (images.length < 2) {
    return (
      <div className="carousel" >
        <img src={images[currentIndex]} alt={`numero ${currentIndex + 1} des cover`} />
      </div>
    );
  }
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
        <Vector/> 
      </button>
      <img src={images[currentIndex]} alt={`numero ${currentIndex + 1} des cover`} />
      <button className="arrow right" onClick={goToNextSlide}>
        <Vector direction='right'/> 
      </button>
      <div className="position-indicator">{`${currentIndex + 1}/${images.length}`}</div>
    </div>
  );
}

export default Carousel;
