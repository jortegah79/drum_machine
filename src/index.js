import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Maquina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tecla: '',
      estilo: '',
      encendido: false
    }
  }
  render() {
    return (
      <div className="contenedor">
        <div className="maquina">
          <div className='botonera'>
            <Tecla tecla="Q"/>
            <Tecla tecla="W"/>
            <Tecla tecla="E"/>
            <Tecla tecla="A"/>
            <Tecla tecla="S"/>
            <Tecla tecla="D"/>
            <Tecla tecla="Z"/>
            <Tecla tecla="X"/>
            <Tecla tecla="C"/>
          </div>
          <div className="mandos">
            <Pantalla />
            <Botones/>
            <h2>by J.Ortega.</h2>
          </div>
        </div>
      </div>
    );
  }
}

function Pantalla() {
  return (
    <div>
      <Display texto="Apagado"/>
      <Display texto="Tipo estilo"/>
      <Display texto="nombre tecla"/>      
    </div>
  );
}
function Botones(props){
  return(
<div>
  <Seleccion />
  <Power/>
</div>
  );
}
function Seleccion(props) {
  return (
    <div className='botones'>
     <button>Drums</button>
     <button>Piano</button>
    </div>

  );
}

function Power(props) {
  return (
    <div>
      <button className='power'>ON/OFF</button>
    </div>
  );
}

function Tecla(props) {
  return (
    <div>
      <button className="tecla">{props.tecla}</button>
    </div>
  );
}
function Display(props){
  return(
<div>
  <div className='display'>{props.texto}</div>
</div>
  );
}

ReactDOM.render(<Maquina />, document.getElementById('root'));

