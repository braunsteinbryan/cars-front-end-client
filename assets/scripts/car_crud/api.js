'use strict'

const config = require('./../config')
const store = require('./../store')

const createACar = function (data) {
  return $.ajax({
    url: config.apiUrl + '/create-a-car',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createACar: createACar
}
