import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/NavBar';
import ArtworkList from './components/ArtworkList';
import Artwork from './components/Artwork';
import ArtworkDetails from './components/ArtworkDetails';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={


    }
  }

  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ArtworkList}></Route>
          <Route path="/details" component={ArtworkDetails}></Route>
        </Switch>
      </React.Fragment>

    );
  }
}
export default App;
