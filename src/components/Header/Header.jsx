import BoxIcon from '../Header/Boxicon/Boxicon.jsx';
import Menu from './Menu/Menu.jsx';
import styles from './styles.module.scss';
import logo from '../../assets/icons/images/logo.png';
import reloadIcon from '../../assets/icons/svgs/rotateicon.svg';
import heartIcon from '../../assets/icons/svgs/hearticon.svg';
import cartIcon from '../../assets/icons/svgs/carticon.svg';


function MyHeader() {
  const { container, containerHeader, containerBox, containerBoxIcon, containerMenu } =
    styles;

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

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img src={logo} alt='Logo' style={{ width: '100%', height: '80px' }} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadIcon} alt="reloadIcon" />
            <img width={26} height={26} src={heartIcon} alt="heartIcon" />
            <img width={26} height={26} src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
