import React from 'react';
import PropTypes from 'prop-types';
import noPhoto from './default.jpg';
import s from './friend.module.css';



const Friends = ({ avatar, isOnline, name }) => {
   
    return (
        <li className={s.item}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
} ;
   
export default Friends;
 
Friends.defaultProps = {
    avatar: noPhoto,

}

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}