'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = (sequelize, DataTypes)=>{
  return dbMock.define('Quote', {
    text: 'A great work is made out of a combination of obedience and liberty'
  })
}
