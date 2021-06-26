import React, {useContext} from "react";

const ColorButtonContext = React.createContext('green')

export class ContextEx1 extends React.PureComponent {
    render() {
        return (
            <ColorButtonContext.Provider value='red'>
                <Comp2 />
            </ColorButtonContext.Provider>
        )
    }
}

export class Comp2 extends React.PureComponent {
    render() {
        return (
           <div>
               <Comp3 /> <br />
               <Comp3Func />
               <Comp3Consumer />
           </div>

        )
    }
}

export class Comp3 extends React.PureComponent {
    static contextType = ColorButtonContext
    render() {
        return (
            <button style={{backgroundColor: this.context}}>Жми</button>
        )
    }
}

export class Comp3Consumer extends React.PureComponent {
    render() {
        return (
            <ColorButtonContext.Consumer>
                {(backgroundColor) => <button style={{backgroundColor}}>Жми</button>}
            </ColorButtonContext.Consumer>
        )
    }
}

export const Comp3Func = () => {
    const backgroundColor = useContext(ColorButtonContext)
    return (
        <button style={{backgroundColor}}>Жми</button>
    )
}
