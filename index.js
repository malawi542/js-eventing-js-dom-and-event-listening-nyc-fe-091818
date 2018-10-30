// 1) get the element

const main = document.querySelector('#main')


// 2) Add an event listener

function onClick() {
  alert('i was clicked')
}
main.addEventListener('click', onClick)

function onKeyDown(event) {
  if(event.which === 74) {
    event.preventDEfault()
  }
}
const input = document.querySelector('input')

input.addEventListener('keydown', onKeyDown)


const divs = document.querySelectorAll('div')
console.log(divs)