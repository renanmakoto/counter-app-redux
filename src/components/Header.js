import React from 'react'
import { useSelector } from 'react-redux'

function Header(props) {

    const counter = useSelector((state) => {
        return state
    })

    return (
    <div className='headerDiv'>
        <h3>Counter</h3>
        <div>{counter}</div>
    </div>
    )
}

export default Header