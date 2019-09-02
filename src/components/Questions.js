import React from 'react';
import "./Questions.css";
import Axios from 'axios';


class Questions extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            colorPoints:0,
            activityPoints: 0,
            countryPoints: 0,
            colors:[ {
                    color: "Blue",
                    points: 3
                }, {
                    color: "Green",
                    points: 6
                }, {
                    color: "Yellow",
                     points: 2
                 }
                
            ],
            activities:[{
                    activity: "Reading",
                     points: 8
                }, {
                    activity: "Drawing things",
                     points: 4
                }, {
                    activity: "Finding new music to listen to",
                     points: 3
                    }
            ],
            countries: [{
                place: "Japan",
                 points: 3
            }, {
                place:"Scotland",
                 points: 5
            } , {
                place: "Hawaii",
                 points: 1
            }
            ]
        } 
    }
    updateColorPoints(points){
        this.setState({
            colorPoints: points
        })
    }

    updateActivityPoints(points){
        this.setState({
            activityPoints: points
                })
    }
    updateCountryPoints(points){
        this.setState({
            countryPoints: points
        })
    }


    handleSubmit= () => {
        let {colorPoints, activityPoints, countryPoints} = this.state
        console.log(this.state.colors);
        let totalPoints= colorPoints + activityPoints + countryPoints
        this.props.updatePoints(totalPoints)
        this.props.changeToResults()
    }



    render(){
        const viewColors = this.state.colors.map((color, i) => {
            return (
            <div className='color-card'>
                <h2>{color.color}</h2>
                <input onChange={() => this.updateColorPoints(color.points)} name="radiothree" type="radio"></input>
            </div>
            )
        })

        const viewActivities = this.state.activities.map((activity, i)=> {
            return (
                <div className="activity-card">
                    <h2>{activity.activity}</h2>
                    <input onChange ={() => this.updateActivityPoints(activity.points)}name="radiotwo" type="radio"></input>
                </div>
            )
        })

        const viewCountries =this.state.countries.map((place, i) => {
            return (
                <div className="country-card">
                    <h2>{place.place}</h2>
                    <input onChange={() => this.updateCountryPoints(place.points)} name="radio" type="radio"></input>
                    
                </div>
            )
        })

        return(
            <div className="u">
                <h1 className= "q1">
                    1. What is your favorite color?
                </h1>
                {viewColors}
                <h1 className= "q2">
                    2. If you had to pick one all day activity, what would it be?
                </h1>
                {viewActivities}
                <h1 className= "q3">
                    3. If you could travel to once place out of the following, which would it be?
                </h1>
                {viewCountries}
                <button onClick={this.handleSubmit} className="submit">submit!</button>
            </div>
        )
    }


}
    

// Axios.get() 

export default Questions;