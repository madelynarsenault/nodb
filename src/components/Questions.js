import React from 'react';
import "./Questions.css";
import Axios from 'axios';


class Questions extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            color:[ {
                    blue, points: 3
                }, {
                    green,points: 6
                }, {
                    yellow, points: 2
                 }
                
            ]
        }
    }
}