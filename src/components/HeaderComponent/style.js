import styled from 'styled-components'
import { Row } from 'antd'

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: #1A92FF;
    // display: flex;
    // flex-direction: raw;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    // margin-left: 0 !important;
    // margin-right: 0 !important;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-aligh: left
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    // flex-direction: row;
    align-item: center;
    color: #fff;
    gap: 10px;
    font-size: 12px
`

export const WrapperTextSmall = styled.span`
    color: #fff;
    font-size: 12px;
    white-space: no-wrap
`