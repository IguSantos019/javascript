

(()=>{
    const operators = document.querySelectorAll("[data-operators]");
    
    operators.forEach(operator => {operator.addEventListener('click', function(){
        const valueOperator = operator.dataset.operators;
        
        
        const buttonCalc = document.querySelector('#calc');
        buttonCalc.addEventListener('click', calcular);
        
        total = 0;
        function calcular(){
            number1 = Number(document.getElementById("idNum1").value);
            number2 = Number(document.getElementById("idNum2").value);

            // if(valueOperator === 'add'){
            //     total = number1 + number2;
            // }else if(valueOperator === 'sub'){
            //     total = number1 - number2
            // }else if(valueOperator === 'mult'){
            //     total = number1 * number2
            // }if(valueOperator === 'div'){
            //     total = number1 / number2
            // }

            switch(valueOperator){
                case 'add': total = number1 + number2;
                break;
                case 'sub': total = number1 - number2;
                break;
                case 'mult': total = number1 * number2;
                break;
                case 'div': total = number1 / number2;
                break;
            }

            document.querySelector("#result").innerHTML = `Total: ${total}`;

        };
    })})
})();
