import React from "react";
import {Redirect, Link} from "react-router-dom"
import axios from 'axios'
// import SearchForm from "./SearchForm";
import PlantComponent from "./PlantComponent/Plant.js";

class search extends React.Component {
    constructor(){
        super()
        this.state = {
            plants: [
                {
                    name: "cactus"
                }
            ]

        }
    }
   
    searchRef = React.createRef();

    searchPlant = (event) => {
            //1. stop form from submitting
            event.preventDefault();
            //2. declare search value
            const search = this.searchRef.current.value.trim();
            //3. log search value
            console.log(search)


                //AXIOS GOES HERE !!!!
                





               
        
                axios.get("/api/plantapi/" + search)
                  .then(res => {
                    const plants = res.data;
                    // this.setState({ plants: plants }); adding a comment
                    this.setState({plants})
                  console.log(plants)
                  }).catch(err => console.log(err))

                




 

        

    }

   

    render() {
        return (
            <div className="search">Search/main page!

            <br/>

            <div className="SearchForm">
            
            
            <form className="plant-edit" onSubmit={this.searchPlant}>
                <input name="plant-name" ref={this.searchRef} type="text" placeholder="Plant Name" />
            
                <button type="submit">Search </button>




            </form>




           

          

            </div>



             <br/>

             <div>
                    {this.state.plants.map(plant => (
        <PlantComponent
        name = {plant.common_name}
        link = {plant.link}/>

        
      ))}
            </div>
            <Link to="/mygarden">My Garden</Link>

            </div>
           
        );
    }

}  

export default search;