import React from "react";
import {Redirect, Link} from "react-router-dom"


//my garden component will be updated with add plant
class search extends React.Component {

    myInput = React.createRef();

    //function that runs upon form submit
    searchPlants = event => {

        //1.Stop form from submitting
        event.preventDefault()

        console.log("bitch it workin 🍃")

        //2. get the text from the input
        const plantSearch = (this.myInput.current.value)
        //3. send to search results url
        this.props.history.push(`/searchresults`)
    }

    render() {
        return (
            <div className="search">Search/main page!

            <br/>

            {/* <!-- Search form, call handleSubmit on search --> */}
            <form className="form-group mt-5 mb-5" onSubmit={this.searchPlants}>
        <input 
        className="form-control mb-5" 
        required  
        placeholder="Plant Name"
        ref={this.myInput}
        
        />
        <button className="btn btn-success mt-3 mb-5" type="submit" onClick={this.handleClick}>
          Search
        </button>
      </form>
                <br/>
            <Link to="/mygarden">My Garden</Link>

            </div>
           
        );
    }

}  

export default search;