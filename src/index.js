import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const keys = [
  { name: "Q",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    description: "Heater 1"
  },
  { name: "W",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    description: "Heater 2"
  },
  { name: "E",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    description: "Heater 3"
  },
  {
    name: "A",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    description: "Heater 4"
  },
  {
    name: "S",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    description: "Clap"
  },
  {
    name: "D",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    description: "Open-HH"
  },
  {
    name: "Z",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat"
  },
  {
    name: "X",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    name: "C",
    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    description: "Closed-HH"
  },
];

function MyApp() {

  const [display, setDisplay] = React.useState('');
  // Add an event listener for keydown when the component mounts
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const audioElement = document.getElementById(key);
      if (audioElement) {
        audioElement.play();
        const keyData = keys.find(k => k.name === key);
        if (keyData) {
          setDisplay(keyData.description);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleButtonClick = (key) => {
    const audioElement = document.getElementById(key.name);
    audioElement.play();
    setDisplay(key.description);
  };


  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>
      <div id='display'>{display}</div>
      <div id='keypad'>
        {keys.map((key, index) => {
          return (
            <div key={index}>
              <button className='drum-pad' id={key.source} onClick={() => handleButtonClick(key)}>
                {key.name}
                <audio className='clip' id={key.name} src={key.source}></audio>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
