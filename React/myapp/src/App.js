import { useState, useEffect } from 'react';
import './App.css';

function App() {
 
  let [clickCount, setClickCount] = useState(0)

  let [userData, setUserData] = useState({
    name: 'harish',
    age: 22,
    dept: 'engineering'
  })

  const doSomeChange = () => {
    setClickCount(clickCount + 1);

    setUserData(
      {
        name: 'Harish',
        age: 22,
        dept: 'engineering'
      }
    )
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${clickCount} times`;
    console.log(userData)
  });

  return (
    <div className="App">
      <header className="App-header">
       <div>{clickCount}</div>
       <div>{`${userData.name}, is ${userData.age} years old and from ${userData.dept} Department`}</div>
       <button onClick={() => doSomeChange()}>Click</button>
       <hr/>
      </header>
    </div>
  );
}

export default App;
