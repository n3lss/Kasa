import { Navigate, useParams } from "react-router-dom";
import Colaps from "./Colaps";
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
      starsHTML.push(<Star color={true} key={i}/>);
    } else {
      starsHTML.push(<Star color={false} key={i}/>);
    }
 }
 return <div>{starsHTML}</div>;
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
              {appartement.tags.map(tag => {
                return <span className="badge rounded-pill bg-primary" key={tag}>{tag}</span>
              })}
            </div>
          </div>

          <div className="hostInfo">
            <div className="hostName">
              <h2>
                {appartement.host.name}
              </h2>
              <img src={appartement.host.picture} alt={`${appartement.host.name}`}/>
            </div>
            <div className="rating">
              {starGenerator(appartement.rating)}
            </div>
          </div>
        </div>

        <div className="divColapse">
          <Colaps title="Description" text={appartement.description}/>
          <Colaps title="Équipement" text={appartement.equipments}/>
        </div>

      </div>

    </div>
  );
};

export default Card;
