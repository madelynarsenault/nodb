import React from 'react';
import './App.css';
import Header from "./components/Header";
import NameBox from "./components/NameBox";
import Add from "./components/Add";


class App extends React.Component {
  constructor () {
    super()
    this.state ={
      section: "name"
    }
  }
  changeToQuestions = () => {

  }
  render(){
  return (
    <div>
      {this.state.section === "name" ? (
      <main>
        <Header />
        
        <div className="paragraph">
          <p>
          Welcome to the personality garden! Have you ever wondered what
            kind of plant or flower aligns with you specifically?
            If you'd like to find out, start by entering
          your name below to begin! 
          </p>
          
          <NameBox changeSection={() => this.setState({section: "questions"})} />
          <Add  />
          </div>
        </main>
      ) : null}
      {/* {} */}
       {/* {}  */}
        </div>
  
     
  );
}}

export default App;
