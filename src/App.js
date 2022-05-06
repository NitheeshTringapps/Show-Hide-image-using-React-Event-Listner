import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {showImage: true};
  }

  handleClick = () => { 
    if(this.state.showImage){
      alert("You Clicked to Show Image");
      document.getElementById('image').src = logo;
      document.getElementById('imageButton').innerText="Click Me To Hide Image";
      this.setState({showImage: false});
    }
    else{
      alert("You Clicked to Hide Image");
      document.getElementById('image').src = "";
      document.getElementById('imageButton').innerText="Click Me To Show Image";
      this.setState({showImage: true});
    }
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <img  className="App-logo" alt="" id="image" />
          <button onClick={this.handleClick} id="imageButton">Click Me To Show Image</button>
        </header>
      </div>
    );
  }
}

export default App;
