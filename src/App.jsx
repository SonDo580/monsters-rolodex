import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };
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

  render() {
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search monsters"
          onChange={(event) =>
            this.setState({ searchText: event.target.value })
          }
        />

        {this.state.monsters
          .filter((monster) =>
            monster.name
              .toLowerCase()
              .includes(this.state.searchText.toLowerCase())
          )
          .map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

export default App;
