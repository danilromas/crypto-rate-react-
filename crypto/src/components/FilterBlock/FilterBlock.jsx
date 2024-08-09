import { useEffect, useState } from 'react';
import './styles.css';

const FilterBlock = ({coins, setCoins}) => {
    const [value, setValue] = useState('');


    useEffect (() => {
        const FilteredCoins = coins.filter(coin => {
            return coin.name.toLowerCase().includes(value.toLowerCase())
        })
        setCoins(FilteredCoins);
    }, [value])
    return(
        <div className='filter-block'>
            <input

            onChange={(event) => setValue(event.target.value) } 
            value={value} 
            className='input' 
            type='text' 
            placeholder='bitcoin' />
        </div>
    );
};

export default FilterBlock;