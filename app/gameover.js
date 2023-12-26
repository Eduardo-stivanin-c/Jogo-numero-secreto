"use strick"
let gameoverpagina=false
var  comando="game over"

//conidfgurapro evento sem chegcado na mudaça do  elento chute
elementoChute.onchange=function () {
    gameover(chute)   
    
}


//recusiva mentoe a gamibara só para quando tiver ativado o a tela de gameover

function loop() {
//varivel i é o contado r doo loop
    let i = gameover(chute)
//    enbqunaod varivel  texto for difrente de game over repte ao loop só para a hora que for falso
gameover(chute)
if(i ===false){
    loop()
}

}

 




function  gameover(input){
    //versão Edge                                       versão Chrome
    if(String(input).toLowerCase()==`${comando}.` || input ==`${comando}`){
        document.body.innerHTML=`<h1>${comando}</h1><input id='jogar-novamente' class="btn-jogar" type="button" value='Jogar de Novo'>`
        //alterando cor do fundo
        document.body.classList.add('roxo')
   console.log(true)
        return true        
    }
        else{

            console.log(`o texto não é  ${comando}`)
        
        return false
        }


}
//linha do desafio
//gameover(chute)
//fim parte do Gmae over


//mode conmpatiblidade com Edge porque no Edge G e o  de Game over são misusculos e tem ponto final, Chorme só texto menisculo mesmo      
 //chute.toLowerCase()==`${comando}.` || chute ==`${comando}`

 //toLowerCase = para caso minusculo