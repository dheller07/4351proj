const db = require("../models");
const Table = db.table;
const Op = db.Sequelize.Op;

// Add new table
exports.create = (req, res) => {
    // Validate server request
    if (!req.body.tableNumber) {
        res.status(400).send({
            message: "ERROR: No table number!"
        });
        return;
    }

    // Create table
    const table = {
        tableNumber: req.body.tableNumber,
        capacityLimit: req.body.capacityLimit
    };

    // Add to database
    Table.create(table)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Unknown error occurred creating table."
            });
        });
};

// Update existing table
exports.update = (req, res) => {

};

// Delete a specified table
exports.delete = (req, res) => {

};

// Return all tables
exports.findAll = (req, res) => {

};

// Find a specified table
exports.findOne = (req, res) => {

};