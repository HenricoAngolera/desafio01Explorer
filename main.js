const darkModeButton = document.querySelector('input[type=checkbox]')
const body = document.querySelector('body')

console.log(darkModeButton)

darkModeButton.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark')
    console.log('dark')
  } else {
    body.classList.remove('dark')
    console.log('no dark')
  }
})
