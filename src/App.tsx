import { useEffect, useState } from "react";
import "./App.css";
import Bonus from "./components/bonus/Bonus";
import Header from "./components/header/Header";
import { api } from "./api";
import { BonusResult } from "./api/types";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [bonusData, setBonusData] = useState<BonusResult["data"]>({
    currentQuantity: 0,
    dateBurning: "",
    forBurningQuantity: 0,
    typeBonusName: "",
  });

  useEffect(() => {
    async function authToken() {
      setLoading(true);
      try {
        const token = await api.accessToken.getToken();
        const getBonus = await api.bonusToken.getBonus(token.accessToken);
        setBonusData(getBonus.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    authToken();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Bonus loading={loading} bonusData={bonusData}></Bonus>
    </div>
  );
}

export default App;
