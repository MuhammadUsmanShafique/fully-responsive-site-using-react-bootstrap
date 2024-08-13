import Card from "./Card";
import { CardsCollectionProps } from "../types";

export default function CardsCollection({
  cards,
  columns,
}: CardsCollectionProps) {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col-${columns.xs} col-sm-${columns.sm} col-md-${columns.md} col-lg-${columns.lg} col-xl-${columns.xl} mb-4`}
          >
            <Card image={card.image} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}
