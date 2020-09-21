'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const carCrudEvents = require('./car_crud/events')

$(() => {
  $('#my-cars').on('click', '#delete-button', carCrudEvents.onDeleteCar)
  $('#my-cars').on('submit', '.update-car', carCrudEvents.onUpdateCar)
  $('#my-cars').on('click', '#update-button', carCrudEvents.showUpdateForm)
  $('#get-cars').on('click', carCrudEvents.onGetCars)
  $('#create-a-car').on('submit', carCrudEvents.onCreateACar)
  $('#sign-out-link').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
})
