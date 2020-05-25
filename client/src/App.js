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

class App extends React.Component {
  //setting state from AddPlantForm
  state = {
    plants: {},
    gardenplants: {},
  };
  addPlant = (plant) => {
    console.log("adding a plant");
    //step one take copy of existing state
    const plants = { ...this.state.plants };
    //add new plant to plants const
    plants[`plant${Date.now()}`] = plant;
    //put eupdated state into state, set new plants objects to state
    this.setState({
      plants: plants,
    });
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
              <Route exact path="/search" component={Search} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
        {/* <MyGarden />
                    <Inventory addPlant={this.addPlant}
                    loadSamplePlants={this.loadSamplePlants}
                    /> */}
      </div>
    );
  }
}

export default App;
