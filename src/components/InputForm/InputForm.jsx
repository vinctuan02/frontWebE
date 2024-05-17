import React, { useState } from 'react'
import { Input } from 'antd'

const InputForm = ({ props }) => {
    let [valueInput, setValueInput] = useState('')
    // let { placeholder = 'Nhap text' } = props
    return (
        <Input placeholder={'placeholder'} valueInput={valueInput} />
    )
}

export default InputForm
