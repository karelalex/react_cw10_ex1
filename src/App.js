import './App.css';
import React from "react";
import {Counter, CounterFunc} from "./Counter";
import {Effect, EffectFunc} from "./Effect";
import {ContextEx1} from "./Context";
import ReffFuncForward from "./ForwardRef";
import {Reff, ReffFunc} from "./Reff";

function App() {
    const inputRef = React.createRef()
    return (
        <div className="App">
            <Counter start={15} step={2}/>
            <CounterFunc start={15} step={2}/>
            <hr />
            <Reff />
            <ReffFunc />
            <hr />
            <ReffFuncForward ref={inputRef}/>
            <button onClick={() => inputRef.current.ficus()}>Focus</button>
            <hr/>
            <Effect />
            <EffectFunc />
            <hr />
            <ContextEx1 />
        </div>
    );
}

export default App;
