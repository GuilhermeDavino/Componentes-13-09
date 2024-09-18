import { useState } from "react";
export {ClickButton, InputFields, KeyDownComponent, FocusBlurComponent, HoverComponent};

function ClickButton() {
    function handleClick() {
        alert("Botão clicado");
    }

    return <button onClick={handleClick}>Botão</button>;

}

function InputFields() {
    const [value, setValue] = useState('');

    function HandleChange(event) {
        setValue(event.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={HandleChange} />
            <p>Você digitou: {value}</p>
        </div>
    );
}

function KeyDownComponent() {
    function handleKeyDown(event) {
        console.log("Key pressed: " + event.key);
    }

    return <input type="text" onKeyDown={handleKeyDown}/>;
}

function FocusBlurComponent() {
    function handleFocus() {
        console.log("input focused");
    }

    function handleBlur() {
        console.log("input lost focus");
    }

    return <input onFocus={handleFocus} onBlur={handleBlur}/>
}

function HoverComponent() {
    function handleMouseEnter() {
        console.log('Mouse entrou na div!');
    }

    function handleMouseLeave() {
        console.log("Mouse saiu!");
    }

    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover over this text!
        </div>
    )
}