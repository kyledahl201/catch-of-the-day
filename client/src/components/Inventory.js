import React from "react";
import AddPlantForm from './AddPlantForm';

class Inventory extends React.Component {

    render() {
        return (
            <div className="inventory">
              <h2> Inventory </h2>
              <AddPlantForm addPlant={this.props.addPlant}/>
                </div>
           
        );
    }

}  

export default Inventory;