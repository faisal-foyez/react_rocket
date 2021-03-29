import React,{useState} from 'react';
import './LaunchingPad.css';

const LaunchingPad = (props) =>{
    
    return(
        <>
            <div className="launching_pad">
            </div>

            <button onClick={props.onClick} className="launch_btn">
                Launch
            </button>
        </>
    )
}

export default LaunchingPad;