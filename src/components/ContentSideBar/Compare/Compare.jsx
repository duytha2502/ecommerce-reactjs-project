import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';

function Compare() {
    const { container } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<TfiReload style={{ fontSize: '30px' }} />}
                    title='COMPARE'
                />
                <ItemProduct />
            </div>
            <div>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;
