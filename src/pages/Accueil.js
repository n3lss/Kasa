import Bannier from "../components/bannier";
import img from "../assets/images/Imagesource1.png"
import Cart from "../components/Cards";
import '../assets/sass/Home.scss'
function Accueil() {

  return (
    <div className="accueil">
      <Bannier src={img} alt='image d"un decors' text='Chez vous, partout et ailleurs'/>
      <div className="apartementCard">
      <Cart/>
      </div>
    </div>
  );
}

export default Accueil;