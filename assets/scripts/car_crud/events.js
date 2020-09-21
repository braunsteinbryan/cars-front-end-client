'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateACar = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createACar(data)

    .then(ui.onCreateACarSuccess)

    .catch(ui.onCreateACarFailure)
}

const onGetCars = function (event) {
  event.preventDefault()

  api.getCars()

    .then(ui.onGetCarsSuccess)

    .catch(ui.onGetCarsFailure)
}

module.exports = {
  onCreateACar: onCreateACar,
  onGetCars: onGetCars
}
