import React,{useState,createContext} from 'react';
import Booster from '../Booster/Booster';
import Payload from '../Payload/Payload';
import './Rocket.css';
const Rocket = (props) =>{
    
    const styles= {
        rocket: { 
            display: 'flex', 
            flexDirection: 'row', 
            position: 'absolute', 
            bottom: props.isStartedRocket && !props.isReleasedPayload? 1010: 240,
            left: '50%', 
            transform: 'translate(-50%)', 
            zIndex: 1000,
            transition:'bottom ease-out 5000ms'
        }
    }
    return(
        <div className="rocket" style={styles.rocket}>
            <Booster isStartedEngine={props.isStartedEngine} isStartedRocket={props.isStartedRocket}/>
            <Payload isReleasedPayload={props.isReleasedPayload} isStartedEngine={props.isStartedEngine} isStartedRocket={props.isStartedRocket}/>
            <Booster isStartedEngine={props.isStartedEngine} isStartedRocket={props.isStartedRocket}/>
        </div>
    )
}
export default Rocket;