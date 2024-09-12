const Card2 = ({ title = "Default title", text = "Default text" }) => {
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
      <p style={{ fontWeight: 700, fontSize: "2rem" }}>{title}</p>
      <p>{text}</p>
    </article>
  );
};

export default Card2;
