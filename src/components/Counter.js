import React from "react"
import { useSelector, useDispatch } from "react-redux"

function Counter(props) {

    const counter = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    return(
        <div>
            <div>
                {counter}
            </div>
            <button onClick={() => {dispatch({type: 'DECREMENT'})}}>-</button>
            <button onClick={() => {dispatch({type: 'INCREMENT'})}}>+</button>
        </div>
    )
}

export default Counter