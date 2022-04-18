
import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

import { Routes, Route, Link } from "react-router-dom";

import About from '../About/About';
import Team from '../Team/Team';
import Vision from '../Vision/Vision';
import Footer from '../Footer/Footer';

const Home = (props) => {
  const [tabType, setTabType] = useState('about');
  

  return (<div className={styles.Home}>
    <nav>
      <span> 
        <Link to="/home/about" onClick={() => setTabType('about')}>About Us
        </Link>
      </span>
      <span>
        <Link to="/home/team" onClick={() => setTabType('team')}>Our Team
        </Link>
      </span>
      <span>
        <Link to="/home/vision" onClick={() => setTabType('vision')}>Our Vision
        </Link>
      </span>
    </nav>

    <main>
      { tabType === 'about' && <About/>}
      { tabType === 'team' && <Team/>}
      { tabType === 'vision' && <Vision/>}
    </main>

    <Footer/>
  </div>)
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
