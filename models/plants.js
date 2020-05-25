const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//NOT SURE what to put for the image type
const plantSchema = new Schema({
name: { 
  type: String,
  trim: true, 
  required: "Name of the plant is required."
},

image: null,

desc: { 
  type: String, 
  required: "Please enter a short description of the plant (o:"
},

price: { 
  type: String,
  required: "Please enter a price for the plant."
},

status: { 
  type: Boolean 
},

date: { 
  type: Date, 
  default: Date.now 
}
});

const Plants = mongoose.model("Plants", plantSchema);

module.exports = Plants;
