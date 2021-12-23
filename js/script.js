let Array_display = []
let i = 0
const display = document.querySelector(".display")
const CE = document.querySelector("#bnt_CE")
const bnt_igual = document.querySelector("#bnt_igual")
let AtuaisValoresDoArrayContatenados

const bnt_ = document.querySelectorAll(".bnt_")

Array.from(bnt_).forEach(()=>{
    let button = bnt_.item(i)
    button.addEventListener("click",()=>{
        EmpurrarNoArrayDisplay(button.innerHTML)
        AtualizarDisplay()
    })
    
    i++
})
CE.addEventListener("click",()=>{
    Array_display = []
    AtuaisValoresDoArrayContatenados=""
    AtualizarDisplay()
})
bnt_igual.addEventListener("click",()=>{
    
    for(let z=0;z<Array_display.length;z++){
        console.log(typeof Array_display[z])
}
})
function EmpurrarNoArrayDisplay(digito){
    if(Array_display.length<11){
        Array_display.push(digito)
        AtuaisValoresDoArrayContatenados = ""
        for(let z=0;z<Array_display.length;z++){
            AtuaisValoresDoArrayContatenados = AtuaisValoresDoArrayContatenados + Array_display[z]
    }
        
    }else{
        alert("O limite de digitos é 11")
    }
    
}
function AtualizarDisplay(){
    
    display.innerHTML = AtuaisValoresDoArrayContatenados
}
function CriarVariavelNumerica(){
    let n
}



