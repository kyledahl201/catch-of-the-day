import React from "react";
import {Link, useHistory} from "react-router-dom"

//my garden component will be updated with add plant
class Login extends React.Component {

    render() {
        return (
            <div className="Login">Login page!

            <br/>
            
            {/* login form */}

           {/* signup button  */}

           <Link to="/signup">Sign up</Link>
            
            
            </div>
           



        );
    }

}  

export default Login;