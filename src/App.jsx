import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };

    this.searchMonsters = this.searchMonsters.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching monsters");
        }

        return response.json();
      })
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.error(err.message));
  }

  searchMonsters(event) {
    this.setState({ searchText: event.target.value.toLowerCase() });
  }

  render() {
    const { monsters, searchText } = this.state;
    const { searchMonsters } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText)
    );

    return (
      <div className="App">
        <SearchBox onSearch={searchMonsters} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
