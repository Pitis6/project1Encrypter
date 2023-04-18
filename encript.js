const textArea = document.querySelector('textarea')
const buttonEcriptar = document.getElementById('encriptar')
const buttonDesEcriptar = document.getElementById('desEncriptar')
const output = document.getElementsByClassName('output');
let text = '';
textArea.addEventListener('input', event =>{
 text = event.target.value;
});

buttonEcriptar.addEventListener('click', (event) =>{
    event.preventDefault();
    output[0].innerHTML = `<p>${text}</p>`
});

