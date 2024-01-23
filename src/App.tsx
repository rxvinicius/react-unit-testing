import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Vinicius", "Xavier"]);

  function addToList() {
    setList((state) => [...state, newItem]);
  }

  return (
    <>
      <input
        type="text"
        placeholder="New item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
