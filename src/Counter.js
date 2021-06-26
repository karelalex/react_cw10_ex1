import React, {useState} from "react";

export class Counter extends React.PureComponent {
    state = {
        counter: this.props.start || 0
    }
    static defaultProps = {step: 1}

    handleButtonClick = () => this.setState((state) => ({
        counter: state.counter + this.props.step
    }));

    render() {
        return (
            <div>
                <p>counter: {this.state.counter}</p>
                <button onClick={this.handleButtonClick}>++</button>
            </div>
        )
    }

}

export const CounterFunc = ({start = 0, step = 1}) => {

    const [counter, setCounter] = useState(start)

    const handleButtonClick = () => setCounter(counter + step)

    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={handleButtonClick}>++</button>
        </div>
    )
}
