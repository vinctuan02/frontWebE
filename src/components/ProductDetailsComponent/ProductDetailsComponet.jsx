import React from 'react'
import { Col, Image, Row, Rate, InputNumber } from 'antd'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextPrice, WrapperStyleTextSell } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const ProductDetailsComponet = () => {
    let onChange = () => {

    }

    return (
        <div>
            <Row style={{ background: '#fff', padding: '16px', }}>
                <Col span={10} style={{ border: 'solid 1px black' }}>
                    <Image src={imageProduct} alt='image product' preview={false} />
                    <div>
                        <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                            <WrapperStyleColImage span={4}>
                                <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
                            </WrapperStyleColImage>
                            <WrapperStyleColImage span={4}>
                                <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
                            </WrapperStyleColImage>
                            <WrapperStyleColImage span={4}>
                                <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
                            </WrapperStyleColImage>
                            <WrapperStyleColImage span={4}>
                                <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
                            </WrapperStyleColImage>
                            <WrapperStyleColImage span={4}>
                                <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
                            </WrapperStyleColImage>
                            <WrapperStyleColImage span={4}>
                                <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
                            </WrapperStyleColImage>
                        </Row>
                    </div>
                </Col>
                <Col span={14} style={{ border: 'solid 1px black', padding: '20px' }} >
                    <WrapperStyleNameProduct>Sach - Conan</WrapperStyleNameProduct>
                    <div style={{}}>
                        <Rate style={{ fontSize: '12px' }} defaultValue={3} />
                        <WrapperStyleTextSell>| 5 đã bán</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct style={{ marginBottom: '10px' }}>
                        <WrapperPriceTextProduct>
                            Giá : 30.000 Đ
                        </WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến: </span>
                        <span className='address'>Hồng Thuận, Giao Thủy, Nam Định</span>
                        <span className='change-address'> Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <div style={{ margin: '10px 0px 20px' }}>
                        <div style={{ marginBottom: '6px' }}>Số lượng</div>
                        <WrapperQualityProduct>
                            <button>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }}></PlusOutlined>
                            </button>
                            <WrapperInputNumber min={1} max={10} defaultValue={3} onChange={onChange} size='small' ></WrapperInputNumber>
                            <button>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }}></MinusOutlined>
                            </button>
                        </WrapperQualityProduct>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <ButtonComponent size={40}
                            textButton={"Chọn mua"}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                        <ButtonComponent size={40}
                            textButton={"Mua trả sau"}
                            styleButton={{
                                background: '#fff',
                                height: '48px',
                                width: '220px',
                                border: 'solid 1px rgb(13,92,128)',
                                borderRadius: '4px'
                            }}
                            styleTextButton={{ color: 'rgb(13,92,182)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default ProductDetailsComponet
