import styles from './styles.module.scss';
import reloadIcon from '../../assets/icons/svgs/rotateicon.svg';
import heartIcon from '../../assets/icons/svgs/hearticon.svg';
import cartIcon from '../../assets/icons/svgs/carticon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        boxIcon,
        showImgWhenHover,
        showFncWhenHover,
        title,
        priceCl,
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    className={showImgWhenHover}
                    src={prevSrc}
                    alt=''
                />
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
            <div className={title}>{name}</div>
            <div className={priceCl}>{price}</div>
        </div>
    );
}

export default ProductItem;
