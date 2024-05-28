import React from 'react'
// import { Input } from 'antd'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    let { placeholder = 'Nhap text', ...rests } = props
    let handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
    )
}

export default InputForm
