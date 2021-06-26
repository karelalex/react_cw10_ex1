import React, {useRef} from "react";

export class Reff extends React.PureComponent {
    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleClick = () => {
        console.log(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export const ReffFunc = () => {
    const inputRef = useRef()

    const handleClick = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
