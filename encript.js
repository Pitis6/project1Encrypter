const textArea = document.querySelector('textarea')
const buttonEcriptar = document.getElementById('encriptar')
const buttonDesEcriptar = document.getElementById('desEncriptar')
const output = document.getElementsByClassName('output')
const aside = document.querySelector('aside')
const rules = {
    a: "ai",
    i: "imes",
    e: "enter",
    o: "ober",
    u: "ufat"
}
let text = '';
let textArray = [];
let desencripted = '';

textArea.addEventListener('input', event =>{
 text = event.target.value;
});

buttonEcriptar.addEventListener('click', (event) =>{
    event.preventDefault();
    textArray = text.split('')
    textArray.map((item, index) =>{
        textArray[index] = rules[item] ? rules[item]:item;
    })
    output[0].innerHTML = `<p>${textArray.join('')}</p>`
    aside.innerHTML = `<p>${textArray.join('')}</p>`
});


buttonDesEcriptar.addEventListener('click', (event) =>{
    event.preventDefault();
    desencripted = text;
    Object.entries(rules).forEach((item) =>{
    desencripted = desencripted.replaceAll(item[1],item[0] )
    })
    output[0].innerHTML = `<p>${desencripted}</p>`
    aside.innerHTML = `<p>${desencripted}</p>`
});


