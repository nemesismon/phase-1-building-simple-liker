// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Complete DOM load
document.addEventListener('DOMContentLoaded', () => {

// Collect all the heart elements into an array
const hearts = document.querySelectorAll('span.like-glyph');
console.log(hearts);

// Iterate through the array to listen for the user clicks on the induvidual heart, 
// then proceed to callback to modify their status accordingly

hearts.forEach(heart => heart.addEventListener('click', modifyLikes))

// Call mock server and prepare actions to be completed depending  
// on the "server" response 

function modifyLikes(hearts) {
  mimicServerCall()
  .then(() => {
    if(hearts.target.innerText === EMPTY_HEART) {
      hearts.target.innerText === FULL_HEART
      hearts.target.classList.add('.activated-heart')
    }
    else if(hearts.target.innerText === FULL_HEART) {
      hearts.target.innerText === EMPTY_HEART
      hearts.target.classList.remove('activated-heart')
    }
  })
  .catch(() => {
    document.querySelector('modal').show

    setTimeout(() => {
      document.querySelector('modal').hidden}, 3000)
    })
  }

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