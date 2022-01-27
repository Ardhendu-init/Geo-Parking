import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Modal from "./Modal";

const allPlaces = ["all", ...new Set(items.map((item) => item.place))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [places, setPlaces] = useState(allPlaces);

  const filterItems = (place) => {
    if (place === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.place === place);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Geo Parking</h2>
          <div className="underline"></div>
        </div>
        <Categories places={places} filterItems={filterItems} />
        <Menu items={menuItems} />
        <Modal />
      </section>
    </main>
  );
}

export default App;
