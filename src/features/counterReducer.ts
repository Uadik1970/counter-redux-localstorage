const initialState = {
    minValue: 0,
    maxValue: 1,
    currentValue: 0
}


export const counterReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, currentValue: state.currentValue + 1 }
        case 'DECREMENT':
            return { ...state, currentValue: state.currentValue - 1 }
        case 'SET-MIN-VALUE':
            return { ...state, minValue: action.value, currentValue: action.value }
        case 'SET-MAX-VALUE':
            return { ...state, maxValue: action.value }
        case 'RESET-VALUE':
            return { ...state, currentValue: 0, minValue: 0, maxValue: 1, }
        case 'GET-VALUE-FROM-LOC-STOR':
            return { ...state, currentValue: action.value }
        default:
            return state
    }
}

export const incrementAC = () => ({ type: "INCREMENT" } as const)
export const decrementAC = () => ({ type: "DECREMENT" } as const)
export const resetValuetAC = () => ({ type: "RESET-VALUE" } as const)
export const setMinValueAC = (value: number) => ({ type: "SET-MIN-VALUE", value } as const)
export const setMaxValueAC = (value: number) => ({ type: "SET-MAX-VALUE", value } as const)
export const getValuefromLocStorAC = (value: number) => ({ type: "GET-VALUE-FROM-LOC-STOR", value } as const)


type ActionTypes =
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof decrementAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof resetValuetAC>
    | ReturnType<typeof getValuefromLocStorAC>

export type StateType = {
    minValue: number
    maxValue: number
    currentValue: number
}