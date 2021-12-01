module.exports = app => {
    const table = require("../controllers/table.controller.js");

    var router = require("express").Router();

    // Create a table
    router.post("/", table.create);

    // Find all tables
    router.get("/", table.findAll)

    // Find specified table
    router.get("/:tableNumber", table.findOne);

    // Update specified table
    router.put("/:tableNumber", table.update);

    // Delete specified table
    router.delete("/:tableNumber", table.delete);

    app.use('/api/table', router);
};