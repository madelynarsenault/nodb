import React from "react";
import Axios from 'axios';

class NameBox extends React.Component{
    constructor (){
        super()
        this.state = {
        name: "",
        error: ""
        }
        
    }
    render() {
        return(
            <main>
            <div className="name">
          <p>
            Enter Name Here:
          </p>

          </div>
            <form  onSubmit={e => {
                e.preventDefault();
                Axios.post("/api/name", {
                    name: this.state.name
                }).then(response => {
                    this.props.changeSection();
                })
                .catch(error => {
                    this.setState({error: "oh no! an error has occured"});
                });
            }}
            >
        <input type="Text" id="namebox" placeholder="First Name"/>
        </form>
            </main>
         ) }
}

export default NameBox;