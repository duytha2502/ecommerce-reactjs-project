import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '../../contexts/SideBarProvider';
import className from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '../ContentSideBar/Login/Login';
import Compare from '../ContentSideBar/Compare/Compare';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return 'wishlist';
            case 'cart':
                return 'cart';
            default:
                return <Login />;
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={container}>
            <div
                className={className({ [overlay]: isOpen })}
                onClick={handleToggle}
            />
            <div className={className(sideBar, { [slideSideBar]: isOpen })}>
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
