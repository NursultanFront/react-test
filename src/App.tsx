import { useEffect, useState } from "react";
import "./App.css";
import useStore from "./store/user";
import bonusStore from "./store/bonus";
import Bonus from "./components/bonus/Bonus";
import Header from "./components/header/Header";

function App() {
  const { getToken, isAuth, loading } = useStore();
  const { getBonus, bonusName, burn, current, dateBurn } = bonusStore();

  useEffect(() => {
    let latitude: number = 0;
    let longitude: number = 0;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
        },
        (error) => {
          console.log(error.message);
        }
      );
    }

    console.log(latitude);
    console.log(longitude);

    async function authToken() {
      await getToken(latitude, longitude);
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
