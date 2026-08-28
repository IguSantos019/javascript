
(()=>{
    const calculator = document.querySelector(".calculadora");
    const keys = calculator.querySelector('.class_buttons');
    const display = document.querySelector('.calculator_display');
    keys.addEventListener('click', event =>{
        
        
        
        if(event.target.matches('button')){
            const value = event.target;
            const action = value.dataset.action;
            const showNumber = value.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            if(!action){
                if(displayedNum === '0'){
                    display.textContent = showNumber;
                }else{
                    display.textContent = displayedNum + showNumber;
                }
            }
            if(action === 'decimal'){
                display.textContent = displayedNum + '.';
            }if(
                action === 'add' ||
                action === 'sub' ||
                action === 'mult' ||
                action === 'div' 
            ){
                value.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator';
                console.log(calculator.dataset);
            }


            
            Array.from(value.parentNode.children).forEach(v => v.classList.remove('is-depressed'))


        }






















        // if(displayedNum === "0"){
        //     calculatorDisplay.textContent = showNumber;
        //     document.querySelector('[data-action="clear"]').textContent = 'C';
        // }else{
        //     calculatorDisplay.textContent = displayedNum + showNumber;
        // }if(valueOperator === 'decimal'){
        //     calculatorDisplay.textContent = displayedNum + '.';
        // }
        // if(
        //     valueOperator === 'add' ||
        //     valueOperator === 'sub' ||
        //     valueOperator === 'mult' ||
        //     valueOperator === 'div'
        // ){
        //     value.classList.add('is-depressed')
        // }







        // switch(valueOperator){
        //     case 'add': calculatorDisplay.textContent = displayedNum + '+';
        //     break;
        //     case 'sub': calculatorDisplay.textContent = displayedNum + '-';
        //     break;
        //     case 'mult': calculatorDisplay.textContent = displayedNum + '*';
        //     break;
        //     case 'div': calculatorDisplay.textContent = displayedNum + '/';
        //     break;
        //     case 'decimal': calculatorDisplay.textContent = displayedNum + '.';
        //     break;
        //     case 'clear': calculatorDisplay.textContent = 0;
        // }
        
        
        
        // if(valueOperator === 'add' ||){
        //     calculatorDisplay.textContent = displayedNum + '+';
            
        // }

    })

})()