import AdvanceHeading from '../AdvanceHeading/AdvanceHeading';
import Banner from '../Banner/Banner';
import MyHeader from '../Header/Header';
import HeadingListProducts from '../HeadingListProduct/HeadingListProducts';
import Info from '../Info/Info';
import styles from './styles.module.scss';

function HomePage() {
    const { container } = styles;
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts />
            </div>
        </>
    );
}

export default HomePage;
