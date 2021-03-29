import React from 'react';
import './Ignition.css';
const Ignition = (props) => {
    return (
        <div className="engine" style={{ height: 15, width: 20,bottom:props.bottom  }}>
            <div style={{  height: 'inherit', width: 'inherit' }}>

            </div>
            
            <div className={props.isStartedRocket ?'started_journey':props.isStartedEngine?"fire":""}>

            </div>
            
        </div>
    )
}

export default Ignition;