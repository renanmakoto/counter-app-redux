import React, {useState, createContext} from 'react'

export const CounterContext = createContext()

export function CounterProvider(props) {

    const [counting, setCounting] = useState(0)

    return (
        <CounterContext.Provider value={[counting, setCounting]}>
            {props.children}
        </CounterContext.Provider>
    )
}