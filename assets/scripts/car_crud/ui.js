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
  $('#my-cars').html('').show()
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
    const updateButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    updateButton.setAttribute('id', 'update-button')
    deleteButton.setAttribute('id', 'delete-button')
    updateButton.value = cars[i]._id
    deleteButton.value = cars[i]._id


    myHeading.textContent = 'Car:'
    myPara1.textContent = 'Year: ' + cars[i].year
    myPara2.textContent = 'Brand: ' + cars[i].brand
    myPara3.textContent = 'Model ' + cars[i].model
    updateButton.textContent = 'Update'
    deleteButton.textContent = 'Delete'


    document.getElementById('my-cars').appendChild(myHeading)
    document.getElementById('my-cars').appendChild(myPara1)
    document.getElementById('my-cars').appendChild(myPara2)
    document.getElementById('my-cars').appendChild(myPara3)
    document.getElementById('my-cars').appendChild(updateButton)
    document.getElementById('my-cars').appendChild(deleteButton)
    $('#my-cars').append(`<form class='update-car' id='${cars[i]._id}'>
      <fieldset>
        <legend>What Would You Like To Update The Car To?</legend>
        <div>
          <label>Choose car:</label>
        </div>
          <div>
            <label>Year</label>
          </div>
          <div>
            <input name="car[year]" type="text" value="${cars[i].year}">
          </div>
          <div>
            <label>Brand</label>
          </div>
          <div>
            <input name="car[brand]" type="text" value="${cars[i].brand}">
          </div>
          <div>
            <label>Model</label>
          </div>
          <div>
            <input name="car[model]" type="text" value="${cars[i].model}">
          </div>
        <input class='update-input' data-value-index='${cars[i]._id}' type="submit">
      </fieldset>
    </form>`)
    $('.update-car').hide()

    console.log(cars[i]._id)
  }
  $('#message').text('Thanks for indexing your cars!')
}

const onGetCarsFailure = function (error) {
  $('#message').text('Indexing cars failed. Try again!')
}

const onUpdateCarSuccess = function (response) {
  console.log(response)
  $('#message').text('Thanks for updating a car!')
}

const onUpdateCarFailure = function (error) {
  $('#message').text('Update car failed. Try again!')
}

const onDeleteCarSuccess = function (response) {
  console.log(response)
  $('#message').text('Thanks for deleting a car!')
}

const onDeleteCarFailure = function (error) {
  $('#message').text('Delete car failed. Try again!')
}

module.exports = {
  onCreateACarSuccess: onCreateACarSuccess,
  onCreateACarFailure: onCreateACarFailure,
  onGetCarsSuccess: onGetCarsSuccess,
  onGetCarsFailure: onGetCarsFailure,
  onUpdateCarSuccess: onUpdateCarSuccess,
  onUpdateCarFailure: onUpdateCarFailure,
  onDeleteCarSuccess: onDeleteCarSuccess,
  onDeleteCarFailure: onDeleteCarFailure
}
