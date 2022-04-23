// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './CreateShapes.module.css';

// const CreateShapes = () => (
//   <div className={styles.CreateShapes}>
//     CreateShapes Component
//   </div>
// );

// CreateShapes.propTypes = {};

// CreateShapes.defaultProps = {};

// export default CreateShapes;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './CreateShapes.module.css';

const CreateShapes = () => {

    const [currentShape, setCurrentShape] = useState('square')
    
    const [shapes, setShapes] = useState([]);
    // {type: 'circle'}
    const clickHandler = () => {
      if(currentShape === 'circle') {
        shapes.push({type: 'circle'})
        setShapes([...shapes]);
      } else {
        shapes.push({type: 'square'})
        setShapes([...shapes]);
      }
    }

    const handleDropdownChange = (event) => {
      setCurrentShape(event.target.value);
    }

    return (
      <div className={styles.CreateShapes}>
        <main id="shape-creator" >
          <select value={currentShape} onChange={handleDropdownChange}>
            <option value="square">Square</option>
            <option value="circle">Cirle</option>
          </select>

          <button onClick={clickHandler}>Add Shape</button>
        </main>

        <section>
          {
            shapes.map((shape, index) => shape.type === 'circle' 
              ? <aside className='circle' key={index}>{index}</aside>
              : <article className='square' key={index}>{index}</article>)
          }
          
        </section>
      </div>

    );
}

CreateShapes.propTypes = {};

CreateShapes.defaultProps = {};

export default CreateShapes;

