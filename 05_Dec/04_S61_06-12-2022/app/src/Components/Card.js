function Card({ img, name, gender }) {
  var cardStyle = {
    width: "250px",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0 0 10px black",
    margin: "50px auto",
  };
  return (
    <div style={cardStyle}>
      <img src={img} width="100%" height="200" />
      <h4>{name}</h4>
      <p>{gender}</p>
    </div>
  );
}

export default Card;
