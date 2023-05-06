import { useEffect, useMemo, useState } from "react";
import "./App.css";

import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching monsters");
        }

        return response.json();
      })
      .then((users) => setMonsters(users))
      .catch((err) => console.error(err.message));
  }, []);

  const searchMonsters = (event) =>
    setSearchText(event.target.value.toLowerCase());

  const filteredMonsters = useMemo(
    () =>
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchText)
      ),
    [monsters, searchText]
  );

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onSearch={searchMonsters} placeholder="Search monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
