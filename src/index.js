import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const teclado = {
  Q: {
    letra: 'Q',
    'DRUMS': {
      nombre: 'Heater-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    'PIANO': {
      nombre: 'Chord-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }
  },
  W: {
    letra: 'W',
    'DRUMS': {
      nombre: 'Heater-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    'PIANO': {
      nombre: 'Chord-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }
  },
  E: {
    letra: 'E',
    'DRUMS': {
      nombre: 'Heater-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    'PIANO': {
      nombre: 'Chord-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }
  },
  A: {
    letra: 'A',
    'DRUMS': {
      nombre: 'Heater-4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    'PIANO': {
      nombre: 'Shaker',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }
  },
  S: {
    letra: 'S',
    'DRUMS': {
      nombre: 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    'PIANO': {
      nombre: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }
  },
  D: {
    letra: 'D',
    'DRUMS': {
      nombre: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    'PIANO': {
      nombre: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }
  },
  Z: {
    letra: 'Z',
    'DRUMS': {
      nombre: "Kick-n'-Hat",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    'PIANO': {
      nombre: 'Punchy-Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }
  },
  X: {
    letra: 'X',
    'DRUMS': {
      nombre: 'Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, 'PIANO': {
      nombre: 'Side-Stick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }
  },
  C: {
    letra: 'C',
    'DRUMS': {
      nombre: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    'PIANO': {
      nombre: 'Snare',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  }
};

class Maquina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tecla: '---',
      estilo: '---',
      encendido: false
    }
    this.encender = this.encender.bind(this);
    this.cambioEstilo = this.cambioEstilo.bind(this);
    this.pulsaTecla = this.pulsaTecla.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  encender() {
    let estilo = this.state.encendido ? '---' : 'DRUMS';
    this.setState(
      {
        encendido: !this.state.encendido,
        estilo: estilo,
        tecla: '---'
      }
    )
  };
  cambioEstilo(e) {
    let estilo = e.target.id;
    this.setState(
      {
        estilo: estilo,
        tecla: '---'
      }
    );
  }
  handleKey(e) {
    if(this.state.encendido){
      let botonPulsado=document.getElementById(e.key.charAt(0).toLowerCase());
    let teclaPresionada = e.key.charAt(0).toUpperCase();
    
    console.log(botonPulsado);
    console.log(teclaPresionada);
    let correcta = false;
    switch (teclaPresionada) {
      case 'Q':
      case 'W':
      case 'E':
      case 'A':
      case 'S':
      case 'D':
      case 'Z':
      case 'X':
      case 'C':      
        correcta = true;
        break;
      default:
        correcta = false;
        break;
    }
    if (correcta) {
      botonPulsado.style.backgroundColor = "#ea910b";
      botonPulsado.style.boxShadow="1px 1px 3px 2px white";
      this.setState(() => {
        return { tecla: teclaPresionada }
      });
      setTimeout(() => {
       botonPulsado.style.backgroundColor = "blue";
       botonPulsado.style.boxShadow="2px 2px 3px 2px #4477aa";
      }, 200);      
      let audio=document.getElementById(teclaPresionada);
      audio.currentTime=0;
      audio.play();
    }
  }
  }

  pulsaTecla(e) {
    let botonPulsado=document.getElementById(e.target.id);
    let idTecla=this.state.encendido ? document.getElementById(e.target.id).innerText : '---';
    //let audioActual =document.getElementById(idTecla).src;  
    botonPulsado.style.backgroundColor = "#ea910b";
    botonPulsado.style.boxShadow="1px 1px 3px 2px white";   
    let audio=document.getElementById(idTecla);
    audio.play();
    setTimeout(() => {
      botonPulsado.style.backgroundColor = 'blue';
      botonPulsado.style.boxShadow="2px 2px 3px 2px #4477aa";
    }, 200);      
        this.setState(() => {
      return { tecla: idTecla }
    });
    }  
  
  componentDidMount() {
    window.addEventListener("keypress", (e) => this.handleKey(e))
  };

   render() {
    let estadoEncendido = this.state.encendido ? "encendido" : "apagado";
    let estiloActual = this.state.estilo === '---' ? 'DRUMS' : this.state.estilo;
    return (
      <div className="contenedor">
        <div className="maquina" id="drum-machine">
        <div className='botonera'>
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.Q[estiloActual].src} id="Q" tecla="q" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.W[estiloActual].src} id="W" tecla="w" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.E[estiloActual].src} id="E" tecla="e" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.A[estiloActual].src} id="A" tecla="a" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.S[estiloActual].src} id="S" tecla="s" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.D[estiloActual].src} id="D" tecla="d" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.Z[estiloActual].src} id="Z" tecla="z" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.X[estiloActual].src} id="X" tecla="x" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} sonido={teclado.C[estiloActual].src} id="C" tecla="c" />
          </div>
          <div className="mandos">
            <Pantalla
              power={estadoEncendido} estilo={this.state.estilo} tecla={this.state.tecla !== '---' ? teclado[this.state.tecla][this.state.estilo].nombre : '---'} />
            <Botones encender={this.encender} cambioEstilo={this.cambioEstilo} estiloActual={this.state.estilo} encendido={this.state.encendido} />
            <h2>by J.Ortega.</h2>
          </div>
        </div>
      </div>
    );
  }
}
//todo por hacer...
function Tecla(props) {
  return (
    <div>
      <div onClick={props.pulsaTecla} id={props.tecla} className="tecla drum-pad">{props.id}
        <audio id={props.id}  className="clip" src={props.sonido}></audio>
      </div>
    </div>
  );
}

//acabado-------------------------------------------->
function Pantalla(props) {
  return (
    <div>
      <Display texto={props.power} />
      <Display texto={props.estilo} />
      <DisplayTecla texto={props.tecla} />
    </div>
  );
}
//acabado---------------------------------------------->
function Display(props) {
  return (
    <div>
      <div id="display2" className='display'>{props.texto}</div>
    </div>
  );
}
function DisplayTecla(props) {
  return (
    <div>
      <div id="display" className='display'>{props.texto}</div>
    </div>
  );
}
//acabado------------------------------------------->
function Botones(props) {
  return (
    <div>
      <Seleccion cambioEstilo={props.cambioEstilo} estiloActual={props.estiloActual} encendido={props.encendido} />
      <Power encender={props.encender} encendido={props.encendido} />
    </div>
  );
}
//acabado------------------------------------------>
function Seleccion(props) {
  return (
    <div className='botones'>
      <button onClick={props.encendido ? props.cambioEstilo : ""} id="DRUMS" className={props.estiloActual === 'DRUMS' ? "activo" : "inactivo"}>Drums</button>
      <button onClick={props.encendido ? props.cambioEstilo : ""} id="PIANO" className={props.estiloActual === 'PIANO' ? "activo" : "inactivo"}>Piano</button>
    </div>

  );
}
//acabado.---------------------------------------------->
function Power(props) {
  return (
    <div>
      <button onClick={props.encender} className={props.encendido ? "activo power" : "apagado power"}>{props.encendido ? "OFF" : "ON"}</button>
    </div>
  );
}
ReactDOM.render(<Maquina />, document.getElementById('root'));
