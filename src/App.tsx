import { useEffect, useState } from "react";
import "./App.css";
import useStore from "./store/user";
import bonusStore from "./store/bonus";
import Bonus from "./components/Bonus";

function App() {
  const { getToken, isAuth, loading } = useStore();
  const { getBonus, bonusName, burn, current, dateBurn } = bonusStore();

  useEffect(() => {
    console.log("app");
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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
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
