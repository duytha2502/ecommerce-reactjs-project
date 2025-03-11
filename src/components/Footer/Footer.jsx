import styles from './styles.module.scss';
import logo from '../../assets/icons/images/logo.png';

function MyFooter() {
    const dataMenu = [
        { content: 'Home', href: '#' },
        { content: 'Element', href: '#' },
        { content: 'Shop', href: '#' },
        { content: 'Blog', href: '#' },
        { content: 'About us', href: '#' },
        { content: 'Contact us', href: '#' },
        { content: 'Compare', href: '#' },
    ];

    const { container , boxNav} = styles;
    return (
        <div className={container}>
            <div>
                <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png' alt='' width={160} height={56} />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item) => {
                    return <div>{item.content}</div>;
                })}
            </div>
            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe checkout</p>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                Copyright © 2024 TBD theme. Created by TBD
            </div>
        </div>
    );
}

export default MyFooter;
