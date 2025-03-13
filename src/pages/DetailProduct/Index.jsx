import Header from '../../components/Header/Header';
import MainLayout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import styles from './styles.module.scss';
import Button from '../../components/Button/Button';

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
        orSection
    } = styles;
    return (
        <div>
            <Header />
            <div className={container}>
                <MainLayout>
                    <div className={navigationSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imgBox}>
                            <img
                                src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/473729517_1049677627194191_1851757947575041811_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JrOXc2DfnQIQ7kNvgEHogVC&_nc_oc=AdiywgRJ5SXEh4f9iWkyujgE0z5L4JPN8yuThxnLJ83bCepgSbXQbzgJNlC2cSP9FyY&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqZOni9f_Rwj6S2O8Y-PUL5&oh=00_AYH-vfqFNhq-nqjfmFTjCyX1CzExjg_qu4MEGu5MwYeOpQ&oe=67D91FDC'
                                alt=''
                            />
                            <img
                                src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/473729517_1049677627194191_1851757947575041811_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JrOXc2DfnQIQ7kNvgEHogVC&_nc_oc=AdiywgRJ5SXEh4f9iWkyujgE0z5L4JPN8yuThxnLJ83bCepgSbXQbzgJNlC2cSP9FyY&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqZOni9f_Rwj6S2O8Y-PUL5&oh=00_AYH-vfqFNhq-nqjfmFTjCyX1CzExjg_qu4MEGu5MwYeOpQ&oe=67D91FDC'
                                alt=''
                            />
                            <img
                                src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/473729517_1049677627194191_1851757947575041811_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JrOXc2DfnQIQ7kNvgEHogVC&_nc_oc=AdiywgRJ5SXEh4f9iWkyujgE0z5L4JPN8yuThxnLJ83bCepgSbXQbzgJNlC2cSP9FyY&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqZOni9f_Rwj6S2O8Y-PUL5&oh=00_AYH-vfqFNhq-nqjfmFTjCyX1CzExjg_qu4MEGu5MwYeOpQ&oe=67D91FDC'
                                alt=''
                            />
                            <img
                                src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/473729517_1049677627194191_1851757947575041811_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JrOXc2DfnQIQ7kNvgEHogVC&_nc_oc=AdiywgRJ5SXEh4f9iWkyujgE0z5L4JPN8yuThxnLJ83bCepgSbXQbzgJNlC2cSP9FyY&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqZOni9f_Rwj6S2O8Y-PUL5&oh=00_AYH-vfqFNhq-nqjfmFTjCyX1CzExjg_qu4MEGu5MwYeOpQ&oe=67D91FDC'
                                alt=''
                            />
                        </div>
                        <div className={infoBox}>
                            <h1>1</h1>
                            <p className={price}>2</p>
                            <p className={description}>3</p>
                            <p className={titleSize}>Size</p>
                            <div className={boxSize}>
                                <div className={size}>4</div>
                            </div>

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>
                                <div className={boxBtn}>
                                    <Button content={'ADD TO CART'} />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div></div>
                                <span>Or</span>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;
