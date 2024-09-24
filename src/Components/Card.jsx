export default function Card({ image, country, hotel, star, price }) {
  return (
    <div className="card">
      <img src={image} alt="" width={"200px"} />
      <h2>{country}</h2>
      <h3>{hotel}</h3>
      <p style={star < 4.0 ? { color: "red" } : { color: "green" }}>{star} ★</p>
      <p>{price}</p>
    </div>
  );
}
