import { useState } from "react";

const Contador = () => {
    const [n , setN] = useState (0)
    return(
        <div>
            <p>Valor {n}</p>
            <button onClick={() => setN((v)=> v - 1)} >diminuir</button>
            <button onClick={() => setN((v)=> v + 1)} >aumentar</button>
            <button onClick={() => setN(0)} >Reset</button>
        </div>
    )
}

export default Contador