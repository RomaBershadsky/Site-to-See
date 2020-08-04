const regex = /[A-Za-z ]/;
function validate(e) {
  const chars = e.target.value.split('');
  const char = chars.pop();
  if (!regex.test(char)) {
    e.target.value = chars.join('');
    console.log(`${char} is not a valid character.`);
  }
}
document.querySelector('#myInput').addEventListener('input', validate);