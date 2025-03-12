import styles from '../styles.module.scss';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import { useContext } from 'react';
import { OurShopContext } from '../../../contexts/OurShopProvider';
import SelectBox from './SelectBox';

function Filter() {
    const { containerFilter, boxIcon, boxLeft } = styles;
    const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleGetShowGird = (type) => {
        setIsShowGrid(type === 'grid');
    };

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type='sort'
                />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '24px', cursor: 'pointer', color: '#555' }}
                        onClick={() => handleGetShowGird('grid')}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '2px',
                            backgroundColor: '#e1e1e1',
                        }}
                    />
                    <CiCircleList
                        style={{ fontSize: '26px', color: '#222' }}
                        onClick={() => handleGetShowGird('list')}
                    />
                </div>
            </div>
            <div className={boxLeft}>
                <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
}

export default Filter;
