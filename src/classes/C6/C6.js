import ArrayState from "./ArrayState";
import FormState from "./FormState";
import ObjectState from "./ObjectState";
// import Todos from "./Todos";
import React from "react";
import H6 from "";

function Todo({ title }) {
  return <li>{title}</li>;
}

function Todos() {
  const initialTodos = [
    {
      title: "Learn React",
      description: "Study React basics",
      completed: false,
    },
    {
      title: "Build a Todo App",
      description: "Create a simple Todo application",
      completed: true,
    },
    {
      title: "Exercise",
      description: "Go for a run",
      completed: false,
    },
  ];

  const [todos, setTodos] = React.useState(initialTodos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo title={todo.title} />
        ))}
      </ul>
    </div>
  );
}
export default function C6(props) {
  return (
    <div>
      C6 works
      {/* <Todos /> */}
      {/* <ArrayState /> 
      {/* <Numbers /> */}
      {/* <ObjectState /> 
      <FormState />  */}
    </div>
  );
}

// [1, 2, 3]

// [1, 2, 3, 4]

// [1, 2, 3, 4, 5]

// .filter(item => item !== deleteElement)

// [1, 2, 3, 4]

let items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let paginationNumber = 5;
let currentPage = 1;
let showedItems = [1, 2, 3];
