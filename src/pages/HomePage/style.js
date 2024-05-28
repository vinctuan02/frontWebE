// import { Col } from "antd";
// import styled from "styled-components";

// export const WrapperTypeProduct = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 16px;
//     justify-content: flex-start;
//     border-bottom: 1px solid red;
//     height: 44px;
// `

// export const WrapperProducts = styled(Col)`
//     display: flex;
//     gap: 15px;
//     justify-content: center;
//     flex-wrap: wrap
// `

import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
`