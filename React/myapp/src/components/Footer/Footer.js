import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';

const Footer = () => {

  const users = useSelector(state => state.users);

  return (
    <footer className={styles.Footer}>
      <h2>Current team size: {users.length}</h2>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
