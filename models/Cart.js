const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  total_value: {
    type: Sequelize.DOUBLE,
    defaultValue: 0
  }
})

module.exports = Cart