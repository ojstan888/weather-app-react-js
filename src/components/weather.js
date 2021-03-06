import React from "react";

const Weather = props => (
    <React.Fragment>
         { props.city 
            ? <div className="infoWeath">
                <p className="infoWeath__b">Местоположение: <span>{props.city}, {props.country}</span></p>
                <p className="infoWeath__b">Температура: <span>{props.temp}</span></p>
                <p className="infoWeath__b">Давление: <span>{props.pressure}</span></p>
            </div>
            : null
            }
            <p className="error">{props.error}</p>
        </React.Fragment>
)

export default Weather; 