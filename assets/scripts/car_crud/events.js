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
    .then($('#message').html('Create success!'))
    .catch(ui.onCreateACarFailure)
}

const onGetCars = function (event) {

  api.getCars()

    .then(ui.onGetCarsSuccess)
    .then($('#index-cars-message').html('Showing most current cars!'))
    .catch(ui.onGetCarsFailure)
}

const onHideCars = function (event) {
  $('#my-cars').hide()
  // $('#message').toggle('on')
}

const onUpdateCar = function (event) {
  event.preventDefault()

  const updateFormInput = event.target
  const carId = $(updateFormInput).attr('id')
  const data = getFormFields(updateFormInput)

  api.updateCar(data, carId)

    .then(ui.onUpdateCarSuccess)
    .then(onGetCars)
    .then($('#message').html('Update success!'))

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
    .then($('#message').html('Delete success!'))

    .catch(ui.onDeleteCarFailure)
}

module.exports = {
  onCreateACar: onCreateACar,
  onGetCars: onGetCars,
  onHideCars: onHideCars,
  onUpdateCar: onUpdateCar,
  showUpdateForm: showUpdateForm,
  onDeleteCar: onDeleteCar
}
