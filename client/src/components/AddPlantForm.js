import React from "react";

class AddPlantForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    //for onSubmit
    createPlant = (event) => {
        //stop form from submitting
        event.preventDefault();
        //create plant variable
        const plant = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        //make sure button fires hot heat
        console.log("GROWING GREEN GREEN PLANTS 🌱 ")
        //make sure form data is saved to object
        console.log(plant)
        this.props.addPlant(plant)
        //refresh the form
        event.currentTarget.reset();
    };

    

    render() {
        return (
            <form className="plant-edit" onSubmit={this.createPlant}>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name" /> 
                    <input name="price" ref={this.priceRef} type="text" placeholder="Price" /> 
                    <select name="status" ref={this.statusRef}>
                        <option value="Available">Available!</option>
                        <option value="Unavailable">Sold Out</option>
                    </select>

                    <textarea name="desc" ref={this.descRef} placeholder="Desc" /> 
                    <input name="image" ref={this.imageRef} type="text" placeholder="Image" /> 
                    <button type="submit">+Add Plant</button>
            </form>
           
        );
    }

}  

export default AddPlantForm;