import "./Card.css";

function Card(props) {
  const className = "card " + props.className;
  // className includes .card and whatever inherited from the parent component

  return <div className={className}>{props.children}</div>;
}

export default Card;
