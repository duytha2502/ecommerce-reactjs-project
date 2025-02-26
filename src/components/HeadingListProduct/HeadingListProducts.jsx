import MainLayout from '../Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '../CountdownBanner/CountdownBanner';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
