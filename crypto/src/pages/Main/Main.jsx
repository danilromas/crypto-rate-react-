import styles from "./styles.module.css";
import Card from "../../components/Header/Card/Card";
import CoinsList from "../../components/Header/CoinsList/CoinsList";

const Main = ({balance, setBalance, coins} ) =>{
    console.log(balance)
    return(
        <main className={styles.main}>
            <Card balance = {balance} setBalance = {setBalance}/>
            {coins.length > 0 ? <CoinsList coins={coins} /> : <div>Loading...</div>}
        </main>
    )
}

export default Main;