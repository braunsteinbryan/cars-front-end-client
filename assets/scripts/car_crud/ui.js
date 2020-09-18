'use strict'

const store = require('./../store')

const onCreateACarSuccess = function (response) {
  console.log(response)
  $('#message').text('Thanks for creating a car!')
  $('#change-password-form').trigger('reset')
}

const onCreateACarFailure = function (error) {
  $('#message').text('Create a car failed. Try again!')
}

module.exports = {
  onCreateACarSuccess: onCreateACarSuccess,
  onCreateACarFailure: onCreateACarFailure
}
