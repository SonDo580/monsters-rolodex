import { Component } from "react";
import PropTypes from "prop-types";

export default class Card extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div>
        <h1>{monster.name}</h1>
      </div>
    );
  }
}

Card.propTypes = {
  monster: PropTypes.object.isRequired,
};
