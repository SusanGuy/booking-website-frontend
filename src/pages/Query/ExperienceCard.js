import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import './experienceCard.css';

const ExperienceCard = ({ image, category, title, price, rating, reviews }) => {
  return (
    <div className="Experience">
      <div style={{ padding: 8 }}>
        <Link to="/">
          <div
            className="Experience--image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="Experience--description">
            <div className="Experience--description-category">
              {category.toUpperCase()}
            </div>
            <div className="Experience--description-title">{title}</div>
            <div className="Experience--description-price">{`$${price} per person`}</div>
            <div className="Experience--description-reviews">
              <div className="Experience--description-reviews-rate">
                {rating}
              </div>
              <i className="material-icons" style={{ height: 15 }}>
                star
              </i>
              <div className="Experience--description-reviews-number">
                {`(${reviews} reviews)`}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
