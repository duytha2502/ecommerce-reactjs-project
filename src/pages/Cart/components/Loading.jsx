import LoadingTextCommon from '../../../components/LoadingTextCommon/LoadingTextCommon';
import styles from '../styles.module.scss';

function Loading() {
    const {loadingCart} = styles;
    return (
        <div className={loadingCart}>
            <LoadingTextCommon />
        </div>
    );
}

export default Loading;
