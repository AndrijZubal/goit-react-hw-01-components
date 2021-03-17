import React from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';
import s from './friend.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map((fr) => (
                <Friends key={fr.id} {...fr} />))};
        </ul>
    );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};