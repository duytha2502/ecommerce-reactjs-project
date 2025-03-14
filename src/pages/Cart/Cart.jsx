import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Step from './components/steps/Step';
import Content from './components/contents/Content';
import styles from './styles.module.scss';
import MainLayout from '../../components/Layout/Layout';
import { useEffect } from 'react';

function Cart() {
    const { container } = styles;
    
    return (
        <>
            <Header />
            <div className={container}>
                <Step />
                <MainLayout>
                    <Content />
                </MainLayout>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
