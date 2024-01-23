import AboutComp from "../components/AboutComponent";
import Bannier from "../components/bannier";
import img from "../assets/images/Imagesource2.png"
import '../assets/sass/About.scss'
function App() {
  return (
    <div className="App">
      <Bannier src={img} alt='image d"un decors'/>
      <div className="aboutDiv">
        <AboutComp title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
        <AboutComp title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
  perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <AboutComp title="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
  perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <AboutComp title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
  correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
  locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
  également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
    </div>
  );
}

export default App;
