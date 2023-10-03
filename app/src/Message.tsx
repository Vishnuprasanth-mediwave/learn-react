import React, { useState } from 'react';

function Message(){
    const [firstInput, setFirstInput] = useState<number>(0);
    const [secondInput, setSecondInput] = useState<number>(0);
    // function setValues{

    // }
    return <div className="container">
        <div className="input-values">
        <label htmlFor="first-value">First value</label>
        <input type="number" name="first-value" id="first-value"/>
        <label htmlFor="second-value">Second value</label>
        <input type="number" name="{second-value}" id="second-value" />
        </div>
        <div className="buttons">
        <button id="add">add</button>
        <button id="sub">sub</button>
        <button id="mul">mul</button>
        <button id="divide">divide</button>
        </div>
    </div>


}
export default Message;