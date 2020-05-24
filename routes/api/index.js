const router = require("express").Router();
const plantRoutes = require("./plants");
const userRoutes = require("./users");

// plant routes
router.use("/plants", plantRoutes);

// user routes
router.use("/users", userRoutes);

module.exports = router;
