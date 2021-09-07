import Header from "./components/Header";
import Numbers from "./components/Numbers";
import AddNumber from "./components/AddNumber";
import SearchNumber from "./components/SearchNumber";
import { useState, useEffect } from "react";

function App() {
  const [showAddNumbers, setShowAddNumbers] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const getNumbers = async () => {
      const numbersFromServer = await fetchNumbers();
      setNumbers(numbersFromServer);
    };

    getNumbers();
  }, []);

  // Fetch Numbers
  const fetchNumbers = async () => {
    //const res = await fetch("http://localhost:5000/numbers");
    const res = await fetch("http://localhost:8080/demo/all");
    console.log("calling other service");
    const data = await res.json();

    return data;
  };

  // Fetch Number
  const fetchNumber = async (id) => {
    const res = await fetch(`http://localhost:8080/demo/${id}`);
    const data = await res.json();

    return data;
  };

  // Search Number
  const searchNumber = (name) => {
    numbers.forEach((num) => {
      num.name === name.name ? alert(num.pNumber) : console.log("not found");
    });
  };

  // Add Number
  const addNumber = async (number) => {
    // const res = await fetch("http://localhost:5000/numbers", {
    console.log(number);
    const res = await fetch("http://localhost:8080/demo/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(number),
    });

    const data = await res.json();

    setNumbers([...numbers, data]);
  };

  // Delete Number
  const deleteNumber = async (id) => {
    // await fetch(`http://localhost:5000/numbers/${id}`, {
    await fetch(`http://localhost:8080/demo/${id}`, {
      method: "DELETE",
    });

    setNumbers(numbers.filter((number) => number.id !== id));
  };

  // Toggle Favorite
  const toggleFavorite = async (id) => {
    const numToToggle = await fetchNumber(id);
    const updNum = { ...numToToggle, favorite: !numToToggle.favorite };

    const res = await fetch(`http://localhost:5000/numbers/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updNum),
    });

    const data = await res.json();

    setNumbers(
      numbers.map((number) =>
        number.id === id ? { ...number, favorite: data.favorite } : number
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
