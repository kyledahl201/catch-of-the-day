const mongoose = require("mongoose");
const db = require("../models");

// This file empties the plants collection and inserts these starter plants

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantsheets", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
  );

const plantSeed = [
  {
    name: "Monstera",
    image: "/images/monstera.jpg",
    desc: "Monstera deliciosa is a species of evergreen tropical vine that is a part of Araceae, the aroid family. Native to the Tropical Americas, it is one of the few aroids which produces edible fruit, hence the species epithet deliciosa.",
    price: 30,
    status: "available"
  },

  {
    name: "Alocasia",
    image: "/images/alocasia.jpg",
    desc: "Alocasia is a genus of broad-leaved rhizomatous or tuberous perennial flowering plants from the family Araceae. ",
    price: 25,
    status: "available"
  },

  {
    name: "Calathea",
    image: "/images/calathea.jpg",
    desc: "Calathea plants are part of the family of plants known as Marantaceae, which is a species of flowering plants from tropical areas such as Africa. They are famous for their wide, green, colorful leaves.",
    price: 40,
    status: "unavailable"
  },

  {
    name: "Fiddle Leaf",
    image: "/images/fiddleLeaf.jpg",
    desc: "Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae.",
    price: 33,
    status: "available"
  },

  {
    name: "Pothos",
    image: "/images/pothos.jpg",
    desc: "Epipremnum aureum is a species of flowering plant in the arum family Araceae, native to Mo'orea in the Society Islands of French Polynesia.",
    price: 42,
    status: "available"
  },

  {
    name: "Pilea Peperomia",
    image: "/images/pileaPeperomia.jpg",
    desc: "Pilea peperomioides, more commonly known as Chinese money plant, pancake plant, UFO plant, lefse plant, missionary plant, bender plant, or mirror grass, is a species of flowering plant in the nettle family Urticaceae, native to Yunnan and Sichuan provinces in southern China.",
    price: 75,
    status: "available"
  },

  {
    name: "Raven ZZ",
    image: "/images/ravenZZ.jpg",
    desc: "A new and rare variety, Costa Farms' award-winning Raven ZZ plant features bright Green New growth that quickly matures to a rich, purple-black, dark foliage that contrasts other houseplants.",
    price: 50,
    status: "available"
  },

  {
    name: "Rubber Plant",
    image: "/images/rubberTree.jpg",
    desc:"Rubber trees, formally ficus elastica, can be enjoyed as either medium-sized house plants or grown to become focal point, beautiful indoor trees.",
    price: 42,
    status: "available"
  },

  {
    name: "Snake Plant",
    image: "/images/snakePlant.jpg",
    desc: "It's one of the best houseplants around. Grow Sansevieria in any room in your home, they also make great office plants. They grow faster in bright light conditions but tolerate low-lit rooms just as well.",
    price: 37,
    status: "available"
  }
];

const userSeed = [
  {
    name: "Garrett",
    image: "/images/garrett.jpg",
    desc: "back-end dude",
    price: 30,
    status: "available"
  },

  {
    name: "Kyle",
    image: "/images/kyle.jpg",
    desc: "front-end dude",
<<<<<<< HEAD
    price: 25,
    status: "available"
  }
];

db.Plants
  .remove({})
  .then(() => db.Plants.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });