import React from 'react'
import { WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'

const HomePage = () => {
    const arr = ['tivi', 'tu lanh', 'Laptop']

    return (
        <>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {arr.map((item, index) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div id='container' style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <ButtonComponent textButton={"xem them"} style={{}}>
                        </ButtonComponent>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomePage
