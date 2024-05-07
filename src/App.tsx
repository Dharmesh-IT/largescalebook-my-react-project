import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ItemsListComponent } from "./components/items/ItemsList.components";
import { IItem } from "./models/items/IItem";
//mock data
const items: IItem[] = [
  {
    id: 1,
    name: "Item 1",
    selected: false,
  },
  {
    id: 2,
    name: "Item 2",
    selected: false,
  },
  {
    id: 3,
    name: "Item 3",
    selected: false,
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ItemsListComponent items={items} />
    </div>
  );
}

export default App;
