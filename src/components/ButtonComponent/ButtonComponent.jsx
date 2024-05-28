import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, disabled, ...rests }) => {
    return (
        <Button
            size={size}
            // ordered={bordered}
            style={{
                ...styleButton,
                background: disabled ? '#ccc' : (styleButton && styleButton.background) || 'blue'
            }}
            {...rests}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent
