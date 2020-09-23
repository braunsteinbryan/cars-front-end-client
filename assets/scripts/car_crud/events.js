'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onCreateACar = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createACar(data)

    .then(ui.onCreateACarSuccess)

    .then(onGetCars)

    .catch(ui.onCreateACarFailure)
}

const onGetCars = function (event) {
  // event.preventDefault()

  api.getCars()

    .then(ui.onGetCarsSuccess)

    .catch(ui.onGetCarsFailure)
}

const onUpdateCar = function (event) {
  event.preventDefault()

  const updateFormInput = event.target
  const carId = $(updateFormInput).attr('id')
  const data = getFormFields(updateFormInput)

  api.updateCar(data, carId)

    .then(ui.onUpdateCarSuccess)

    .then(onGetCars)

    .catch(ui.onUpdateCarFailure)
}

const showUpdateForm = function (event) {
  event.preventDefault()

  const carId = $(event.target).attr('value')
  $('#' + carId).show()
}

const onDeleteCar = function (event) {

  const carId = $(event.target).attr('value')

  api.deleteCar(carId)

    .then(ui.onDeleteCarSuccess)

    .then(onGetCars)

    .catch(ui.onDeleteCarFailure)
}

module.exports = {
  onCreateACar: onCreateACar,
  onGetCars: onGetCars,
  onUpdateCar: onUpdateCar,
  showUpdateForm: showUpdateForm,
  onDeleteCar: onDeleteCar
}
