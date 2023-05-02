import { useState, ChangeEvent, useEffect } from 'react'
import s from '../../index.module.css'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { decrementAC, incrementAC, resetValuetAC, setMaxValueAC, setMinValueAC } from '../../features/counterReducer'
import { loadState } from '../../utils/localStorageUtils'

export const Counter = () => {
    const state = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    const [settingsMode, setSettingsMode] = useState(true)

    const onSetClickHandler = () => {
        setSettingsMode(!settingsMode)
    }
    const onResetClickHandler = () => {
        dispatch(resetValuetAC())
    }

    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < state.maxValue)
            dispatch(setMinValueAC(+ e.currentTarget.value))
    }
    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value > state.minValue)
            dispatch(setMaxValueAC(+ e.currentTarget.value))
    }
    const onIncrClickHandler = () => {

        dispatch(incrementAC())
    }
    const onDecrClickHandler = () => {
        dispatch(decrementAC())
    }

    useEffect(() => {
        loadState()
    }, [])
    return (
        <div className={s.counter}>
            {
                settingsMode
                    ? <div className={s.settinsPanel}>
                        <div className={s.inputValue}>
                            <div className={s.inputValueItem}>
                                <div>min value:</div>
                                <div>
                                    <input
                                        min={0}
                                        id='1'
                                        value={state.minValue}
                                        type='number'
                                        onChange={onSetMinValueHandler} >
                                    </input>
                                </div>
                            </div>
                            <div className={s.inputValueItem}>
                                <span>max value:</span>
                                <input
                                    min={1}
                                    id='2'
                                    value={state.maxValue}
                                    type='number'
                                    onChange={onSetMaxValueHandler} >
                                </input>
                            </div>
                        </div>
                        <div>
                            <button
                                className={s.btn}
                                onClick={onSetClickHandler}>
                                set
                            </button>
                        </div>
                    </div>
                    : <div className={s.interfacePanel}>
                        <span className={state.currentValue == state.maxValue ? s.error : ''}>
                            {state.currentValue}
                        </span>
                        <div className={s.settingsBtns}>
                            <button
                                className={s.btn}
                                disabled={state.currentValue <= state.minValue}
                                onClick={onDecrClickHandler}
                            >decr
                            </button>
                            <button
                                className={s.btn}
                                disabled={state.currentValue >= state.maxValue}
                                onClick={onIncrClickHandler}>
                                incr
                            </button>
                            <button className={s.btn} onClick={onResetClickHandler}>reset</button>
                            <button className={s.btn} onClick={onSetClickHandler}>set</button>
                        </div>
                    </div>
            }
        </div>
    )
}
