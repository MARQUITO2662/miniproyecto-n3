import "./Card.css";
import starIcon from '../img/star.png'

export const Card = ({ city, country, superHost, title, rating, maxGuests, type, beds, photo }) => {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };


  return (
    <div className="card-container">
      <figure className='figure-card'>
        <img className='image-class'
          src={photo}
          alt={title} />
      </figure>
      <div className="ratings">
        <div className="rating">
          <img className="star-icon" src={starIcon} alt="Star icon" />
          <span>{rating}</span>
        </div>
        <p className="type">{`${type} · ${beds} beds`}</p>
        {superHost && <div className="superhost">SUPER HOST</div>}
      </div>
      <h2 className="title">{truncateTitle(title, 24)}</h2>
    </div>
  );
};

