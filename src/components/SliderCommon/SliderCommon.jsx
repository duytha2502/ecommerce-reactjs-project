import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import './styles.css';
import styles from './styles.module.scss';
import ProductItem from '../ProductItem/ProductItem';

function SliderCommon({ data, isProductItem = false, showItem = 1 }) {
    const { boxSlider } = styles;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <MdArrowForwardIos />,
        prevArrow: <MdOutlineArrowBackIosNew />,
    };

    return (
        <div className={boxSlider}>
            <Slider {...settings}>
                {data.map((item, index) => {
                    const src = !item.image ? item.images[0] : item.image
                    return (
                        <>
                            {isProductItem ? (
                                <ProductItem
                                    src={src}
                                    prevSrc={src}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomePage = {false}
                                    slideItem
                                />
                            ) : (
                                <img
                                    key={index}
                                    src={item}
                                    alt='test'
                                    style={{ width: '10px' }}
                                />
                            )}
                        </>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SliderCommon;
