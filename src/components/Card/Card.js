import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, cover } = props;

  return (
    <div className="card" key={id}>
      <Link to={`/logement/${id}`}>
        <div className="title">{title}</div>
      </Link>
      <img src={cover} alt={title} className="card--image" />
    </div>
  );
}

export default Card;
