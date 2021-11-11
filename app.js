new Vue ({
  el: '#vue-app',

data: {
    calculatorValue: '',
    calculatorElements: ['C','/','*','.','7','8','9','+','4','5','6','-','1','2','3','%','0','='],
    previousCalculatorValue: '',
    operator: null,
},

methods: {
    action(n){
      if(!isNaN(n) || n === "."){
        this.calculatorValue += n + '';
      }

      if(n === 'C'){
        this.calculatorValue = '';
      }

      if(n === '%'){
        this.calculatorValue = this.calculatorValue / 100 + '';
      }
      if(['/', '*', '-', '+',].includes(n)){
        this.operator = n;
         this.previousCalculatorValue = this.calculatorValue;
         this.calculatorValue = '';
      }
      
      if(n === '='){
        this.calculatorValue = eval(
          this.previousCalculatorValue + this.operator + this.calculatorValue
        );

        this.previousCalculatorValue = '';
        this.operator = null;
      }

    }

}});
