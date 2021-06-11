const mainContainer = document.getElementById('main-container')
const input1 = document.getElementById("header");
const input2 = document.getElementById("text");
const input3 = document.getElementById("linkname");
const input4 = document.getElementById("link");

input1.addEventListener('click', function() {
    input1.value = ''
})

input2.addEventListener('click', function() {
    input2.value = ''
})

input3.addEventListener('click', function() {
    input3.value = ''
})

input4.addEventListener('click', function() {
    input4.value = ''
})

color.addEventListener('input', (event) => {
    header.style.color = event.currentTarget.value
})

color.addEventListener('input', (event) => {
    content.style.color = event.currentTarget.value
})

color.addEventListener('input', (event) => {
    linksName.style.color = event.currentTarget.value
})

const header = document.createElement('h1')
mainContainer.appendChild(header)
header.style.textAlign = 'center'
header.style.marginBottom = '20px'

input1.addEventListener('keydown', (event) => {
    const title = document.createTextNode(input1.value);
    if(event.keyCode === 13) {
        header.appendChild(title);            
    }
})

const content = document.createElement('div')
mainContainer.appendChild(content)

input2.addEventListener('keydown', (event) => {
    const text = document.createTextNode(input2.value);
    if(event.keyCode === 13) {
        content.appendChild(text);            
    }
})

const linksName = document.createElement('a')
mainContainer.appendChild(linksName)

input3.addEventListener('keydown', (event) => {
    const linkname = document.createTextNode(input3.value);
    if(event.keyCode === 13) {
        linksName.appendChild(linkname);            
    }

    input4.addEventListener('keydown', (event) => {
    const link = document.createTextNode(input4.value);
    if(event.keyCode === 13) {
        linksName.setAttribute('href', link.textContent)         
    }
})
    
})

const clear = document.getElementById('delete')
clear.addEventListener('click', function() {
    let del = confirm('Do you want to clear the form?')
    if(del === true) {
    input1.value = ""
    input2.value = ""
    input3.value = ""
    input4.value = ""
    }
})

const clear2 = document.getElementById('clearField')
clear2.addEventListener('click', function() {
    let del2 = confirm('Do you want to clear the form?')
    if(del2 === true) {
        mainContainer.innerHTML = ""
    }
})

// ввести и удалить можно один раз, во второй вывести текст в поле не получится

