import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Maquina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tecla: '---',
      estilo: 'DRUMS',
      encendido: false
    }
    this.encender = this.encender.bind(this);
    this.cambioEstilo = this.cambioEstilo.bind(this);
  }
  encender() {
    let estilo = this.state.encendido ? '---' : 'DRUMS';
    this.setState(
      {
        encendido: !this.state.encendido,
        estilo: estilo
      }
    )
  };
  cambioEstilo(e) {
    let estilo=e.target.id;
    this.setState(
      {estilo:estilo}
      );

  }
  render() {
    let estadoEncendido = this.state.encendido ? "encendido" : "apagado";
    console.log(estadoEncendido)
    return (
      <div className="contenedor">
        <div className="maquina">
          <div className='botonera'>
            <Tecla tecla="Q" />
            <Tecla tecla="W" />
            <Tecla tecla="E" />
            <Tecla tecla="A" />
            <Tecla tecla="S" />
            <Tecla tecla="D" />
            <Tecla tecla="Z" />
            <Tecla tecla="X" />
            <Tecla tecla="C" />
          </div>
          <div className="mandos">
            <Pantalla power={estadoEncendido} estilo={this.state.estilo} tecla={this.state.tecla} />
            <Botones encender={this.encender} cambioEstilo={this.cambioEstilo} estiloActual={this.state.estilo} encendido={this.state.encendido} />
            <h2>by J.Ortega.</h2>
          </div>
        </div>
      </div>
    );
  }
}
//la pantalla ya tiene datos.
function Pantalla(props) {
  return (
    <div>
      <Display texto={props.power} />
      <Display texto={props.estilo} />
      <Display texto={props.tecla} />
    </div>
  );
}
//display ya tiene datos.
function Display(props) {
  return (
    <div>
      <div className='display'>{props.texto}</div>
    </div>
  );
}
//estilos y textos actualizados. falta evento
function Botones(props) {
  return (
    <div>
      <Seleccion cambioEstilo={props.cambioEstilo} estiloActual={props.estiloActual} />
      <Power encender={props.encender} encendido={props.encendido} />
    </div>
  );
}
//estilos actualizados.
function Seleccion(props) {
  return (
    <div className='botones'>
      <button onClick={props.cambioEstilo} id="DRUMS"className={props.estiloActual === 'DRUMS' ? "activo" : "inactivo"}>Drums</button>
      <button onClick={props.cambioEstilo} id="PIANO"className={props.estiloActual === 'PIANO' ? "activo" : "inactivo"}>Piano</button>
    </div>

  );
}

function Power(props) {
  return (
    <div>
      <button onClick={props.encender} className={props.encendido ? "activo power" : "apagado power"}>ON/OFF</button>
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


ReactDOM.render(<Maquina />, document.getElementById('root'));

