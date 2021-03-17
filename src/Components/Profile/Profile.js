import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './Profile.module.css';



const Profile = ({ users }) => {
  return (
    <div className={s.profile}>
      <div className={s.description} >
        <img
          src={users.avatar}
          alt="Аватар пользователя"
           className={s.avatar}
            width="150"
        />
        <p className={s.name}>{users.name}</p>
        <p className={s.tag}>@{users.tag}</p>
        <p className={s.location}>{users.location}</p>
      </div>
 <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{users.stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{users.stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{users.stats.likes}</span>
    </li>
  </ul>    </div>
  )
};

Profile.defaultProps = {
  avatar: defaultImage,
};

export default Profile;


Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
