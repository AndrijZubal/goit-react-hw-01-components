import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const StatList = ({ label, percentage }) => {


  return (
      
    <li className={styles.item}>
          <span className={styles.label}>{label }</span>
          <span className={styles.percentage}>{percentage}%</span>
    </li>
     
       
    

  )};
export default StatList;


StatList.propTypes = {

  label: PropTypes.string,
  percentage: PropTypes.number,
};
