import "./Cardstyle.css";
type CardProps = {
  image: string;
  text: string;
};

export default function Card({ image, text }: CardProps) {
  return (
    <div className="card border-0 transform transition-hover">
      <img src={image} className="card-img-top" alt="Card image" />
      <div className="card-body bg-black text-center">
        <p className="card-text text-white">{text}</p>
      </div>
    </div>
  );
}
