import styles from '../../styles.module.scss';
import CartSummary from './CartSummary';
import CartTable from './CartTable';
import Button from '../../../../components/Button/Button';
import { useContext, useEffect } from 'react';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import {
    addProductToCart,
    deleteCart,
    deleteItem,
    getCart,
} from '../../../../apis/cartService';
import { PiShoppingCartLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

function Content() {
    const {
        containerContent,
        boxFooter,
        boxCoupon,
        boxBtnDelete,
        boxEmptyCart,
        titleEmpty,
        boxBtnEmpty,
    } = styles;
    const {
        listProductCart,
        handleGetListProductsCart,
        isLoading,
        setIsLoading,
        userId,
        setListProductCart,
    } = useContext(SideBarContext);
    const navigate = useNavigate();

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
            });
    };

    const handleDeleteCart = () => {
        setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
            });
    };

    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    useEffect(() => {
        if (userId) {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    }, []);

    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContent}>
                    <div
                        style={{
                            width: '60%',
                        }}
                    >
                        <CartTable
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemCart}
                        />

                        <div className={boxFooter}>
                            <div className={boxCoupon}>
                                <input type='text' placeholder='Coupon code' />
                                <Button content='OK' isPrimary={false} />
                            </div>

                            <div className={boxBtnDelete}>
                                <Button
                                    content={
                                        <div>&#128465; CLEAR SHOPPING CART</div>
                                    }
                                    isPrimary={false}
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>

                    <CartSummary />
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <PiShoppingCartLight style={{ fontSize: '40px' }} />
                    <div className={titleEmpty}>
                        YOUR SHOPPING CART IS EMPTY
                    </div>
                    <div>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Content;
