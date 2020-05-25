import React from "react";
//import addplant 
import AddPlantForm from './AddPlantForm';

class Inventory extends React.Component {

    render() {
        return (
            <div className="inventory">
              <h2> Inventory </h2>
              <AddPlantForm addPlant={this.props.addPlant} />
              <button onClick={this.props.loadSamplePlants}>Load Sample Plants</button>
                </div>
           
        );
    }

}  

export default Inventory;