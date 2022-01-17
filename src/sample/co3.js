import React from 'react'
import { Name1,Name2 } from '../App'

const co3 = () => {
    return (
        <div>
            <Name1.Consumer>
                {(name1)=>{
                    return (
                        <Name2.Consumer>
                            {(name2)=>{
                                return <h1> My name is {name1} {name2}</h1>
                            }}
                        </Name2.Consumer>
                    )
                }}
            </Name1.Consumer>
        </div>
    )
}

export default co3
