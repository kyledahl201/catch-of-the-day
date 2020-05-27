const axios = require("axios");
require('dotenv').config()
const router = require("express").Router();
router.get("/plantapi/:plantsearch", (req,res) => {

    const trefleUrl = 'https://trefle.io/api/plants?q=' + req.params.plantsearch + '&token=' + process.env.REACT_APP_TREFLE_KEY;
    console.log(trefleUrl)
    axios.get(trefleUrl)
      .then(data => {
        const plants = data.data;
        // this.setState({ plants: plants });
        
      console.log(plants)
      res.json(plants)
      }).catch(err => {
        console.log("does not work")
        
        res.json(err)
      })

})

module.exports = router 