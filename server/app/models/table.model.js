module.exports = (sequelize, Sequelize) => {
    const Table = sequelize.define("table", {
        tableNumber: {
            type: Sequelize.INTEGER
        },
        capacityLimit: {
            type: Sequelize.INTEGER
        }
    });

    return Table;
};