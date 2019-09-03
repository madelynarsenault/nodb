import React from 'react';

function Activity (props){
    return(
<div className="activity-card">
                    <h2>{props.activity.activity}</h2>
                    <input onChange ={() => props.updateActivityPoints(props.activity.points)}name="radiotwo" type="radio"></input>
                </div>
    )}


    export default Activity;