import { Monster } from "../../types";
import "./style.css";
import Card from "../Card";

type CardListProps = {
  monsters: Monster[];
};

export default function CardList({ monsters }: CardListProps) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
