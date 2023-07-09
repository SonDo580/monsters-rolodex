import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { Monster } from "./types";
import { getData } from "./utils/data.utils";

import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

const getMonsterUrl = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const monsters = await getData<Monster[]>(getMonsterUrl);
        setMonsters(monsters);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    })();
  }, []);

  const searchMonsters = (event: ChangeEvent<HTMLInputElement>): void =>
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
