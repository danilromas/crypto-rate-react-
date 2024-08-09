import { WithRuBalance } from '../../../helpers/hoc/withTrueBalance';
import './styles.css';

const Card = ({balance, setBalance, ruBalance}) => {
    return(
        <div className='card'>
            <div className='card-block'>
                <p>CRYPTO-FINANCE</p>
                <button onClick={() =>setBalance(prev => prev + 1000)}>Add money</button>
            </div>
            <div className='card-block'>
            <p>Danya</p>
            <p>{balance}$</p>
            <p>{ruBalance}.руб</p>
            </div>
        </div>
    );
};

export default WithRuBalance(Card);