import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct() {
    const { container, boxContent, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img
                src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/483666904_1201722437979531_2875451849210590872_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q4j77zKRve0Q7kNvgFiULrH&_nc_oc=AdhN8n3L5yWbyjqu8nXhgX9U6lxVmHnb45Y2IpON8aq9vQAFU_FBspFp_P1SuPMmucQ&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Aj8US0PQUmnitgNvGk3sk02&oh=00_AYH0Q4uR6PoYl0NNGSbis8Z0gWz1hObnprgEtD5Yv2tHOQ&oe=67D5061F'
                alt=''
            />
            <div className={boxClose}>
                <IoCloseOutline style={{ fontSize: '22px', color: 'c1c1c1' }}/>
            </div>
            <div className={boxContent}>
                <div className={title}>Title</div>
                <div className={price}>$119.99</div>
            </div>
        </div>
    );
}

export default ItemProduct;
