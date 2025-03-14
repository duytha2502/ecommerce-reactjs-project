import BoxIcon from '../Header/Boxicon/Boxicon.jsx';
import Menu from './Menu/Menu.jsx';
import styles from './styles.module.scss';
import logo from '../../assets/icons/images/logo.png';
import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '../../contexts/SideBarProvider.jsx';
import useScrollHandling from '../../hooks/useScrollHandling.js';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import className from 'classnames';
import { StoreProvider } from '../../contexts/StoreProvider.jsx';

function MyHeader() {
    const {
        container,
        containerHeader,
        containerBox,
        containerBoxIcon,
        containerMenu,
        fixedHeader,
        topHeader,
        boxCart,
        quantity,
    } = styles;

    const dataBoxIcon = [
        { type: 'fb', href: '#' },
        { type: 'ins', href: '#' },
        { type: 'ytb', href: '#' },
    ];

    const dataMenu = [
        { content: 'Elements', href: '#' },
        { content: 'Our Shop', href: '#' },
        { content: 'About Us', href: '#' },
        { content: 'Contacts', href: '#' },
        { content: 'Search', href: '#' },
        { content: 'Sign in', href: '#' },
    ];

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const {
        setIsOpen,
        setType,
        listProductCart,
        userId,
        handleGetListProductsCart,
    } = useContext(SideBarContext);
    // const { userInfo } = useContext(StoreProvider);
    // console.log(userInfo);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    const handleOpenCartSideBar = () => {
        handleGetListProductsCart(userId, 'cart');
        handleOpenSideBar('cart');
    };

    const totalItemCart = listProductCart.length
        ? listProductCart.reduce((acc, item) => {
              return (acc += item.quantity);
          }, 0)
        : 0;

    useEffect(() => {
        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);

    return (
        <div
            className={className(container, topHeader, {
                [fixedHeader]: fixedPosition,
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => {
                            return (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt='Logo'
                        style={{ width: '100%', height: '60px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => {
                                return (
                                    <Menu
                                        key={index}
                                        content={item.content}
                                        href={item.href}
                                        setIsOpen={setIsOpen}
                                    />
                                );
                            })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <BsHeart
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{ fontSize: '26px' }}
                                onClick={() => handleOpenCartSideBar()}
                            />
                            <div className={quantity}>
                                {/* {totalItemCart || userInfo?.amountCart || 0} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
