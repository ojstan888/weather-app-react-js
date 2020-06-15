import React from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod} className="form__input">
        <input type="text" name="city" placeholder="введите город"/>
        <button className="button">Узнать погоду</button>
    </form>
)
export default Form; 

