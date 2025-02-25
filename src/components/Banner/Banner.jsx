import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Duy Thai Store</h1>
                <div className={des}>25/02/2002</div>
                <Button content={'Go to shop'} />
            </div>
        </div>
    );
}

export default Banner;
