import styles from './styles.module.scss';
import Button from '../Button/Button';
import useTranslateXImage from '../../hooks/useTranslateXImage';

function SaleHomepage() {
    const { container, imgBox, title, des, boxBtn } = styles;

    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div
                className={imgBox}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease',
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque voluptates officia eius vitae, tempore molestiae
                    animi, iusto odio rem ad quae voluptatum. Consectetur fugit
                    laudantium atque est aspernatur! Molestias, repellat.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={imgBox}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease',
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
