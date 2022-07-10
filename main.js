var peso= document.getElementById("peso").value;
var altura= document.getElementById("altura").value;



function calculoImc(x,y){

    var imc = x/(y*2)

    return imc
}

function limpar(){

    if(peso.value!=="" && altura.value!==""){
      document.getElementById("peso").value=""
      document.getElementById("altura").value=""
      document.getElementById("resultado").innerHTML=""
  
    }
    
  
  }


function calcularImc(){
   
    var peso= document.getElementById("peso").value;
    var altura= document.getElementById("altura").value;

    if(peso=="" || altura=="") {
        alert("Preencha todos os campos")
        var entradas = document.getElementById("peso")
        var entrada = document.getElementById("altura")
        document.getElementById("resultado").innerHTML=" "

        document.getElementById("peso").style.border = "solid red";
        document.getElementById("altura").style.border = "solid red";
        
    } 

    else{
        var resultado =  calculoImc(peso,altura)
        if(resultado<10){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" Fora dos padrões IMC."
        }

        if(resultado>10 && resultado<=18.5){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" Atenção,está abaixo do peso."
        }

        if(resultado>=18.5 && resultado<=24.9){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" peso normal."
        }

        if(resultado>=25 && resultado<=29.9){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" Excesso de peso."
        }

        if(resultado>=30 && resultado<=34.9){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" Obesidade Classe I."
        }

        if(resultado>=35 && resultado<=39.9){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" Obesidade Classe II."
        }

        if(resultado>=40){
            document.getElementById("resultado").innerHTML="IMC: "+resultado.toFixed(2) +" Obesidade Classe III."
        }
        
    }


   
    

 

}