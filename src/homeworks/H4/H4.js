import React from "react";

//Create - h2, p, div (button, button)
// h2 - click -> heading clickled
//p - mouse over -> paragraph hovered
// div - click => div clicked
// b1 - click -> button1 clicked
// b2  - click -> button2 clicked
function Task(props) {
  return (
    <div>
      <h2
        onClick={function () {
          console.log("heading clicked");
        }}
      >
        Heading clicked
      </h2>
      <p
        onMouseOver={function () {
          console.log("paragraph hovered");
        }}
      >
        Paragraph hovered
      </p>
      <div
        onClicked={function () {
          console.log("div clicked");
        }}
      >
        <button
          onClick={function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("button1 clicked");
          }}
        >
          Button1
        </button>
        <button
          onClick={function () {
            console.log("button2 clicked");
          }}
        >
          Button2
        </button>
      </div>
    </div>
  );
}
// H4: Deadline 19 April (7 Days)
// Upload it with commit "H4 Done"

// 1. Make a Counter component that has two buttons
// One button increments the counter by 2 and a
// second button that increments the counter by 2

function Counter1({}) {
  const [counter, setCounter] = React.useState(10);
  return (
    <div>
      <h1>Counter1</h1>
      {counter}
      <br />
      <button
        onClick={function () {
          setCounter(counter + 2);
          console.log(counter);
        }}
      >
        Incrementby2
      </button>
      <button
        onClick={function () {
          setCounter(counter - 2);
          console.log(counter);
        }}
      >
        Decrementby2
      </button>
    </div>
  );
}
// 2. Make a Counter2 component that has an increment and decrement
// buttons. It also should take a prop `amount` which is a number.
// The counter should be updated by the amount value

// ex: if amount=5 , then `counter + 5` and `counter - 5`

function Counter2({ amount }) {
  const [count, setCount] = React.useState(0);

  const increment = function () {
    setCount(count + amount);
  };

  const decrement = function () {
    setCount(count - amount);
  };

  return (
    <div>
      <h1>Counter2</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment by {amount}</button>
      <button onClick={decrement}>Decrement by {amount}</button>
    </div>
  );
}
//3. Make a Counter3 component that has an increment and decrement functionality
//It should not go above 30 and it should not go below 0.

function Counter3() {
  const [count, setCount] = React.useState(0);

  const increment = function () {
    if (count < 30) {
      setCount(count + 10);
    }
  };

  const decrement = function () {
    if (count > 0) {
      setCount(count - 10);
    }
  };

  return (
    <div>
      <h1>Counter3</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
//4. Make a LuckyCounter, that only increments by 1. Every time the counter
//number is divisible by 3 it should render(show) 'lucky' instead of the number

function LuckyCounter() {
  const [count, setCount] = React.useState(0);

  const handleClick = function () {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>LuckyCounter</h1>
      <p>Count: {count % 3 === 0 ? "lucky" : count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default function H4() {
  return (
    <div>
      <Task />
      <Counter1 />
      <Counter2 amount={5} />
      <Counter3 />
      <LuckyCounter />
    </div>
  );
}
