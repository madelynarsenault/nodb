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
    if (totalPoints <= 10 ){
        plantIndex = 0;
    } else if (totalPoints > 10 && totalPoints < 15 ){
        plantIndex =1;
    } else {
        plantIndex=2;
        
    }
    console.log(plantIndex)
    this.setState({index: plantIndex})
}

    render() {
        const{plants, index} =this.state
        console.log(plants, index)
        return(
            <main>
                <h1 className="finals">You got, {plants.length > 0 ? plants[index].name : null}!</h1> 
                <img className="finalsimg" src={plants.length > 0 ? plants[index].image : null}/> 
            </main>
        )
    }
}



export default Results;