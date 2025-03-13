import styles from './styles.module.scss';
import cls from 'classnames';
import Button from '../Button/Button';
import { use, useContext, useEffect, useState } from 'react';
import { OurShopContext } from '../../contexts/OurShopProvider';
import { SideBarContext } from '../../contexts/SideBarProvider';
import { ToastContext } from '../../contexts/ToastProvider';
import Cookies from 'js-cookie';
import { addProductToCart } from '../../apis/cartService';
import LoadingTextCommon from '../LoadingTextCommon/LoadingTextCommon';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

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
        largeImg,
        isActiveSize,
        btnClear,
    } = styles;

    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const [sizeChoose, setSizeChoose] = useState('');
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add product to cart!');

            return;
        }

        if (!sizeChoose) {
            toast.warning('Please choose size!');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose,
        };

        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                setIsLoading(false);
                handleGetListProductsCart(userId, 'cart');
                toast.success('Product added to cart successfully!');
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error('Failed to add product to cart!');
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details);
    };

    const handleNavigateToDetail = () => {
        const path = `/product/${details._id}`;

        navigate(path);
    }

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);

    return (
        <div
            className={isShowGrid ? '' : containerItem}
            style={{ cursor: 'pointer' }}
            onClick={handleNavigateToDetail}
        >
            <div className={cls(boxImg, { [largeImg]: !isShowGrid })}>
                <img src={src} alt='' />
                <img className={showImgWhenHover} src={prevSrc} alt='' />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid style={{ fontSize: '20px' }} />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart style={{ fontSize: '24px' }} />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload style={{ fontSize: '20px' }} />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <LiaEyeSolid style={{ fontSize: '22px' }} />
                    </div>
                </div>
            </div>
            <div className={isShowGrid ? '' : content}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    className={cls(size, {
                                        [isActiveSize]:
                                            sizeChoose === item.name,
                                    })}
                                    key={index}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
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
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
