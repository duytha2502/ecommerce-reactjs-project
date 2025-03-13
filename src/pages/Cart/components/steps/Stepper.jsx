import styles from '../../styles.module.scss';
import cls from 'classnames';

function Stepper({ number, content, isDisabled }) {
    const { stepper, numberStep, textStep, isDisabledNumber, isDisabledText } =
        styles;
    return (
        <div className={stepper}>
            <div className={cls(numberStep, { [isDisabledNumber]: isDisabled })}>
                {number}
            </div>
            <div className={cls(textStep, { [isDisabledText]: isDisabled })}>
                {content}
            </div>
        </div>
    );
}

export default Stepper;
