import Header from '../../components/Header/Header';
import MainLayout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import styles from './styles.module.scss';
import Button from '../../components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods';
import AccordionMenu from '../../components/AccordionMenu/Index';
import { useContext, useEffect, useState } from 'react';
import Information from './components/Information';
import Review from './components/Review';
import SliderCommon from '../../components/SliderCommon/SliderCommon';
import cls from 'classnames';
import {
    getDetailProduct,
    getRelatedProduct,
} from '../../apis/productsService';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingTextCommon from '../../components/LoadingTextCommon/LoadingTextCommon';
import Cookies from 'js-cookie';
import { handleAddProductToCartCommon } from '../../utils/helper';
import { ToastContext } from '../../contexts/ToastProvider';
import { SideBarContext } from '../../contexts/SideBarProvider';
import { addProductToCart } from '../../apis/cartService';

function DetailProduct() {
    const {
        container,
        navigationSection,
        contentSection,
        imgBox,
        infoBox,
        price,
        description,
        boxSize,
        size,
        titleSize,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        addFunction,
        info,
        active,
        clear,
        disabledBtn,
        loading,
        emptyData,
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [relatedData, setRelatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen, setType, handleGetListProductsCart } =
        useContext(SideBarContext);
    const userId = Cookies.get('userId');
    const navigate = useNavigate();
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);
    const [isLoadingBtnBuyNow, setIsLoadingBtnBuyNow] = useState(false);

    // Get id
    const param = useParams();

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'ADDITIONAL INFORMATION',
            content: <Information />,
        },
        {
            id: 2,
            titleMenu: 'REVIEW ',
            content: <Review />,
        },
    ];

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

    const INCREMENT = 'increment';
    const DECREMENT = 'decrement';

    const handleSelectedSize = (size) => {
        setSizeSelected(size);
    };

    const handleClearSizeSelected = () => {
        setSizeSelected('');
    };

    const handleSetQuantity = (type) => {
        if (quantity < 1) return;
        setQuantity((prev) =>
            type === INCREMENT ? (prev += 1) : quantity == 1 ? 1 : (prev -= 1)
        );
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(id);
            setData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error('Lỗi khi tải dữ liêu');
            setData();
            setIsLoading(false);
        }
    };

    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProduct(id);
            setRelatedData(data);
            setIsLoading(false);
        } catch (error) {
            setRelatedData([]);
            setIsLoading(false);
        }
    };

    const handleAdd = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductsCart
        );
    };

    const handleBuyNow = () => {
        const data = {
            userId,
            productId: param.id,
            quantity,
            size: sizeSelected,
        };

        setIsLoadingBtnBuyNow(true);
        addProductToCart(data)
            .then((res) => {
                setIsLoadingBtnBuyNow(false);
                // handleGetListProductsCart(userId, 'cart');
                toast.success('Product added to cart successfully!');
                navigate('/cart');
            })
            .catch((err) => {
                setIsLoadingBtnBuyNow(false);
                toast.error('Failed to add product to cart!');
            });
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);

    return (
        <div>
            <Header />
            <div className={container}>
                <MainLayout>
                    <div className={navigationSection}>
                        <div>Home {'>'} Men</div>
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/shop')}
                        >
                            {'<'} Return to previous page
                        </div>
                    </div>

                    {isLoading ? (
                        <div className={loading}>
                            <LoadingTextCommon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emptyData}>
                                    <p>No Result</p>
                                    <div>
                                        <Button
                                            content={'Back to our shop'}
                                            onClick={() => navigate('shop')}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={imgBox}>
                                        {data?.images.map((item, index) => {
                                            return (
                                                <img
                                                    key={index}
                                                    src={item}
                                                    alt='Product'
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className={infoBox}>
                                        <h1>{data?.name}</h1>
                                        <p className={price}>{data?.price}</p>
                                        <p className={description}>
                                            {data?.description}
                                        </p>
                                        <p className={titleSize}>
                                            Size {sizeSelected}
                                        </p>
                                        <div className={boxSize}>
                                            {data?.size.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={cls(size, {
                                                            [active]:
                                                                sizeSelected ===
                                                                item.name,
                                                        })}
                                                        onClick={() =>
                                                            handleSelectedSize(
                                                                item.name
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {sizeSelected && (
                                            <p
                                                className={clear}
                                                onClick={
                                                    handleClearSizeSelected
                                                }
                                            >
                                                Clear
                                            </p>
                                        )}

                                        <div className={functionInfo}>
                                            <div className={incrementAmount}>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            DECREMENT
                                                        )
                                                    }
                                                >
                                                    -
                                                </div>
                                                <div>{quantity}</div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            INCREMENT
                                                        )
                                                    }
                                                >
                                                    +
                                                </div>
                                            </div>
                                            <div className={boxBtn}>
                                                <Button
                                                    content={
                                                        isLoadingBtn ? (
                                                            <LoadingTextCommon />
                                                        ) : (
                                                            'ADD TO CART'
                                                        )
                                                    }
                                                    customClassname={
                                                        !sizeSelected &&
                                                        disabledBtn
                                                    }
                                                    onClick={handleAdd}
                                                />
                                            </div>
                                        </div>

                                        <div className={orSection}>
                                            <div></div>
                                            <span>Or</span>
                                            <div></div>
                                        </div>

                                        <div>
                                            <Button
                                                content={
                                                    isLoadingBtnBuyNow ? (
                                                        <LoadingTextCommon />
                                                    ) : (
                                                        'BUY NOW'
                                                    )
                                                }
                                                customClassname={
                                                    !sizeSelected && disabledBtn
                                                }
                                                onClick={handleBuyNow}
                                            />
                                        </div>

                                        <div className={addFunction}>
                                            <div>
                                                <CiHeart />
                                            </div>
                                            <div>
                                                <TfiReload />
                                            </div>
                                        </div>

                                        <div>
                                            <PaymentMethods />
                                        </div>

                                        <div className={info}>
                                            <div>
                                                Brand: <span>1</span>
                                            </div>
                                            <div>
                                                SKU: <span>1</span>
                                            </div>
                                            <div>
                                                Category: <span>1</span>
                                            </div>
                                        </div>

                                        {dataAccordionMenu.map(
                                            (item, index) => (
                                                <AccordionMenu
                                                    key={index}
                                                    titleMenu={item.titleMenu}
                                                    contentJsx={item.content}
                                                    onClick={() =>
                                                        handleSetMenuSelected(
                                                            item.id
                                                        )
                                                    }
                                                    isSelected={
                                                        menuSelected === item.id
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    <div>
                        <h2>RELATED PRODUCTS</h2>

                        {relatedData.length ? (
                            <div>
                                <SliderCommon
                                    data={relatedData}
                                    isProductItem
                                    showItem={4}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </MainLayout>
            </div>

            <Footer />
        </div>
    );
}

export default DetailProduct;
