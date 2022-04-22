import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addUser } from '../../redux/userReducer';
import styles from './Team.module.css';
import useGetRandomSalutation from '../../Hooks/useGetRandomSalutation';

const Team = () => {

  const users = useSelector(state => state.users);
  // const [formData, setFormData] = useState({});
  const formData = {};
  const dispatch = useDispatch()
  const random_salutation = useGetRandomSalutation();

  const usersList = users.map((user) => {
    return (
      <li key={user.name}>
        {`${random_salutation}, ${user.name}`}
      </li>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formData));
    console.log(formData)
  }

  const handleChange = (event) => {
    const target = event.target;
    console.log(target.name);

    switch (target.name) {
      case 'name': 
        formData.name = target.value;
        break;
      case 'age': 
        formData.age = target.value;
        break;
      case 'dept': 
        formData.dept = target.value;
        break;  

      default:
        break;
    }
  }

  return (
    <div className={styles.Team}>
      <h1>Our Team</h1>
      <hr/>

      <ol>
        {usersList}
      </ol>

      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </label><br/>
        <label>
          Age: 
          <input type="number" name="age" value={formData.age} onChange={handleChange}/>
        </label><br/>
        <label>
          Department: 
          <input type="text" name="dept" value={formData.dept} onChange={handleChange}/>
        </label><br/><br/>

        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

Team.propTypes = {};

Team.defaultProps = {};

export default Team;
