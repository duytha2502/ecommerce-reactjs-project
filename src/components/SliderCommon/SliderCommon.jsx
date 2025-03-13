import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import './styles.css';
import styles from './styles.module.scss';

function SliderCommon({ data }) {
    const { boxSlider } = styles;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <MdArrowForwardIos />,
        prevArrow: <MdOutlineArrowBackIosNew />,
    };

    return (
        <div className={boxSlider}>
            <Slider {...settings}>
                {data.map((src, index) => {
                    return (
                        <img
                            key={index}
                            src={src}
                            alt='test'
                            style={{ width: '10px' }}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}

export default SliderCommon;
