import { Link } from "react-router-dom";

const Sobre = () =>{
    return (
        <div style={{textAlign:"center"}}>
            <img src="/vite.svg" alt="icone" />
            <h1>Sobre Nós</h1>
            <p>Essa página é a página sobre</p>
            <p>Criamos com todo amor e carinho e um pouco de ódio</p>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Sobre;