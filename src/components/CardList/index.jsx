import PropTypes from "prop-types";
import "./style.css";
import Card from "../Card";

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  monsters: PropTypes.array.isRequired,
};
