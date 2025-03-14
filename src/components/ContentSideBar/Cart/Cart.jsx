import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { PiShoppingCartThin } from 'react-icons/pi';
import Button from '../../Button/Button';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import { useContext } from 'react';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import LoadingTextCommon from '../../LoadingTextCommon/LoadingTextCommon';
import { Navigate, useNavigate } from 'react-router-dom';
import cls from 'classnames';

function Cart() {
    const {
        container,
        total,
        boxBtn,
        price,
        isEmpty,
        boxEmpty,
        boxBtnEmpty,
        containerListItem,
    } = styles;
    const navigate = useNavigate();
    const { listProductCart, isLoading, setIsOpen } =
        useContext(SideBarContext);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleNavigateToCart = () => {
        navigate('/cart');
        setIsOpen(false);
    };

    return (
        <div>
            <div
                className={cls(container, {
                    [isEmpty]: !listProductCart.length,
                })}
            >
                <HeaderSideBar
                    icon={<PiShoppingCartThin style={{ fontSize: '30px' }} />}
                    title='CART'
                />

                {listProductCart.length ? (
                    <div className={containerListItem}>
                        <div
                            style={{
                                height: 'calc(100vh-500px)',
                                overflowY: 'auto',
                            }}
                        >
                            {isLoading ? (
                                <LoadingTextCommon />
                            ) : (
                                listProductCart.map((item, index) => {
                                    return (
                                        <ItemProduct
                                            key={index}
                                            src={item.images[0]}
                                            nameProduct={item.name}
                                            priceProduct={item.price}
                                            skuProduct={item.sku}
                                            sizeProduct={item.size}
                                            quantity={item.quantity}
                                            productId={item.productId}
                                            userId={item.userId}
                                        />
                                    );
                                })
                            )}
                        </div>
                        <div>
                            <div className={total}>
                                <p>SUBTOTAL:</p>
                                <p className={price}>${subTotal.toFixed(2)}</p>
                            </div>
                            <div className={boxBtn}>
                                <Button
                                    content={'VIEW CART'}
                                    onClick={handleNavigateToCart}
                                />
                                <Button
                                    content={'CHECK OUT'}
                                    isPrimary={false}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={boxEmpty}>
                        <div>No products in the cart.</div>
                        <div className={boxBtnEmpty}>
                            <Button
                                content={'RETURN TO SHOP'}
                                onClick={handleNavigateToShop}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
