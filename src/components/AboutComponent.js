import React, { useState } from 'react';
import '../assets/sass/AboutComp.scss';
import arrow from '../assets/images/arrow_back_ios-24px 2.svg'

function AboutComp(props) {
  const [isActive, setIsActive] = useState(false);

  const activeClass = () => {
    setIsActive(!isActive);
  };
  const isArray = Array.isArray(props.text);
  const isString = typeof props.text === 'string';
  return (
    <div className='AboutCompDivH2' >
      <div className='title'>
      <h2 onClick={activeClass}>{props.title}</h2>
      <img alt='fleche' src={arrow} className={`arrow-icon ${isActive ? 'up' : 'down'}`} onClick={activeClass}/>
      </div>
      <div className={`aboutCompDivP ${isActive ? 'active' : ''}`}>
      {isArray && (
          <ul>
            {props.text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {isString && <p>{props.text}</p>}
      </div>
    </div>
  );
}

export default AboutComp;
