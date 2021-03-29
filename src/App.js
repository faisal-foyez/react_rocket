import React,{useState,useMemo,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Rocket from './Rocket/Rocket';
import LaunchingPad from './LaunchingPad/LaunchingPad';

const App = () => {
  
  const [startRocket, setStartRocket] = useState(false);
  const [startEngine, setStartEngine] = useState(false);
  const [releasePayload, setReleasePayload] = useState(false);

  
  const onStartEngine = () => {
    if(!releasePayload){
      setStartEngine(true);
  
      setTimeout(() => {
        setStartRocket(true);
        setTimeout(() => {
          setReleasePayload(true);
          setTimeout(() => {
            setStartEngine(false);
            setStartRocket(false);
          }, 5000);
        }, 5000);
      }, 5000);
      
    }
    else{
      setStartEngine(false);
      setStartRocket(false);
      setReleasePayload(false);
    }
    }


  return (
      <>
        <Rocket isReleasedPayload={releasePayload} isStartedRocket={startRocket} isStartedEngine={startEngine} />
        <LaunchingPad  onClick={onStartEngine}/>
      </>
  )
}

export default App;
