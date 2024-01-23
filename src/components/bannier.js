import '../assets/sass/Bannier.scss'

function Bannier(props) {
    
    return  (
        <div className='banner'>
            <h1 style={{backgroundImage: `url(${props.src})`}} className='bannerTitle'>
                {props.text}
            </h1>
        </div>
    )
};
    
export default Bannier;