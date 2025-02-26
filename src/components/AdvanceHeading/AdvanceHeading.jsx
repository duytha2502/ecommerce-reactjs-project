import MainLayout from "../Layout/Layout";
import styles from './styles.module.scss';

function AdvanceHeading() {
    const {container, headLine, containerMiddleBox, des, title} = styles;
    return <MainLayout>
            <div className={container}>
                <div className={headLine}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>Don't miss supper offers</p>
                    <p className={title}>Our best products</p>
                </div>
                <div className={headLine}></div>
            </div>
        </MainLayout>;
}

export default AdvanceHeading;
