import styles from '../../styles.module.scss';
import Stepper from './Stepper';

function Step() {
    const { containerStep, steps, line, textNoti } = styles;

    const dataSteps = [
        { number: 1, content: 'Shopping cart' },
        { number: 2, content: 'Checkout' },
        { number: 3, content: 'Order status' },
    ];
    return (
        <div className={containerStep}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <>  
                            <Stepper
                                number={item.number}
                                content={item.content}
                                isDisabled={index !== 0}
                            />
                            {index !== dataSteps.length - 1 && (
                                <div className={line}></div>
                            )}
                        </>
                    );
                })}
            </div>
            <div className={textNoti}>You are out of time! Check out now to avoid losing your order</div>
        </div>
    );
}

export default Step;
