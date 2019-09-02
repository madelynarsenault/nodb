import React from 'react';
import NameBox from './NameBox';
import Axios from 'axios';


class Results extends React.Component {
    constructor(){
        super()
        this.state ={
            plants: [],
            index: 0

        }
    }

componentDidMount(){
    Axios
    .get("/api/results")
    .then(response => {
        this.setState({plants: response.data})
        console.log(response.data)
    })
    .catch(error => {
        this.setState({error: "error"});
    })
    let plantIndex;
    const {totalPoints} = this.props
    if (totalPoints <= 15 ){
        plantIndex = 0;
    } else if (totalPoints > 15 && totalPoints < 27 ){
        plantIndex =1;
    } else {
        plantIndex=2;
        
    }
    this.setState({index: plantIndex})
}

    render() {
        const{plants, index} =this.state
        console.log(plants, index)
        return(
            <main>
                {/* <h1>{plants[index].name}</h1>
                <img src={plants[index].image}/> */}
            </main>
        )
    }
}



export default Results;