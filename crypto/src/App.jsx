import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { useEffect, useState } from 'react';
import { getCoins } from "./api/api";

function App() {
  const [balance, setBalance] = useState(60000);
  const [coins, setCoins] = useState([]);
  const [Filteredcoins, setFilteredcoins] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const data = await getCoins();
      setCoins(data.coins)
      setFilteredcoins(data.coins);
    }
    fetchData();
  }, [])
  console.log(coins);
  return (
    <>
      <Header/>
      <Main
      setCoins = {setFilteredcoins}
      coins = {coins} 
      balance = {balance} 
      setBalance = {setBalance}
      Filteredcoins = {Filteredcoins}
      />
      </>
  )
}

export default App;
