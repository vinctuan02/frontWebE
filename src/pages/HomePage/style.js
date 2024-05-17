import { Col } from "antd";
import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
    border-bottom: 1px solid red;
    height: 44px;
`

export const WrapperProducts = styled(Col)`
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap
`