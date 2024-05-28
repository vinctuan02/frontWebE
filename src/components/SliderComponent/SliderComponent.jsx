import React from 'react'
import Slider from 'react-slick'
import { Image } from 'antd'
import { WrapperSliderStyle } from './style'

const SliderComponent = ({ arrImages }) => {
    const setting = {
        dots: true,
        infinite: true,
        sliderToShow: 1,
        sliderToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1000
    }

    return (
        <WrapperSliderStyle {...setting}>
            {arrImages.map((image, index) => {
                return (
                    <Image key={index} src={image} alt='slider' preview={false} width='100%' height='247px' />
                )
            })}
        </WrapperSliderStyle>
    )
}

export default SliderComponent
