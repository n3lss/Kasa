import React from "react";
import { Navigate, useParams } from "react-router-dom";
import AboutComp from "./AboutComponent";
import json from '../apartement.json'
import Carousel from "./Carousel";
import Star from "./Star";
import '../assets/sass/Card.scss'
function Card() {
  const { id } = useParams();
  const appartement = json.find(item => item.id === id);
  if (!appartement) {
    return <Navigate to="/404"
    />;
  }
   function starGenerator (ratingstar) {
    let starsHTML = [];
    const rating = ratingstar;
    for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML.push(<Star color={true}/>);
    } else {
      starsHTML.push(<Star color={false}/>);
    }
 }
 return <div>{starsHTML}</div>;
  } 
  function tagsgGenerate(tags){
    let tagList=[]
    const tagLength = tags.length
    for (let i = 0; i < tagLength; i++){
      tagList.push(<p>{tags[i]}</p>)
    }
    return tagList
   }
  return (
    <div className='card'>

      <div>
        <Carousel src={appartement.pictures}/>
        <div className="appartementInfo">
          
          <div className="appartementLoc">
            <h1 className='title'>
              {appartement.title}
            </h1>
            <h2>
              {appartement.location}
            </h2>
            <div className="tag">
              {tagsgGenerate(appartement.tags)}
            </div>
          </div>

          <div className="hostInfo">
            <div className="hostName">
              <h2>
                {appartement.host.name}
              </h2>
              <img src={appartement.host.picture} alt={`${appartement.host.name}`}/>
            </div>
              {starGenerator(appartement.rating)}
          </div>
        </div>

        <div className="divColapse">
          <AboutComp title="Description" text={appartement.description}/>
          <AboutComp title="Équipement" text={appartement.equipments}/>
        </div>

      </div>

    </div>
  );
};

export default Card;
