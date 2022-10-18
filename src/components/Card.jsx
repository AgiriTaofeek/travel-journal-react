import React from 'react';

export default function Card(props) {
  console.log(props);
  return (
    <article className="card">
      <img src={props.imageUrl} alt={props.title} className="card__img" />
      <div className="card__text-content">
        <div className="card__location">
          <ion-icon name="map-outline"></ion-icon>
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <time className="card__time">
          {`${props.startDate} ${props.endDate}`}
        </time>
        <p className="card__details">{props.description}</p>
      </div>
    </article>
  );
}
