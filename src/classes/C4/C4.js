import React from "react";

function Counter({ upperLimit }) {
  // let counter = 0;
  const [counter, setCounter] = React.useState(10);
  const upperLimit = 20;
  return (
    <div>
      {counter}
      <br />
      <button
        onClick={function () {
          // counter++;
          if (counter < upperLimit) {
            setCounter(counter + 1);
            console.log(counter);
          }
        }}
      >
        increment
      </button>
    </div>
  );
}

function Counter1({ upperLimit }) {
  // let counter = 0;
  const [counter, setCounter] = React.useState(10);
  let [user, setUser] = React.useState("Mario");
  return (
    <div>
      {counter}
      <br />
      <button
        onClick={function () {
          // counter++;
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        decrement
      </button>
      <div> {user}</div>
      <button
        onClick={function () {
          setUser("Simona");
        }}
      >
        Change Presenter
      </button>
    </div>
  );
}

export default function C4(props) {
  return (
    <div>
      <Counter upperLimit={20} />
      <Counter1 upperLimit={10} />
    </div>
  );
}
