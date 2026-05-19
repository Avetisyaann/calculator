const display = document.getElementById('display')
const cont = document.getElementById('event')

cont.addEventListener('click', event => {
    let evTarget = event.target.innerText
    if (evTarget === '=') {
        display.innerText = eval(display.innerText)
    } else if (evTarget === 'C') {
        display.innerText = ''
    } else if (evTarget === 'AC') {
        display.innerText = display.innerText.substring(0,display.innerText.length-1)
    }else if(evTarget === 'sqrt'){
        display.innerText = Math.sqrt(display.innerText)
    }else if(evTarget === 'pow'){
        display.innerText = Math.pow(display.innerText,2)
    }
    else {
        display.innerText = display.innerText + evTarget
    }
})