import React, { Component } from "react";
import Axios from "axios";

class Add extends Component {
    constructor (props) {
        super(props)
        this.state ={
            
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState ({})
    }
    render(){
        return (
            <form 
            onSubmit={e => {
                Axios.post("/api/name", {
                    name: this.state.name
                    
                })
                .then(response => {
                    this.props.changeSection("/api/questions");
                })
                .catch(error => {
                    this.setState({error: "Oh no! Theres been an error"})
                })
            }} >

            </form>
        )
        
    }
    

}

export default Add;

