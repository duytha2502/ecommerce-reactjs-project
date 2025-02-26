import { useEffect, useState } from 'react';
import AdvanceHeading from '../AdvanceHeading/AdvanceHeading';
import Banner from '../Banner/Banner';
import MyHeader from '../Header/Header';
import HeadingListProducts from '../HeadingListProduct/HeadingListProducts';
import PopularProduct from '../PopularProduct/PopularProduct';
import Info from '../Info/Info';
import styles from './styles.module.scss';
import { getProducts } from '../../apis/productsService';
import SaleHomepage from '../SaleHomepage/SaleHomepage';

function HomePage() {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10,
        };

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeading />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, 10)} />
            <SaleHomepage />
            <div style={{ height: '200px' }}></div>
        </>
    );
}

export default HomePage;
