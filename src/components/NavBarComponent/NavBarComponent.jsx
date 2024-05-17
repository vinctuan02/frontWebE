import React from "react"
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style"
import { Checkbox, Rate } from "antd"

const NavBarComponent = () => {

    const onChange = () => {

    }
    const renderContent = (type, options) => {
        console.log(options)
        switch (type) {
            case 'text':
                return options.map((option, index) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })
                break;

            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option, index) => {
                            return (
                                <Checkbox value={option.value}>{option.lable}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
                break;

            case 'star':
                return (
                    options.map((option, index) => {
                        return (
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                                <span>Từ {option} sao</span>
                            </div >
                        )
                    })
                )
                break;

            case 'price':
                return (
                    options.map((option, index) => {
                        return (
                            <div >
                                {option}
                            </div >
                        )
                    })
                )
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['tivi', 'tu lanh', 'may giat'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    // { value: 'a', lable: "A" },
                    // { value: 'b', lable: "B" }
                ])
                }
            </WrapperContent>
            <WrapperContent>
                {/* {renderContent('star', [1, 3, 5])} */}
            </WrapperContent>
            <WrapperTextPrice>
                {/* {renderContent('price', ["duoi 40", "tren 50"])} */}
            </WrapperTextPrice>
        </div>
    )
}

export default NavBarComponent
