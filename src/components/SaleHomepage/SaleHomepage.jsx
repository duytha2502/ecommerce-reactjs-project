import styles from './styles.module.scss';
import Button from '../Button/Button';
import { useEffect } from 'react';
import useTranslateX from './translateX';

function SaleHomepage() {
    const { container, imgBox, title, des, boxBtn } = styles;

    const translateXPosition = useTranslateX();

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
                    src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/480583147_1198380205627147_4001598480030301827_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GTDtyg6FcB0Q7kNvgEmnDAn&_nc_oc=AdiFBWcOILjRzd8oAyk7h1XhNLbFR2sk4NyakyReEQzqcmXCH0qq9OXuoywJ-s5x-WU&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=A9qbiuX1uqYvF7JUwbGlsda&oh=00_AYBSqyZFM9VjmnVeKHWeWneHjNVvFcKJtCr1RSNYir6vHw&oe=67C50868'
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
                    src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/480583147_1198380205627147_4001598480030301827_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GTDtyg6FcB0Q7kNvgEmnDAn&_nc_oc=AdiFBWcOILjRzd8oAyk7h1XhNLbFR2sk4NyakyReEQzqcmXCH0qq9OXuoywJ-s5x-WU&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=A9qbiuX1uqYvF7JUwbGlsda&oh=00_AYBSqyZFM9VjmnVeKHWeWneHjNVvFcKJtCr1RSNYir6vHw&oe=67C50868'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
