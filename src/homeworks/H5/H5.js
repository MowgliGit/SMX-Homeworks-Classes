import React from "react";
import "./H5Style.css";

// 1. Make a component <Lightbulb /> that will be used to turn on/off a lightbulb. The JSX should look like
// this.

// <div>
//     <img src="" alt="" />
//     <button>On</button>
// </div>

// where the text On/Off changes as well as the src attribute between these two urls

// https://www.shutterstock.com/image-vector/incandescent-light-bulb-lightbulb-turned-600nw-522240046.jpg

// https://i.pngimg.me/thumb/f/720/m2K9A0A0K9m2G6Z5.jpg

function Lightbulb() {
  const [isOn, setIsOn] = React.useState(false);

  const toggleLight = function () {
    setIsOn(!isOn);
  };

  const imageUrl = isOn
    ? "https://i.pngimg.me/thumb/f/720/m2K9A0A0K9m2G6Z5.jpg"
    : "https://www.shutterstock.com/image-vector/incandescent-light-bulb-lightbulb-turned-600nw-522240046.jpg";

  return (
    <div>
      <img src={imageUrl} alt="Lightbulb" />
      <button onClick={toggleLight}>{isOn ? "Off" : "On"}</button>
    </div>
  );
}
// 2. Make the same component as above <Lightbulb2/> but this time, we dont have the button, we click on the
// image to change it to the next state

const Lightbulb2 = () => {
  const [isOn, setIsOn] = React.useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  const imageUrl = isOn
    ? "https://i.pngimg.me/thumb/f/720/m2K9A0A0K9m2G6Z5.jpg"
    : "https://www.shutterstock.com/image-vector/incandescent-light-bulb-lightbulb-turned-600nw-522240046.jpg";

  return (
    <div>
      <img src={imageUrl} alt="Lightbulb" onClick={toggleLight} />
    </div>
  );
};

//3. Make a show password text input component. <Password /> which has an input and a button.
//The button should switch  between "Hide/Show password" and the input  type should change between "text" and "password"

const Password = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = function () {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : "password";

  return (
    <div>
      <input type={inputType} placeholder="Enter password" />

      <button onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"} password
      </button>
    </div>
  );
};

// 4. Make a component called <TodoItem /> which takes in one prop `todo` which is an object. You should use
// the prop to make the initial state of the state. If the todo is completed cross the text if not, its like normal.
// To invoke the action you should click on the text field itself.

// const todo = {
//     text: "Do Homework",
//     completed: "false"
// }

// output:

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = React.useState(
    todo.completed === "true"
  );

  const toggleCompletion = function () {
    setIsCompleted(!isCompleted);
  };

  const textStyle = {
    textDecoration: isCompleted ? "line-through" : "none",
  };

  return (
    <div>
      <span onClick={toggleCompletion} style={textStyle}>
        Do Homework
      </span>
    </div>
  );
};

export default function C5() {
  return (
    <div>
      <Lightbulb />
      <Lightbulb2 />
      <Password />
      <TodoItem todo />
    </div>
  );
}
