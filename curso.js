$(function(){

    var valorViejo=0;
    var valorNuevo=0;
    var displayNow=0;
    var lastOperation=null;
    
    $("button").click(function() {
        fired_button = $(this).val();
        operation(fired_button);
    });

    function operation(button){

        if(!isNaN(button)){
            displayNow=getNumber(button);
            valorNuevo=displayNow;
            display(displayNow);       
        }
        else{
            switch(button) {
                case "AC":
                    allClear();
                    display(displayNow);
                    break;
                case "+/-":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        valorNuevo=opposite(valorNuevo);
                        displayNow=valorNuevo;
                        display(displayNow);
                    }
                    break;
                case "%":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        valorNuevo=percentage(valorNuevo,valorViejo);
                        displayNow=valorNuevo;
                        display(displayNow);
                    }
                    break;
                case "/":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        if(lastOperation==button){
                            displayNow= divide(valorViejo,valorNuevo);
                            display(displayNow);
                            valorViejo=valorNuevo;
                            valorNuevo=displayNow;
                        } else if(lastOperation != null){
                            valorNuevo=equals(valorViejo,valorNuevo);
                            display(valorNuevo);
                            lastOperation=button;
                        }
                        else {
                            lastOperation=button;
                        }
                        valorViejo=valorNuevo;
                        displayNow=0;
                    }
                    break;
                case "*":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        if(lastOperation==button){
                            displayNow= multiply(valorViejo,valorNuevo);
                            display(displayNow);
                            valorViejo=valorNuevo;
                            valorNuevo=displayNow;
                        } else if(lastOperation != null){
                            valorNuevo=equals(valorViejo,valorNuevo);
                            display(valorNuevo);
                            lastOperation=button;
                        }
                        else {
                            lastOperation=button;
                        }
                        valorViejo=valorNuevo;
                        displayNow=0;
                    }
                    break;
                case "-":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        if(lastOperation==button){
                            displayNow= resta(valorViejo,valorNuevo);
                            display(displayNow);
                            valorViejo=valorNuevo;
                            valorNuevo=displayNow;
                        } else if(lastOperation != null){
                            valorNuevo=equals(valorViejo,valorNuevo);
                            display(valorNuevo);
                            lastOperation=button;
                        }
                        else {
                            lastOperation=button;
                        }
                        valorViejo=valorNuevo;
                        displayNow=0;
                    }
                    break;
                case "+":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        if(lastOperation==button){
                            displayNow= suma(valorViejo,valorNuevo);
                            display(displayNow);
                            valorViejo=valorNuevo;
                            valorNuevo=displayNow;
                        } else if(lastOperation != null){
                            valorNuevo=equals(valorViejo,valorNuevo);
                            display(valorNuevo);
                            lastOperation=button;
                        }
                        else {
                            lastOperation=button;
                        }
                        valorViejo=valorNuevo;
                        displayNow=0;
                    }
                    break;
                case ".":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        valorNuevo=point(valorNuevo);
                        displayNow=valorNuevo;
                        display(displayNow);
                    }
                    break;
                case "=":
                    if(!(isNaN(valorNuevo)||isNaN(valorViejo))){
                        displayNow=equals(valorViejo,valorNuevo);
                        display(displayNow);
                    }
                    break;
                default:
                    alert("Bo, campeón, no se cómo, pero lo rompiste");
            }
        }
    }

    function suma(number1,number2){
        let result=Number(number1)+Number(number2);
        return result;
    }

    function resta(number1,number2){
        let result=Number(number1)-Number(number2);
        return result;
    }

    function multiply(number1,number2){
        let result=Number(number1)*Number(number2);
        return result;
    }

    function divide(number1,number2){
        let result
        if(Number(number2)!=0){
            result=Number(number1)/Number(number2);
        } 
        else {
            result='Error';
        }
        return result;
    }

    function point(number){
        let result=String(number)+'.';
        return result;
    }

    function opposite(number){
        let result=0-Number(number);
        return result;
    }

    function percentage(number1,number2){
        //solo suma por ahora
        let result=(Number(number1)/Number(number2))*100;

        return result;
    }

    function allClear(){
        valorViejo=0;
        valorNuevo=0;
        displayNow=0;
        lastOperation=null;
    }
    function equals(valor1,valor2){
        let result= displayNow;
        switch(lastOperation) {
            case "%":
                result=percentage(valor1,valor2);
                valorViejo=valorNuevo;
                valorNuevo=result;
                break;
            case "/":
                result=divide(valor1,valor2);
                valorViejo=valorNuevo;
                valorNuevo=result;
                break;
            case "*":
                result=multiply(valor1,valor2);
                valorViejo=valorNuevo;
                valorNuevo=result;
                break;
            case "-":
                result=resta(valor1,valor2);
                valorViejo=valorNuevo;
                valorNuevo=result;
                break;
            case "+":
                result=suma(valor1,valor2);
                valorViejo=valorNuevo;
                valorNuevo=result;
                break;                                
        }
        lastOperation=null;
        return result;
    }

    function getNumber(button){
        let result= String(displayNow)+String(button);
        result=(parseFloat(result));
        return result;
    }

    function display(displayN){
        $("#displayTxt").text(String(displayN));
    }
});


