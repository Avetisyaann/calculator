const display = document.getElementById('display')
const cont = document.getElementById('event')

cont.addEventListener('click', event => {
    let evTarget = event.target.innerText
    if(evTarget === '='){
        display.innerText = eval(display.innerText)
    }else{
        display.innerText = display.innerText + evTarget
    }
})