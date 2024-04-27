import React from 'react'
import Slider from 'react-slick'
import { Image } from 'antd'

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
        <Slider {...setting}>
            {arrImages.map((image, index) => {
                return (
                    <Image src={image} alt='slider' preview={false} width='100%' height='247px' />
                )
            })}
        </Slider>
    )
}

export default SliderComponent
