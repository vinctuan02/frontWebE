import React from 'react'
import { Col, Image, Row } from 'antd'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style'

const ProductDetailsComponet = () => {
    return (
        <div>
            <Row style={{ background: '#fff', padding: '16px' }}>
                <Col span={10}>
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
                <Col span={14}>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetailsComponet
