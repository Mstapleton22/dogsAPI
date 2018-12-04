document.addEventListener('DOMContentLoaded', function () {
  console.log('dom is on')
  var puppy = document.querySelector('.puppyPics')
  var image = document.querySelector('img')
  puppy.addEventListener('click', function (event) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        image.src = jsonResponse.message
      })
  })
})