import { Component } from "react";
import PropTypes from "prop-types";
import Card from "../Card";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array.isRequired,
};
