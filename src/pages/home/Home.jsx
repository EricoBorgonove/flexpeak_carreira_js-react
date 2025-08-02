import { Link } from "react-router-dom";
import logoReact from '../../assets/images/logoReact.png'
import styles from './home.module.css'

const Home = () => {
    return (
        // <div style={{textAlign:"center"}}>
        <div className={styles.container}>
            <h1>Página Inicial</h1>
            <img 
            src={logoReact}
            alt="Logo React" 
            className={styles.image}
            // style={{width: "150px", marginBottom:"20px"}}
            />
            <p>Bem vindo a nossa primeira página usando React + Vite</p>
            <Link className={styles.link} to="/sobre">Sobre</Link>
        </div>
    )
}

export default Home;