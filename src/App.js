import './App.css';
import Display from './display';
import { useState } from 'react';


function App() {
  const operators = "+-*/="
  const opWithoutEq = "+-*/";
  const [input, changeInput] = useState('0');
  const [result, changeResult] = useState(0);
  const [output, changeOutput] = useState('');
  const [equals, changeEquals] = useState(false);


  function addinput(val) {

    if(opWithoutEq.includes(val) && output === '' && input.length===0) {
      changeOutput(()=> '0'+ val);
    }
    else if(opWithoutEq.includes(val) && equals) {
      changeOutput(()=> input+val);
      changeInput(()=> '');
      changeEquals(()=>false);
    }

    else if (val === '=') {
      if(equals) {
        changeOutput(()=>'');
        changeEquals(()=> false);
        
      }
      else{
        const answer = output+input;
        let correct = true;
        try {
          eval(answer);
        } catch(e) {
          console.log(e);
          correct = false;
        }

        if(correct) {
        changeOutput(()=>answer+val+ eval(answer).toString());
        changeInput(eval(answer));
        changeEquals(()=> true);
        }
        
      }
    }
    
    else if(input === '0' || equals) {
      changeInput(()=> val)
      if(equals === true) {
        changeOutput(()=> '');
        changeEquals(()=>false);
      }
    }
    else if(val === '.' && input.includes('.')) {changeInput(()=> input)}


    else if (operators.includes(val)) {
      
    
      let answer;
      if(input === "" && val !== '-') {
        console.log("jag finns")
        let temp = output.split("");
        console.log(temp)
        for(let i = temp.length-1; i>=0; i--) {
          console.log(i)
          if(!operators.includes(temp[i])) break;
          temp.splice(i, 1);
        }
        answer = temp.join("")+val; 
      }
      else answer = output+input+val;
      changeOutput(()=>answer);
      changeInput(() => "");
    }
    else {
      changeInput(() => input + val);
    }

    
  }

  return (
    <div className='App'>
      <div id="calculator">
        <Display input = {input} output= {output}/>
        
        <div id="clear" onClick={() => {
          changeInput(() => '0'); changeOutput(()=>'')}}>AC</div>
        <div id="numbers">
          <div id="seven" onClick={() => addinput('7')}>7</div>
          <div id="eight" onClick={() => addinput('8')}>8</div>
          <div id="nine" onClick={() => addinput('9')}>9</div>
          <div id="divide" onClick={() => addinput('/')}>/</div>
          <div id="four" onClick={() => addinput('4')}>4</div>
          <div id="five" onClick={() => addinput('5')}>5</div>
          <div id="six" onClick={() => addinput('6')}>6</div>
          <div id="multiply" onClick={() => addinput('*')}>x</div>
          <div id="one" onClick={() => addinput('1')}>1</div>
          <div id="two" onClick={() => addinput('2')}>2</div>
          <div id="three" onClick={() => addinput('3')}>3</div>
          <div id="subtract" onClick={() => addinput('-')}>-</div>
          <div id="decimal" onClick={() => addinput('.')}>.</div>
          <div id="zero" onClick={() => addinput('0')}>0</div>
          <div id="equals" onClick={()=> {
            addinput('=') }}
            >=</div>
          <div id="add" onClick={() => addinput('+')}>+</div>
        </div>

      </div>
    </div>
  );
}

export default App;
