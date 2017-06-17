   //Criando a Classe
CalculoFinanceiro =  function (){


    //Criacao de método 
   this.calculoPorcentagem =  function (valor, porc){
        resultado = valor * porc / 100 ;
        return resultado;
    }

    this.aoClicarCalcular= function (){

            //Leitura dos valores dos campos
            valor = document.getElementById("txtValor").value;
            porc =document.getElementById("txtPorc").value;
            
            //Invoca o método de Calculo
            r =  this.calculoPorcentagem(valor,porc);
            
                //Exibe mensagem de alerta
            window.alert(r);
    }


}

//Instanciando Objeto
cf = new CalculoFinanceiro();   
//invocação do método