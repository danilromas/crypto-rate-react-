import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(60000);
  return (
    <>
      <Header/>
      <Main balance = {balance} setBalance = {setBalance}/>
      </>
  )
}

export default App;
