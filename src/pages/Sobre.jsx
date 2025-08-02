import { Link } from "react-router-dom";

const estiloCaixa={
    backgroundColor: "#e0e7ff",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px"
};

const Sobre = () =>{
    return (
        <div style={{textAlign:"center"}}>
            <img src="/vite.svg" alt="icone" />
            <h1>Sobre Nós</h1>
            <div style={estiloCaixa}>
                <p>Essa página é a página sobre</p>
                <p>Criamos com todo amor e carinho e um pouco de ódio</p>
            </div>

            <Link to="/">Home</Link>
        </div>
    )
}
export default Sobre;