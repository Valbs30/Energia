let inputLayoutSimLuz = document.querySelector("#layout-sim-luz")
let inputLayoutMnLuz = document.querySelector("#layout-mn-luz")
let inputLayoutNaoLuz = document.querySelector("#layout-nao-luz")


let inputLayoutSim = document.querySelector("#layout-sim-led")
let inputLayoutNao = document.querySelector("#layout-nao-led")

let inputLayoutSimTomada = document.querySelector("#layout-sim-tomada")
let inputLayoutNaoTomada = document.querySelector("#layout-nao-tomada")

let inputCheck = document.querySelector("#check")
let inputBanho = document.querySelector("#banho")


inputLayoutSimLuz.addEventListener("change", atualizaStatus)
inputLayoutMnLuz.addEventListener("change", atualizaStatus)
inputLayoutNaoLuz.addEventListener("change", atualizaStatus)
inputLayoutSim.addEventListener("change", atualizaStatus)
inputLayoutNao.addEventListener("change", atualizaStatus)
inputLayoutSimTomada.addEventListener("change", atualizaStatus) 
inputLayoutNaoTomada.addEventListener("change", atualizaStatus)
inputCheck.addEventListener("change", atualizaStatus)
inputBanho.addEventListener("change", atualizaStatus)

function atualizaStatus(){

    let layoutSimLuz = inputLayoutSimLuz.checked
    let layoutMnLuz = inputLayoutMnLuz.checked
    let layoutLED = inputLayoutSim.checked
    let layoutTomada = inputLayoutSimTomada
    let check = inputCheck.checked
    let banho = inputBanho.value
    let i=0

    console.log(i)

    if(layoutSimLuz) 
        i+=1
    else
        if(layoutMnLuz)
            i=i
    else
        i-=1

    if(layoutLED)
        i+=1
    
    if(layoutTomada){
        i+=1
        console.log("Passou pelo tomada")
    }
        
    if(check){
        console.log("Passou pelo checked")
        i+=1
    }
        
    console.log(i)
    if(banho<=7){
        i+=1
        console.log(i)
    }else
        if(banho<=10)
                i-=1
            else
                i-=2
    
    if(i>=4)
        document.querySelector("#mensagem").innerHTML="Parabéns!"
    else
        if(i<=2)  
            document.querySelector("#mensagem").innerHTML="Busque melhorar! Economize!"
        else
            document.querySelector("#mensagem").innerHTML="Está na média!"
}   