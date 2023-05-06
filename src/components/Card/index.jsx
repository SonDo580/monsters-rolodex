import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Card extends Component {
  render() {
    const {
      monster: { id, name, email },
    } = this.props;

    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

Card.propTypes = {
  monster: PropTypes.object.isRequired,
};
