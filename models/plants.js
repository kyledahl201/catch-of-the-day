const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
name: { 
  type: String,
  trim: true, 
  required: "Name of the plant is required."
},

//image: null,

desc: { 
  type: String, 
  required: "Please enter some type of description for the plant (o:"
},

price: { 
  type: String,
  required: "Please enter a price for the plant."
},

status: { 
  type: Boolean 
},

image: {
  type: {String}
},

date: { 
  type: Date, 
  default: Date.now 
}
});

const Plants = mongoose.model("Plants", plantSchema);

module.exports = Plants;
