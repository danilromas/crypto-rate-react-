import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { useEffect, useState } from 'react';

function App() {
  const [balance, setBalance] = useState(60000);

  useEffect(() => {
    console.log('---update', balance);


    return() =>  console.log('---del');
  }, [])
  return (
    <>
      <Header/>
      <Main balance = {balance} setBalance = {setBalance}/>
      </>
  )
}

export default App;
