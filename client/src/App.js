import React from "react";
import Header from "./components/Header";
import MyGarden from "./components/MyGarden";
import Inventory from "./components/Inventory";
import samplePlants from "./sample-plants";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SearchResults from "./components/SearchResults"

class App extends React.Component {
  //first step to setting state is setting empty state
  state = {
    plants: {},
    searching: ""
  };
  searchPlant = (search) => {
    console.log("searching for a plant");
      //Setting state for search value
    // //1. take a copy of existing state, dont reach into state and mutate that shit
    // //const searching = {...this.state.searching}
    // //2. Add search value to that variable
    // searching[`search${Date.now}`] = search
    // //. Set search to state
    // this.setState({
    //   searching: searching
    // })
   
  };
  loadSamplePlants = () => {
    // alert('Loading Sample')
    this.setState({ plants: samplePlants });
  };
  render() {
    return (
      <div className="plants-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Plants Daily" />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/mygarden" component={MyGarden} />
              <Route searchPlant={this.searchPlant} exact path="/search" component={Search} />
              <Route exact path="/searchresults" component={SearchResults} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
    
      </div>
    );
  }
}

export default App;
