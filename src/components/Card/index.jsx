import PropTypes from "prop-types";
import "./style.css";

export default function Card({ monster }) {
  const { id, name, email } = monster;

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

Card.propTypes = {
  monster: PropTypes.object.isRequired,
};
