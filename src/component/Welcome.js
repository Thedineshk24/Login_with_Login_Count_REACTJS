import React,{useState} from 'react'

export const Welcome = ({count}) => {

    return (
        <div>
            <h1 className="text-success" curCount={count}>{`Total visits/Login is ${count}`}</h1>
        </div>
    )
}
