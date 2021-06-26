import * as React from "react";
import {useEffect, useState} from "react";
export class Effect extends React.PureComponent {
    state = {
        list: [1, 2, 3]
    }
    componentDidMount() {
        console.log('...unit')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(' ... updated')
    }

    handleClick = () => {
        this.setState((state) => ({
            list: [...state.list, state.list.length + 1]
        }))
    }

    render() {
        const {list} = this.state
        return (
            <div>
                <ul>
                    {list.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <button onClick={this.handleClick}>Жми</button>
            </div>
        )
    }
}

export const EffectFunc = () => {
    const [list, setList] = useState([1, 2, 3])
    const handleClick = () => {
        setList([...list, list.length + 1])
    }
    useEffect(() => {
        const list = localStorage.getItem('list') || []
        setList(JSON.parse(list))
    }, [])
    useEffect(() => {
        document.addEventListener('click', handleClick);
        console.log('...useEffect HOOK');
        localStorage.setItem('list', JSON.stringify(list))
        return () => document.removeEventListener('click', handleClick)
    }, [list])



    return (
        <div>
            <ul>
                {list.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <button>Жми</button>
        </div>
    )
}
