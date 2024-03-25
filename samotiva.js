function Enviar(){
if(document.getElementById("snome").value == "" || 
document.getElementById("peso").value == "" || 
document.getElementById("altura").value == "" ||
document.getElementById("idade").value == ""||
document.getElementById("circunferencia").value == ""){
    alert("O campo não pode estar vazio");

    document.getElementById("snome").value;
    document.getElementById("peso").value;
    document.getElementById("altura").value;
    document.getElementById("circunferencia").value;
    document.getElementById("idade").value;
}
    var fPeso       = parseFloat(document.getElementById("peso").value);
    var fAltura     = parseFloat(document.getElementById("altura").value);
    var fCirc       = parseFloat(document.getElementById("circunferencia").value);
    var iIdade      = parseFloat(document.getElementById("idade").value);
    var Masc        = document.getElementById("masc");
    var Femi        = document.getElementById("femi");
    var img         = document.getElementById("imagem").value;
    var sNome       = document.getElementById("snome").value;
    var mb;
    var imc;
    var frequencia;
    var altura =0;
    var Risco;
    /********************************************************************************************************************/

    //IMC
    altura = fAltura / 100;
    imc = fPeso /(altura* altura);

    /********************************************************************************************************************/
    //Frequencia Cardiaca e Metabolismo Basal
    if(Masc.checked){
        frequencia = 226 - iIdade;
        mb = 66 + (13.7 * fPeso) + (5 * fAltura) - (6.5 *iIdade);

        //RISCO
    if(fCirc<=90){
        Risco = document.getElementById("resultado4").innerHTML = "normal";
    
    }
    else if(fCirc>=91 && fCirc<=93){
        Risco = document.getElementById("resultado4").innerHTML = "medio";

    }
    else if(fCirc>=94 && fCirc<=98){
        Risco = document.getElementById("resultado4").innerHTML = "alto";
    }
    else if(fCirc>98){
        Risco = document.getElementById("resultado4").innerHTML = "altissimo";
    }
    /********************************************************************************************************************/  
    }
    else if(Femi.checked){
        frequencia = 220 - iIdade;
        mb = 655 + (9.6 * fPeso) + (1.8 * fAltura) - (4.7 *iIdade);

    if(fCirc<=80){
        Risco = document.getElementById("resultado4").innerHTML ="normal";
 
    }else if(fCirc>=81 && fCirc<=83){
        Risco = document.getElementById("resultado4").innerHTML ="medio";

      }else if(fCirc>=84 && fCirc<=88){
        Risco = document.getElementById("resultado4").innerHTML ="alto";

      }else if(fCirc>88){
        Risco = document.getElementById("resultado4").innerHTML ="altissimo";
        }
    }
    
    if(imc<17){
        document.getElementById("resposta").innerHTML = "Você esta Muito Abaixo do Peso";
    }
    else if(imc>=17 && imc<=18.4){
        document.getElementById("resposta").innerHTML = "Você está Abaixo do Peso";
    }
    else if(imc>=18.5 && imc<=24.9){
        document.getElementById("resposta").innerHTML = "Você está no Peso Ideal";
    }
    else if(imc>=25 && imc<=29.9){
        document.getElementById("resposta").innerHTML = "Você está Acima do Peso ";
    }
    else if(imc>=30. && imc<=34.9){
        document.getElementById("resposta").innerHTML = "Você está na Obesidade Nivel II";
    }
    else if(imc>=35 && imc<=39.9){
        document.getElementById("resposta").innerHTML = "Você está na Obesidade Severa II";
    }
    else {
        document.getElementById("resposta").innerHTML = "Você está na Obesidade Morbida III";
    }


    document.getElementById("rnome").innerHTML      = sNome;
    document.getElementById("resultado").innerHTML  = imc.toFixed(2);
    document.getElementById("resultado2").innerHTML = frequencia;
    document.getElementById("resultado3").innerHTML = mb.toFixed(2);
    document.getElementById("resultado4").innerHTML = Risco;

} 