import React from 'react';
import PropTypes from 'prop-types';
import StatList from './StatList';
// import styles from './Statistics.module.css';
import s from './Statistics.module.css';

const Statistics = ({stats}) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statlist}>
        {stats.map((item) => (

          <StatList key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
  
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};