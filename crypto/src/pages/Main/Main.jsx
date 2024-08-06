import styles from "./styles.module.css";
import Card from "../../components/Header/Card/Card";

const Main = ({balance, setBalance, coins} ) =>{
    console.log(balance)
    return(
        <main className={styles.main}>
            <Card balance = {balance} setBalance = {setBalance}/>
            
        </main>
    )
}

export default Main;