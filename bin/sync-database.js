const models = require('../models/user');

module.exports = () => {
    return models.sequelize.sync({ force: true })
}