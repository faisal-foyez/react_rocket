import React from 'react';
import './Payload.css';
import Ignition from '../Ignition/Ignition';
const Payload = (props) => {
    return (
        <>
            <div style={{ opacity: props.isReleasedPayload ? 0 : 1}} className="payload">
                <div className="payload_top">
                    <div style={{transform:'translate(0px, 37px) rotate(-90deg)',opacity:.3}}>SpaceX</div>
                </div>
                <div className="payload_bottom"></div>
                <Ignition isStartedRocket={props.isStartedRocket} isStartedEngine={props.isStartedEngine}/>
            </div>
        </>
    )
}

export default Payload;