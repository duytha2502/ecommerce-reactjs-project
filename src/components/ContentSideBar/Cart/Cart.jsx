import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { PiShoppingCartThin } from 'react-icons/pi';
import Button from '../../Button/Button';
import ItemProduct from '../components/ItemProduct/ItemProduct';

function Cart() {
    const { container, total, boxBtn } = styles;
    return (
        <div>
            <div className={container}>
                <div>
                    <HeaderSideBar
                        icon={
                            <PiShoppingCartThin style={{ fontSize: '30px' }} />
                        }
                        title='WISHLIST'
                    />
                    <ItemProduct />
                </div>
                <div>
                    <div className={total}>
                        <p>SUBTOTAL:</p>
                        <p>$199.99</p>
                    </div>
                    <div className={boxBtn}>
                        <Button content={'VIEW CART'} />
                        <Button content={'CHECK OUT'} isPrimary={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
