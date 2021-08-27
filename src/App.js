import Header from "./components/Header";
import Numbers from "./components/Numbers";
import AddNumber from "./components/AddNumber";
import SearchNumber from "./components/SearchNumber";
import { useState } from "react";

function App() {
  const [showAddNumbers, setShowAddNumbers] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [numbers, setNumbers] = useState([
    {
      id: 1,
      name: "Nathan Mathew",
      pNumber: "(123) 123 1234",
      favorite: true,
    },
    {
      id: 2,
      name: "Aiden Mathew",
      pNumber: "(321) 321 4321",
      favorite: false,
    },
    {
      id: 3,
      name: "Mom",
      pNumber: "(111) 222 3333",
      favorite: true,
    },
  ]);

  // Search Number
  const searchNumber = (name) => {
    numbers.forEach((num) => {
      num.name === name.name ? alert(num.pNumber) : console.log("not found");
    });
  };

  // Add Number
  const addNumber = (number) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newNumber = { id, ...number };
    setNumbers([...numbers, newNumber]);
  };

  // Delete Number
  const deleteNumber = (id) => {
    setNumbers(numbers.filter((number) => number.id !== id));
  };

  // Toggle Favorite
  const toggleFavorite = (id) => {
    setNumbers(
      numbers.map((number) =>
        number.id === id ? { ...number, favorite: !number.favorite } : number
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddNumbers(!showAddNumbers)}
        showAdd={showAddNumbers}
        onSearch={() => setShowSearch(!showSearch)}
        showSearch={showSearch}
      />
      {showSearch && <SearchNumber onSearch={searchNumber} />}
      {showAddNumbers && <AddNumber onAdd={addNumber} />}
      {numbers.length > 0 ? (
        <Numbers
          numbers={numbers}
          onDelete={deleteNumber}
          onToggle={toggleFavorite}
        />
      ) : (
        "Add a number by clicking the Add button!"
      )}
    </div>
  );
}

export default App;
