'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email + ' !')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#welcome-message').text('To play Tic Tac Toe, Please sign in!')
}

const onSignUpFailure = function (error) {
    $('#message').text('Sign up failed. Try again!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email + ' !')
  $('#sign-in-form').trigger('reset')
  $('#welcome-message').text('Click on New Game to start playing!')
  $('#new-game').show()
  $('#get-games').show()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out-link').show()
}

const onSignInFailure = function (error) {
    $('#message').text('Sign in failed. Try again!')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Thanks for changing your password!')
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  $('#message').text('Change password failed. Try again!')
}

const onSignOutSuccess = function () {
  $('#welcome-message').text('You have been successfully signed out!')
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-link').hide()
  $('#new-game').hide()
  $('#get-games').hide()
  $('#sign-up-form').show()
  $('#message').hide()
  $('#game-details').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed. Try again!')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure
}
