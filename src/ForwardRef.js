import React, {useImperativeHandle, useRef, useState} from "react";

export default React.forwardRef((props, ref) => {
    const inputRef = useRef()
    const [counter, setCounter] = useState(0)
    useImperativeHandle(ref, () => ({
        ficus: () => {
            inputRef.current.focus();
            setCounter(counter + 1)
            console.log('...focus', counter)
        }
    }))

    const handleClick = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <input />
            <button onClick={handleClick}>Click</button>
        </div>
    )
})
