import React, { useState } from 'react';

function Message(){
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState(0);

    const handleValue1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value);
      };
    const handleValue2 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue2(e.target.value);
      };
function calculate(operator:String){
    const ans = eval(value1+operator+value2)
    setResult(ans);
}

    return <div className="container">
        <div className="input-values">
        <label htmlFor="first-value">First value</label>
        <input type="number" name="first-value" id="first-value" onChange={handleValue1}/>
        <label htmlFor="second-value">Second value</label>
        <input type="number" name="{second-value}" id="second-value" onChange={handleValue2}/>
        </div>
        <div className="buttons">
        <button id="add" onClick={()=>calculate("+")}>add</button>
        <button id="sub" onClick={()=>calculate("-")}>sub</button>
        <button id="mul" onClick={()=>calculate("*")}>mul</button>
        <button id="divide" onClick={()=>calculate("/")}>divide</button>
        </div>
        <div id="result"><h2>{result}</h2></div>
    </div>


}
export default Message;