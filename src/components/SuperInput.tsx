
import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react'
import { StateType } from '../features/counterReducer'
// import  {StateType}  from '../store/store'

// type ValueType = {
//     minValue: number
//     maxValue: number
//     currentValue
// }

type SuperInputPT = {
    id: string
    type: string
    // callback?: ChangeEvent<HTMLInputElement>
    callback: Function
    value: StateType
    superButtonHandler?: () => void
}


const SuperInput: FC<SuperInputPT> = ({ type, callback, value, superButtonHandler, id }) => {

    // const handler = (key: string) => {
    //     if (key === 'Enter') superButtonHandler()
    // }


    const handler = (e: any) => {
        id === '1' ? callback({ ...value, minValue: +e.target.value })
            : callback({ ...value, maxValue: e.target.value })
        // superButtonHandler(e)
    }

    return (
        <>
            <input
                id={id}
                value={id === '1' ? value.minValue : value.maxValue}
                // onKeyDown={(e) => handler(e.key)}
                type={type}
                min={0}
                onChange={handler} />
        </>
    )
}

export default SuperInput