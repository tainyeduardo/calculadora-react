import React, { useState } from 'react';
import './estilo.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculadora() {

    const [numeroResult, setNumeroResult] = useState(0);
    const [numeroAntigo, setNumeroAntigo] = useState(0)
    const [operador, setOperador] = useState(0)

    function enviandoNumero(eve) {
        let numInput = eve.target.value;
        
        if (numeroResult === 0) {
            setNumeroResult(numInput);
        } else {
            setNumeroResult(numeroResult + numInput);
        }

        



    }

    function capturandoOperador(op) {
        let operadorEnviado = op.target.value;
        setOperador(operadorEnviado);
        setNumeroAntigo(numeroResult);
        console.log(numeroAntigo);
        setNumeroResult(0);

    }






    function limpandoResultado() {
        setNumeroResult(0);
        setNumeroAntigo(0)
        setOperador('');
    }





    function mudarOperador() {
        if (numeroResult > 0) {
            setNumeroResult(-numeroResult)
        } else {
            setNumeroResult(Math.abs(numeroResult))
        }
    }

    function porcentagem() {
        setNumeroResult(numeroResult / 100);
    }

    function calcu() {
        let numAtual = numeroResult;

        let numAntigo = numeroAntigo;
        let op = operador;
        let calculoTotal = 0;

        if (op === "/") {
                calculoTotal = parseFloat(numAntigo) / parseFloat(numAtual)  ;
                console.log(numAtual);
                console.log(numAntigo);
                console.log(op);
            }
            if (op === "*") {
                calculoTotal = parseFloat(numAntigo) * parseFloat(numAtual);
            }

            if (op === "+") {
                calculoTotal = parseFloat(numAntigo) + parseFloat(numAtual);
            }

            if (op === "-") {
                calculoTotal = parseFloat(numAntigo) - parseFloat(numAtual);
            }

            setNumeroResult(calculoTotal)
            setNumeroAntigo(0);
            setOperador(0)
            


    }



    return (
        


        
        <Box m={6}>
            <Container maxWidth="xs" >
               
        <img className='imgLogo' src='https://logosmarcas.net/wp-content/uploads/2020/04/Apple-Simbolo.png'>

        </img>
                <div className='fundo'>


                    <div className='resultado'>{numeroResult}</div>

                    <button className='cinzaClaro' onClick={limpandoResultado}>AC</button>
                    <button className='cinzaClaro' onClick={mudarOperador} >+/-</button>
                    <button className='cinzaClaro' onClick={porcentagem}>%</button>
                    <button className='orange' onClick={capturandoOperador} value="/">/</button>

                    <button className='cinzaEscuro' onClick={enviandoNumero} value="7">7</button>
                    <button className='cinzaEscuro' onClick={enviandoNumero} value="8">8</button>
                    <button className='cinzaEscuro' onClick={enviandoNumero} value="9">9</button>
                    <button className='orange' onClick={capturandoOperador} value="*">X</button>

                    <button className='cinzaEscuro' onClick={enviandoNumero} value="4">4</button>
                    <button className='cinzaEscuro' onClick={enviandoNumero} value="5">5</button>
                    <button className='cinzaEscuro' onClick={enviandoNumero} value="6">6</button>
                    <button className='orange' onClick={capturandoOperador} value="-">-</button>

                    <button className='cinzaEscuro' onClick={enviandoNumero} value="1">1</button>
                    <button className='cinzaEscuro' onClick={enviandoNumero} value="2">2</button>
                    <button className='cinzaEscuro' onClick={enviandoNumero} value="3">3</button>
                    <button className='orange' onClick={capturandoOperador} value="+" >+</button>

                    <button className='zero cinzaEscuro' onClick={enviandoNumero} value="0">0</button>

                    <button className='cinzaEscuro' onClick={enviandoNumero} value={"."}>.</button>


                    <button className='orange' onClick={calcu}>=</button>

                </div>

            </Container>
        </Box>
    )
}