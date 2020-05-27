const router = require("express").Router();
const plantRoutes = require("./plants");
const plantapi = require("./plantapi");
const userRoutes = require("./users");

// plant routes
router.use("/plants", plantRoutes);

// user routes
router.use("/users", userRoutes);

router.use(plantapi)

module.exports = router;
