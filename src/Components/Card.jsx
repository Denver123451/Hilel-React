import "../styles.css";

const Card = ({ items }) => {
  const TimeParser = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minut = Math.floor((seconds % 3600) / 60);

    return `${hours}H ${minut}m`;
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div className="card">
            <div className="image__container">
              <img src={item.image} alt="" />
              <div className="level">{item.level}</div>
            </div>
            <h3 className="card__title">{item.title}</h3>
            <div className="card__info">
              <div className="user">
                <img src={item.user.avatar} alt="John Doe" />
                <p>{item.user.name}</p>
              </div>
              <div className="rating">
                <p>{item.rating}</p>
              </div>
            </div>
            <div className="card__info">
              <div>{item.students} Student</div>
              <div>{item.modules} Modules</div>
              <div>{TimeParser(item.duration)}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
