import { Link } from "react-router-dom";
import logoReact from '../assets/images/logoReact.png'

const Home = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Página Inicial</h1>
            <img 
            src={logoReact}
            alt="Logo React" 
            style={{width: "150px", marginBottom:"20px"}}
            />
            <p>Bem vindo a nossa primeira página usando React + Vite</p>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Home;