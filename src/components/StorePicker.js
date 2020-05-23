import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  
  
    //create constructor method to bind methods, runs before storePicker is created

//    constructor() {
//        //must call super first in constructor, runs component were extending first
//        super();
//        console.log("gonna bind the methods yo")
//        //overwrite method on it, then attach binding (as reference) inside goToStore
//        //as the StorePicker instance
//        this.goToStore = this.goToStore.bind(this);
//    } CHANGED goToStore to arrow function ===========> (duh)
  
   //creates ref for getting text from input 
   //dont touch the dom in react
    myInput = React.createRef();

    goToStore = (event) => {
        //stop form from submitting
        event.preventDefault();
        //get the text from the input, .current is a react thing .value is that young (old) js
        const storeName = this.myInput.current.value;
        //change page after user clicks button, access props in storepicket component, then history
        this.props.history.push(`/store/${storeName}`)
    }    
    render(){
        //onSubmit creates event handler 
       // html in jsx to render 
        return (
        <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input 
            type="text" 
            ref={this.myInput}
            required
            placeholder="Store Name" 
            defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store</button>
        
    </form>
    ) 
    }
}
              
export default StorePicker;  