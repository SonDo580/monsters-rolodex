import { Monster } from "../../types";
import "./style.css";

type CardProps = {
  monster: Monster;
};

export default function Card({ monster }: CardProps) {
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
