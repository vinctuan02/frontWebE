import { Col, Pagination, Row } from 'antd'
import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperNavBar, WrapperProducts } from './style'

const TypeProductPage = () => {
    let onChange = () => {

    }
    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <Row style={{ padding: '0 120px', backgroundColor: '#efefef', flexWrap: 'nowrap', paddingTop: '10px' }}>
                    <WrapperNavBar span={4} >
                        <NavBarComponent />
                    </WrapperNavBar>
                    <Col>
                        <WrapperProducts>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProducts>
                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '20px' }} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TypeProductPage

// < Row style = {{ padding: '0 120px', background: '#efefef', flexWrap: 'nowrap', paddingTop: '10px' }}>
//         <Col>
//             <NavBarComponent />
//             <h1>hi</h1>
//         </Col>
//         <Col span={20}>
//             <CardComponent />
//             <CardComponent />
//             <CardComponent />
//             <CardComponent />
//             <CardComponent />
//         </Col>
//     </Row >