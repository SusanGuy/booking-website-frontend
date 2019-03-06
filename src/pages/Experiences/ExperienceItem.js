import React from 'react';

// Styles
import './experienceItem.css';

// Assets
import icons from '../../shared/icons';

const ExperienceItem = ({
  image,
  category,
  title,
  location,
  duration,
  equipment,
  language,
}) => {
  return (
    <div className="ExperienceItem">
      <div className="ExperienceItem--image-container">
        <div
          className="ExperienceItem--image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="ExperienceItem--content">
        <div className="ExperienceItem--content--category">{category}</div>
        <div className="ExperienceItem--content--title">{title}</div>
        <div className="ExperienceItem--content--details">
          <div>
            <i className="material-icons">start</i>
            <div>{location}</div>
          </div>
          <div>
            <i className="material-icons">timer</i>
            <div>{duration}</div>
          </div>
          <div>
            <i className="material-icons">event_note</i>
            <div>{equipment}</div>
          </div>
          <div>
            <i className="material-icons">chat</i>
            <div>{language}</div>
          </div>
        </div>
        <div className="ExperienceItem--content--booknow">
          <i className="material-icons">start</i>
          <div>Book Now. This experience usually sells out.</div>
        </div>
        <div className="ExperienceItem--content--about-host">
          <div className="ExperienceItem--content--about-host-profile">
            <div className="ExperienceItem--content--about-host-profile-pic">
              <img src={icons.user} alt="profile-pic" />
            </div>
            <div className="ExperienceItem--content--about-host-profile-name">
              William
            </div>
            <div className="ExperienceItem--content--about-host-profile-link">
              Contact host
            </div>
          </div>
          <div className="ExperienceItem--content--about-host-description">
            <div className="ExperienceItem--content--about-host-title">
              About your host
            </div>
            <div className="ExperienceItem--content--about-host-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed odio dolor. Curabitur vitae lectus ac dolor tempus pretium. In
              odio ipsum, tristique nec ornare a, fermentum in est. Cras et
              hendrerit diam. Sed et lacus eros. Duis fringilla neque orci, ac
              fermentum sem finibus at. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Cras lacinia
              volutpat volutpat. Maecenas cursus, metus luctus varius dignissim,
              mi nibh viverra dolor, ut eleifend arcu neque eget nibh. Fusce id
              nisl malesuada, luctus diam non, sodales eros. Pellentesque
              ultricies sapien augue, et iaculis massa accumsan sagittis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
