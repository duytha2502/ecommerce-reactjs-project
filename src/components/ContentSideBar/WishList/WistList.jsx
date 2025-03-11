import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';

function WishList() {
    const { container, boxContent, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<CiHeart style={{ fontSize: '30px' }} />}
                    title='WISHLIST'
                />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
    );
}

export default WishList;
