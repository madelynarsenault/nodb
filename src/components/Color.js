import React from 'react';

function Color (props){
    return(
<div className='color-card'>
                <h2>{props.color.color}</h2>
                <input onChange={() => props.updateColorPoints(props.color.points)} name="radiothree" type="radio"></input>
            </div>
    )}


    export default Color;