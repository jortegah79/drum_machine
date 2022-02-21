import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const teclado = {
  q: {
    letra: 'q',
    'DRUMS': {
      nombre: 'Heater-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    'PIANO': {
      nombre: 'Chord-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }
  },
  w: {
    letra: 'w',
    'DRUMS': {
      nombre: 'Heater-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    'PIANO': {
      nombre: 'Chord-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }
  },
  e: {
    letra: 'e',
    'DRUMS': {
      nombre: 'Heater-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    'PIANO': {
      nombre: 'Chord-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }
  },
  a: {
    letra: 'a',
    'DRUMS': {
      nombre: 'Heater-4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    'PIANO': {
      nombre: 'Shaker',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }
  },
  s: {
    letra: 's',
    'DRUMS': {
      nombre: 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    'PIANO': {
      nombre: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }
  },
  d: {
    letra: 'd',
    'DRUMS': {
      nombre: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    'PIANO': {
      nombre: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }
  },
  z: {
    letra: 'z',
    'DRUMS': {
      nombre: "Kick-n'-Hat",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    'PIANO': {
      nombre: 'Punchy-Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }
  },
  x: {
    letra: 'x',
    'DRUMS': {
      nombre: 'Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, 'PIANO': {
      nombre: 'Side-Stick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }
  },
  c: {
    letra: 'c',
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
    let teclaPresionada = e.key;
    let correcta=false;
    switch (teclaPresionada) {
      case 'q':
      case 'w':
      case 'e':
      case 'a':
      case 's':
      case 'd':
      case 'z':
      case 'x':
      case 'c':
        correcta=true;
        break;
        default:          
        correcta=false;
        break;
    }
     if(correcta){
       let tec = this.state.encendido ? teclaPresionada : '---';
       let botonPulsado = document.getElementById(e.key);
       let color = this.state.encendido ? "#ea910b" : "blue";
     botonPulsado.style.backgroundColor = color;
    
     this.setState(() => {
       return { tecla: tec }
     });
     setTimeout(() => {
       botonPulsado.style.backgroundColor = 'blue';
     }, 300);
  }
}

  pulsaTecla(e) {
    let tec = this.state.encendido ? e.target.id : '---';
    let botonPulsado = document.getElementById(e.target.id);
    let color = this.state.encendido ? "#ea910b" : "blue";
    botonPulsado.style.backgroundColor = color;
    this.setState(() => {
      return { tecla: tec }
    });
    setTimeout(() => {
      botonPulsado.style.backgroundColor = 'blue';
    }, 300);

  }
  componentDidMount() {
    window.addEventListener("keydown", (e) => this.handleKey(e))
  };

  componentDidUpdate() {
    if (this.state.tecla !== '---') {
      let audio = new Audio(teclado[this.state.tecla][this.state.estilo].src);
      audio.play();
    }
  }

  render() {
    let estadoEncendido = this.state.encendido ? "encendido" : "apagado";
    return (
      <div className="contenedor">
        <div className="maquina" id="maquina">
          <div className='botonera'>
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="q" tecla="q" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="w" tecla="w" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="e" tecla="e" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="a" tecla="a" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="s" tecla="s" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="d" tecla="d" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="z" tecla="z" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="x" tecla="x" />
            <Tecla tec={this.state.tecla} pulsaTecla={this.pulsaTecla} id="c" tecla="c" />
          </div>
          <div className="mandos">
            <Pantalla power={estadoEncendido} estilo={this.state.estilo} tecla={this.state.tecla !== '---' ? teclado[this.state.tecla][this.state.estilo].nombre : '---'} />
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
      <button onClick={props.pulsaTecla} id={props.id} className="tecla">{props.tecla}</button>
    </div>
  );
}

//acabado-------------------------------------------->
function Pantalla(props) {
  return (
    <div>
      <Display texto={props.power} />
      <Display texto={props.estilo} />
      <Display texto={props.tecla} />
    </div>
  );
}
//acabado---------------------------------------------->
function Display(props) {
  return (
    <div>
      <div className='display'>{props.texto}</div>
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

