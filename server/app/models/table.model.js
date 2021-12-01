module.exports = (sequelize, Sequelize) => {
    const Table = sequelize.define("table", {
        tableNumber: {
            type: Sequelize.INT
        },
        capacityLimit: {
            type: Sequelize.INT
        }
    });

    return Table;
};