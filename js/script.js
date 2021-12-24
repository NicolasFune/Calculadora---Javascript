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

    let NumerosParte01 = []
    let NumerosParte02 = []
    for(let i=0;i<Operadores.length;i++){
        if(Operadores[i]=="x" || Operadores[i]=="/"){
            Numeros[i]=ExecutarOperaçãoMatemática(parseInt(Numeros[i]),parseInt(Numeros[i+1]),Operadores[i])
            NumerosParte01 = Numeros.slice(0,i+1)
            console.log("NumerosParte01: ")
                for(let h=0;h<NumerosParte01.length;h++){
                    console.log(NumerosParte01[h])
                }
            if(i+2>Numeros.length-1){
                console.log("NumerosParte01: ")
                for(let h=0;h<NumerosParte01.length;h++){
                    console.log(NumerosParte01[h])
                }

            }else{
                NumerosParte02 = Numeros.slice(i+2,Numeros.length)
                console.log("NumerosParte02: ")
                for(let h=0;h<NumerosParte02.length;h++){
                    console.log(NumerosParte02[h])
                }
            }
            Numeros = NumerosParte01.concat(NumerosParte02)
            console.log("Numeros: ")
            for(let t=0;t<Numeros.length;t++){
                console.log(Numeros[t])
            }
            
        }else{

        }

        
    }

    //AtualizarDisplay(Numeros[0])
    
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



