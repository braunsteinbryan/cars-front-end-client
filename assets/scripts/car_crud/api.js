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

const getCars = function (data) {
  return $.ajax({
    url: config.apiUrl + '/get-cars',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateCar = function (data, carId) {
  return $.ajax({
    url: config.apiUrl + '/update-car/' + `${carId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteCar = function (carId) {
  return $.ajax({
    url: config.apiUrl + '/destroy-car/' + `${carId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createACar: createACar,
  getCars: getCars,
  updateCar: updateCar,
  deleteCar: deleteCar
}
