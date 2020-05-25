import React from "react";
import Header from './Header';
import MyGarden from './MyGarden';
import Inventory from "./Inventory";
import samplePlants from "../sample-plants";



class App extends React.Component {
    //setting state from AddPlantForm
    state = {
        plants: {},
        gardenplants: {}
    }
    addPlant = plant => {
       console.log("adding a plant") 
       //step one take copy of existing state 
       const plants = {...this.state.plants}
       //add new plant to plants const
       plants[`plant${Date.now()}`] = plant;
       //put eupdated state into state, set new plants objects to state
       this.setState({
           plants: plants
       });
    };
    loadSamplePlants = () => {
        // alert('Loading Sample')
        this.setState({ plants: samplePlants});
    }
    render() {
            return(
                <div className="plants-of-the-day">
                    <div className="menu">
                        <Header tagline="Fresh Plants Daily" />
                        
                    </div>
                    <MyGarden />
                    <Inventory addPlant={this.addPlant}
                    loadSamplePlants={this.loadSamplePlants}
                    />
                 
                </div>
            )


    }



}


export default App;