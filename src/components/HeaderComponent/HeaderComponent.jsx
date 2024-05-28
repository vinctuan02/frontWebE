import React from 'react'
import { Badge, Col } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate()
    let handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    return (
        // <div style={{width: '100%', background: 'rgb(26,148,255)', display: 'flex', justifyContent: 'center' }}>
        <div style={{}}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader>
                        ShopE
                    </WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size='large'
                        placeholder='Sản phẩm'
                        textButton='Tìm kiếm'
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                            <span>Đăng nhập/ Đăng kí</span>
                            <div>
                                <span>Tài Khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: '25px', color: '#fff' }} />
                        </Badge>
                        <WrapperTextSmall>Giỏ Hàng</WrapperTextSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
