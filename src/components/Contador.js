import React, {useState, Fragment} from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(0)

    const aumentar = () =>{
        console.log("Presionaste el boton")
        setNumero(numero +1)
    }

    return ( 
        <Fragment>
            <h1>
                Cuenta arriba 
            </h1>
            <h3>{numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;