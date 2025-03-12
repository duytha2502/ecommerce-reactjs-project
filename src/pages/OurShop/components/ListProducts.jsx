import { useContext } from 'react';
import MainLayout from '../../../components/Layout/Layout';
import { OurShopContext } from '../../../contexts/OurShopProvider';
import ProductItem from '../../../components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

function ListProducts() {
    const { products, isShowGrid } = useContext(OurShopContext);
    const { containerProduct } = styles;

    return (
        <>
            <MainLayout>
                <div className={isShowGrid ? containerProduct : ''}>
                    {products.map((item, index) => (
                        <ProductItem
                            key={index}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                            isHomePage={false}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
}

export default ListProducts;
