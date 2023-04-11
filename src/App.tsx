import { useEffect, useState } from "react";
import "./App.css";
import useStore from "./store/user";
import bonusStore from "./store/bonus";
import Bonus from "./components/bonus/Bonus";
import Header from "./components/header/Header";

function App() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const { getToken, isAuth, loading } = useStore();
  const { getBonus, bonusName, burn, current, dateBurn } = bonusStore();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }

    async function authToken() {
      await getToken();
      if (isAuth) {
        getBonus();
      }
    }

    authToken();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Bonus
        loading={loading}
        bonusName={bonusName}
        burn={burn}
        current={current}
        dateBurn={dateBurn}
      ></Bonus>
    </div>
  );
}

export default App;
