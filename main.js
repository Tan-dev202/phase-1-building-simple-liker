// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHeart = document.querySelectorAll(".like-glyph")
const errorModal = document.querySelector("#modal")
const errorMessage = document.querySelector("#modal-message")

articleHeart.addEventListener('click', function(event) {
  const isEmptyHeart = articleHeart.textContent === EMPTY_HEART

  if (isEmptyHeart){
    mimicServerCall()
      .then(() => {
        articleHeart.textContent = FULL_HEART
        articleHeart.classList.add('activated-heart')
      })
      .catch(() => {
        errorMessage.textContent = error
        errorModal.classList.remove('hidden')

        setTimeout(() => {
          errorModal.classList.add('hidden')
        }, 3000)
      })
      } else {
        articleHeart.textContent = EMPTY_HEART
        articleHeart.classList.remove('activated-heart')
      }
  })




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
