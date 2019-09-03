import React from 'react';
import './App.css';
import Header from "./components/Header";
import NameBox from "./components/NameBox";
import Add from "./components/Add";
import Questions from "./components/Questions";
import Plants from "./components/Plants";
import Results from "./components/Results";

class App extends React.Component {
  constructor () {
    super()
    this.state ={
      section: "name",
      view: "nameBox",
      points: 0
    }
  }
  changeToQuestions = () => {
    this.setState({
      view:"questions"
    })
  }

  changeToResults = () => {
    this.setState({
      view: "results"
    })
  }
  updatePoints = (points) => {
    let newPoints = this.state.points + points
    this.setState({
      points: newPoints
    })

  }


  render(){
  return (
    <div>
      <Header />
      {this.state.view === "nameBox" ? (
      <main>
        
        <section className="paragraph">
          <p>
          Welcome to the personality garden! Have you ever wondered what
            kind of plant or flower aligns with you specifically?
            If you'd like to find out, start by entering
          your name below to begin! 
          </p>
          <NameBox changeToQuestions={this.changeToQuestions} /> 
          <Add  />

          {/* <Plants /> */}
          </section>
          </main>
          ) : this.state.view === "questions" ? 
        <Questions changeToResults={this.changeToResults} updatePoints={this.updatePoints}
        /> : <Results totalPoints={this.state.points} />}
      {/* {} */}
       {/* {}  */}
        </div>
  
     
  );
}}

export default App;
