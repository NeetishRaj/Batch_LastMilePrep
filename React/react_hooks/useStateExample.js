
const  { useState } = React;

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  if(true) {

  }



  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>
  );
}

const domContainer = document.querySelector('#like_button_container');
const reactElement = React.createElement(Example);


ReactDOM.render(reactElement, domContainer);