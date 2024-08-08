type CardProps = {
  image: string;
  text: string;
};

export default function Card({ image, text }: CardProps) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
