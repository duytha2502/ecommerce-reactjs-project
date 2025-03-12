import styles from './styles.module.scss';
import reloadIcon from '../../assets/icons/svgs/rotateicon.svg';
import heartIcon from '../../assets/icons/svgs/hearticon.svg';
import cartIcon from '../../assets/icons/svgs/carticon.svg';
import cls from 'classnames';
import Button from '../Button/Button';
import { useContext } from 'react';
import { OurShopContext } from '../../contexts/OurShopProvider';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
}) {
    const {
        boxImg,
        boxIcon,
        showImgWhenHover,
        showFncWhenHover,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largeImg
    } = styles;

    const { isShowGrid } = useContext(OurShopContext);

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div className={cls(boxImg, {[largeImg]: !isShowGrid})}>
                <img src={src} alt='' />
                <img className={showImgWhenHover} src={prevSrc} alt='' />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={isShowGrid ? '' : content}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div className={size} key={index}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomePage,
                    })}
                >
                    {name}
                </div>
                {!isHomePage && (
                    <div className={textCenter} style={{ color: '#888' }}>
                        2
                    </div>
                )}
                <div
                    className={cls(priceCl, {
                        [textCenter]: !isHomePage,
                    })}
                    style={{ color: isHomePage ? '#333' : '#888' }}
                >
                    {price}
                </div>

                {!isHomePage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
                        <Button content='ADD TO CART' />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
