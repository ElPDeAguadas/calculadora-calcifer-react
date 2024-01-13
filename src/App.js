// App.js

import './App.css';
import calciferLogo from './imagenes/calcifer-logo.png'
import leftImage from './imagenes/left-image.jpg'; // Ruta de la imagen izquierda
import rightImage from './imagenes/right-image.jpg'; // Ruta de la imagen derecha
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }

  const calcularResultado = () => {
    if (input) {
      setInput(String(evaluate(input)));
    } else {
      alert("Ingrese valores para realizar los cálculos.")
    }
  }

  return (
    <div className="App">
      <div className='calculadora-images-container'>
        <img
          src={leftImage}
          className='left-image'
          alt='Imagen izquierda'
        />
        <div className='calculadora-calcifer-logo'>
          <img
            src={calciferLogo}
            className='calcifer-logo'
            alt='Logo calculadora calcifer'
          />
        </div>
        <img
          src={rightImage}
          className='right-image'
          alt='Imagen derecha'
        />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

