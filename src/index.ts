
const calculetorButtons: NodeListOf<HTMLButtonElement> =  document.querySelectorAll('.c-calculetor__btn')
const calculetorScreen = document.querySelector('.c-calculetor__screen')
let buttonArray = Array.from(calculetorButtons)

interface simbolos {
    "x": string
    "^": string
}

const simbolosSub: simbolos = {
    "x": "*",
    "^": "**" 
}

buttonArray.forEach((btn) => {
    btn.addEventListener('click', ()=> {
     runCalculetor(btn)
    })    
})

function runCalculetor(btn: HTMLButtonElement) {
    if (btn.value == 'Del') {
           // @ts-ignore
        calculetorScreen.innerHTML = calculetorScreen.innerHTML.substring(0, calculetorScreen.innerHTML.length-1)
    }
    else if (btn.value == 'C') {
           // @ts-ignore
        calculetorScreen.innerHTML = '' 
    }
    else if ( btn.value == '=') {
           // @ts-ignore
        if (!(calculetorScreen.innerHTML == '')) {
               // @ts-ignore
            let value = eval(calculetorScreen.innerHTML)
               // @ts-ignore
            calculetorScreen.innerHTML = value
        }
    }
    else if(btn.value == '%') {
        // @ts-ignore
        calculetorScreen.innerHTML = toString(eval(calculetorScreen.innerHTML) / 100)
    }
    else {
        // @ts-ignore
        calculetorScreen.innerHTML += simbolosSub[btn.value] ?? btn.value
    }
}