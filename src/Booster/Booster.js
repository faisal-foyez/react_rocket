import React from 'react';
import './Booster.css';
import Ignition from '../Ignition/Ignition';
const Booster = (props) =>{
    return(
        <div className="booster">
            <div className="booster_top"></div>
            <div className="booster_bottom">
                <div style={{ transform: 'translate(0px, 93px) rotate(-90deg)', opacity: .3 }}>SpaceX</div>
            </div>
            <Ignition isStartedRocket={props.isStartedRocket} isStartedEngine={props.isStartedEngine}/>
        </div>
    )
}

export default Booster;