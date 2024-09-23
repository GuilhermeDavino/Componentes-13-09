import { useState } from "react";

var oi = 'n'

export default function Operacoes() {
    const [value, setValue] = useState();

    function onClickSoma() {
        setValue(10+2);
    }

    function onClickSubtracao() {
        setValue(10-2);
    }

    function onClickMultiplicacao() {
        setValue(10*2);
    }

    function onClickDivisao() {
        setValue(10/2);
    }

    return(
        <>  <div>Operação com os numeros 10 e 2</div>
            <button onClick={onClickSoma}>Somar</button>
            <button onClick={onClickSubtracao}>Subtrair</button>
            <button onClick={onClickMultiplicacao}>Multiplicar</button>
            <button onClick={onClickDivisao}>Dividir</button>
            <div>Resultado: {value}</div>
        </>
    )
}