function reverseString(string) {
  let final = '';
  for (let i = string.length - 1; i >= 0; i--) {
    final = final + string.charAt(i);
  } //final=aloh
  return final;
}

function handleClick(event) {
  event.preventDefault();
  const stringEl = document.getElementById('text');
  const parrafoEl = document.getElementById('resultado');
  const string = stringEl.value;
  const stringInverso = `El string inverso de ${string} es: ${reverseString(string)}`;
  parrafoEl.textContent = stringInverso;
}
const buttonEl = document.getElementById('stringbutton');
buttonEl.addEventListener('click', handleClick);
