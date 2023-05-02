import React, { ChangeEvent, FC } from 'react'

type SuperButtonPT = {
    title: string
    callback: () => void
}

export const SuperButton: FC<SuperButtonPT> = ({ callback, title }) => {
    return (
        <>
            <button onClick={callback}>{title}</button>
        </>
    )
}
