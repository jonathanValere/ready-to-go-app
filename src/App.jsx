import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <button
              onClick={() => {
                setSwitch1(true);
              }}
              style={{
                backgroundColor: switch1 ? "#5c48d3" : "#fff",
                color: switch1 ? "#fff" : "#5c48d3",
              }}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch1(false);
              }}
              style={{
                backgroundColor: switch1 ? "#fff" : "#5c48d3",
                color: switch1 ? "#5c48d3" : "#fff",
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setSwitch2(true);
              }}
              style={{
                backgroundColor: switch2 ? "#5c48d3" : "#fff",
                color: switch2 ? "#fff" : "#5c48d3",
              }}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch2(false);
              }}
              style={{
                backgroundColor: switch2 ? "#fff" : "#5c48d3",
                color: switch2 ? "#5c48d3" : "#fff",
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setSwitch3(true);
              }}
              style={{
                backgroundColor: switch3 ? "#5c48d3" : "#fff",
                color: switch3 ? "#fff" : "#5c48d3",
              }}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch3(false);
              }}
              style={{
                backgroundColor: switch3 ? "#fff" : "#5c48d3",
                color: switch3 ? "#5c48d3" : "#fff",
              }}
            >
              OFF
            </button>
          </div>
        </section>
        <aside>
          {switch1 && switch2 && switch3 ? (
            <p style={{ backgroundColor: "#46AC4A" }}>Go !</p>
          ) : (
            <p>No way!</p>
          )}
        </aside>
      </main>
    </>
  );
}

export default App;
