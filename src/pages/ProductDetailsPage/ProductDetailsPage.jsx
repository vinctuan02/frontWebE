import React from 'react'
import ProductDetailsComponet from '../../components/ProductDetailsComponent/ProductDetailsComponet'

const ProductDetailsPage = () => {
    return (
        <div style={{ padding: '0 120px', background: '#efefef', height: '1000px' }}>
            <h5>Trang chủ</h5>
            <div style={{ display: 'flex' }}>
                <ProductDetailsComponet></ProductDetailsComponet>
            </div>
        </div>
    )
}

export default ProductDetailsPage
