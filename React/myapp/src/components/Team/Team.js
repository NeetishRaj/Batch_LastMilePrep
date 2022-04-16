import React from 'react';
import PropTypes from 'prop-types';
import styles from './Team.module.css';

const Team = () => (
  <div className={styles.Team}>
    <h1>Our Team</h1>
    <hr/>
    <p>This is the Our Team section of the React SPA and it's triggered by using /team route.</p> 
  </div>
);

Team.propTypes = {};

Team.defaultProps = {};

export default Team;
