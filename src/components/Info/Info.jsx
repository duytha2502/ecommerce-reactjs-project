import MainLayout from '../Layout/Layout';
import BoxIcon from '../../assets/icons/svgs/boxicon.svg';
import TruckIcon from '../../assets/icons/svgs/truckicon.svg';
import DebitcardIcon from '../../assets/icons/svgs/debitcardicon.svg';
import ChatIcon from '../../assets/icons/svgs/chaticon.svg';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;
    const dataInfo = [
        { content: 'A', desciption: 'Description 1', src: TruckIcon },
        { content: 'B', desciption: 'Description 2', src: DebitcardIcon },
        { content: 'C', desciption: 'Description 3', src: BoxIcon },
        { content: 'D', desciption: 'Description 4', src: ChatIcon },
    ];

    return (
        <>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item, index) => {
                        return <InfoCard key={index} content={item.content} description={item.desciption} src={item.src}/>;
                    })}
                </div>
            </MainLayout>
        </>
    );
}

export default Info;
