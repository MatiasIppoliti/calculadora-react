import React, { useState } from "react";
import "./Calculadora.css";

const Calculadora = () => {
    const [resultado, setResultado] = useState("");

    const handleClick = (e) => {
        setResultado(resultado.concat(e.target.name));
    } 

    const clear = () => {
        setResultado("");
    }

    const backspace = () => {
        setResultado(resultado.slice(0, resultado.length - 1));
    }
    
    const calculate = () => {
        try { // eslint-disable-next-line
            setResultado(eval(resultado).toString()); 
        } catch(err) {
            setResultado("Error");
        }
    }

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={resultado}/>
                </form>

                <div className="teclado">
                    <button className="highlight" onClick={clear} id="clear">Clear</button>
                    <button className="highlight" onClick={backspace} id="backspace">C</button>
                    <button className="highlight" name="/" onClick={handleClick} id="backspace">&divide;</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button className="highlight" name="*" onClick={handleClick} id="backspace">&times;</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button className="highlight" name="-" onClick={handleClick} id="backspace">&ndash;</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className="highlight" name="+" onClick={handleClick} id="backspace">+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button className="highlight" onClick={calculate} id="result">=</button>
                </div>
            </div>
        </>
        )
}

export default Calculadora;