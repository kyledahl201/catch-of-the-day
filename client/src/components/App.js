import React from "react";
import Header from './Header';
import MyGarden from './MyGarden';
import Inventory from "./Inventory";



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
       plants[`plant${Date.now()}`] = plant
       //put eupdated state into state, set new plants objects to state
       this.setState({
           plants: plants
       })
    }
    render() {
            return(
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="Fresh Plants Daily" />
                        
                    </div>
                    <MyGarden />
                    <Inventory addPlant={this.addPlant} />
                 
                </div>
            )


    }



}


export default App;