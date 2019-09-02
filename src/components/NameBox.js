import React from "react";
import Axios from 'axios';

class NameBox extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            error: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        this.setState({ name: e.target.value })
    }




    handleSubmit(e) {
        e.preventDefault();
        Axios
            .post("/api/name", {
                name: this.state.name
            })
            .then(response => {
                this.props.changeToQuestions();
            })
            .catch(error => {
                this.setState({ error: "oh no! an error has occured" });
            });
    }

    render() {
        return (
            <main>
                <div className="name">
                    <p>
                        Enter Name Here:
          </p>


                </div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleInput} type="Text" id="namebox" placeholder="First Name" />
                </form>
            </main>
        )
    }
}

export default NameBox;