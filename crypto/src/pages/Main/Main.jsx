import styles from "./styles.module.css";
import Card from "../../components/Header/Card/Card";
import CoinsList from "../../components/Header/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

const Main = ({balance, setBalance, coins,Filteredcoins, setCoins} ) =>{
    console.log(balance)
    return(
        <main className={styles.main}>
            <Card balance = {balance} setBalance = {setBalance}/>
            <FilterBlock setCoins = {setCoins} coins = {coins} />
            {coins.length > 0 ? <CoinsList coins={Filteredcoins} /> : <div>Loading...</div>}
        </main>
    )
}

export default Main;