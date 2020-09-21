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

const onGetCarsSuccess = function (response) {
  console.log(response.cars[0].brand)
  // const myPara = document.createElement('p')
  // myPara.textContent = response.cars
  // const myCars = JSON.stringify(response.cars[0].brand)
  // document.getElementById('message').innerHTML = myCars
  const cars = response.cars
for (let i = 0; i < cars.length; i++) {

    const myHeading = document.createElement('h6')
    const myPara1 = document.createElement('p')
    const myPara2 = document.createElement('p')
    const myPara3 = document.createElement('p')

    myHeading.textContent = 'Car: '
    myPara1.textContent = 'Year: ' + cars[i].year
    myPara2.textContent = 'Brand: ' + cars[i].brand
    myPara3.textContent = 'Model ' + cars[i].model

    document.getElementById('my-cars').appendChild(myHeading)
    document.getElementById('my-cars').appendChild(myPara1)
    document.getElementById('my-cars').appendChild(myPara2)
    document.getElementById('my-cars').appendChild(myPara3)

    console.log(cars[i].brand)
  }
  $('#message').text('Thanks for indexing your cars!')
}

const onGetCarsFailure = function (error) {
  $('#message').text('Indexing cars failed. Try again!')
}

module.exports = {
  onCreateACarSuccess: onCreateACarSuccess,
  onCreateACarFailure: onCreateACarFailure,
  onGetCarsSuccess: onGetCarsSuccess,
  onGetCarsFailure: onGetCarsFailure
}
