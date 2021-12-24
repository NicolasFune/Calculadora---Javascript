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
        AtualizarDisplay(AtuaisValoresDoArrayContatenados)
    })
    
    i++
})
CE.addEventListener("click",()=>{
    console.clear()
    Array_display = []
    AtuaisValoresDoArrayContatenados=""
    AtualizarDisplay("")
})
bnt_igual.addEventListener("click",()=>{
    let ArrayDosNumeros=[]
    let NovoNumero = ""
    let Numeros = []
    let Operadores = []
   
    console.clear()
    for(let z=0;z<Array_display.length;z++){

        if(isNaN(Array_display[z])){

            NovoNumero=""
            for(let y=0;y<ArrayDosNumeros.length;y++){
                NovoNumero = NovoNumero + ArrayDosNumeros[y]
                
            }
            Numeros.push(NovoNumero)
            Operadores.push(Array_display[z])
            ArrayDosNumeros=[]
       
        }else{
          
            ArrayDosNumeros.push(Array_display[z])
        }

}
    NovoNumero=""
    for(let y=0;y<ArrayDosNumeros.length;y++){
        NovoNumero = NovoNumero + ArrayDosNumeros[y]
        
    }
    Numeros.push(NovoNumero)

    console.log("Numeros: ")
    for(let t=0;t<Numeros.length;t++){
        console.log(Numeros[t])
    }
    console.log("Operadores: ")
    for(let h=0;h<Operadores.length;h++){
        console.log(Operadores[h])
    }

    for(let i=0;i<Operadores.length;i++){
        // if(Operadores[i]=="x" || Operadores[i]=="/"){
            
        // }else{

        // }
        Numeros[1]=ExecutarOperaçãoMatemática(parseInt(Numeros[0]),parseInt(Numeros[1]),Operadores[i])
        Numeros.shift()
    }

    AtualizarDisplay(Numeros[0])
    
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
function AtualizarDisplay(val){
    
    display.innerHTML = val
}
function ExecutarOperaçãoMatemática(numero1,numero2,operação){

    switch (operação) {
        case "+":
            return numero1+numero2
        break;
        case "-":
            return numero1-numero2
            break;
        case "x":
            return numero1*numero2
        break;
        case "/":
            return numero1/numero2
        break;
    
    }
}



