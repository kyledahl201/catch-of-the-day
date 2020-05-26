import React from "react";
import {Redirect, Link} from "react-router-dom"


//my garden component will be updated with add plant
class SearchForm extends React.Component {

    searchRef = React.createRef();

    searchPlant = (event) => {
            //1. stop form from submitting
            event.preventDefault();
            //2. declare search value
            const search = this.searchRef.current.value;
            //3. log search value
            console.log(search)

    }

    

    render() {
        return (
            <div className="SearchForm">
            
            
            <form className="plant-edit" onSubmit={this.searchPlant}>
                <input name="plant-name" ref={this.searchRef} type="text" placeholder="Plant Name" />
            
                <button type="submit">Search </button>



            </form>




           

          

            </div>
           
        );
    }

}  

export default SearchForm;