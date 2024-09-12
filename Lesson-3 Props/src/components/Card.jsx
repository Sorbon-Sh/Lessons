const Card = (props) => {
  console.log(props);

  return (
    <article
      style={{
        border: "1px solid black",
        padding: "1rem",
        borderRadius: "12px",
        maxWidth: "24rem", // * max-width
        background: "#ffb",
      }}
    >
      <p style={{ fontWeight: 700, fontSize: "2rem" }}>{props.title}</p>
      <p>{props.text}</p>
    </article>
  );
};

export default Card;
