import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import { Link } from "react-router-dom";
const About = () => (
  <div className={styles.About}>
    <h1>About</h1>
    <hr/>
    <p>This is the about section of the React SPA and it's triggered by using /about route.</p>

    <div>
      <div>Let's meet the team behind this app: <Link to="/team">Our Team</Link></div>
    </div>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
