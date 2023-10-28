import React from "react";
import Navbar from "./components/Navbar";
import International from "./components/International";
import Local from "./components/Local";
import Bottom from "./components/Bottom";
import "./App.css";
import Data from "./Data";
import Data2 from "./Data2";


function App() {
  const internationalCards = Data.map((item) => {
    return (
      <International 
        key={item.id}
        item={item}
      />
    );
  });
    const localCards = Data2.map((item) => {
      return (
        <Local 
          key={item.id}
          item={item}
        />
      );
  });
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">{localCards}</section>
      <section className="cards-list_2">{internationalCards}</section>
      <Bottom />
    </div>
  );
}

export default App;
