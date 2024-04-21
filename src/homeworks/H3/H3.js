import "./H3style.css";
const someSkills = [
  "Communication",
  "Teamwork",
  "Adaptability",
  "Problem-solving",
  "Time management",
];
function SoftSkills({ skills }) {
  return (
    <div>
      <ul>
        <h1>Soft Skills</h1>
        {skills.map((skill) => {
          return (
            <div>
              <li key={skill}>{skill}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
const placeText = ["it just returns a static text as is"];
function PropertyNoProps() {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "600",
        padding: "50px",
      }}
    >
      {placeText.map((someText) => {
        return <div>{someText}</div>;
      })}
    </div>
  );
}
const placeInfo = [
  {
    imgSrc: (
      <img
        className="img"
        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-40252675/original/ae0e3b15-c781-45d0-a0fe-e1f023a615aa.jpeg?im_w=960"
        alt="Property"
      />
    ),
    location: "Dobra Voda, Montenegro ",
    star: "⭐ 5.0",
    distance: "335 kilometers away from Macedonia",
    free: "May 4 - 9",
    price: "$52 night",
    guest: "Guest Favorite",
  },
];

function PropertyWithProps({ placeItems }) {
  return (
    <div className="cardBackground">
      <div className="card">
        {placeInfo.map((prop) => {
          return (
            <div
              style={{
                textAlign: "left",
              }}
              key={prop.free}
            >
              <div className="guestInf">
                <p
                  style={{
                    margin: "15px",
                    padding: "15px 10px",
                    border: "5px solid red",
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#fff",
                      padding: "10px",
                      borderRadius: "25px",
                      fontWeight: "500",
                      fontSize: "24px",
                    }}
                  >
                    {prop.guest}
                  </span>
                </p>
                <p className="heart">🤍</p>
              </div>
              <div className="cardImg">{prop.imgSrc}</div>
              <span className="titleName">{prop.location}</span>
              <span
                style={{
                  border: "5px solid red",
                  padding: "5px",
                  textAlign: "right",
                  marginLeft: "90px",
                  fontSize: "20px",
                }}
              >
                {prop.star}
              </span>
              <p className="lightGrayText">{prop.distance}</p>
              <p className="lightGrayText">{prop.free}</p>
              <p className="boldText">{prop.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const todosList = [
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
  {
    title: "Read a Book",
    description: 'Finish reading "The Great Gatsby"',
    completed: true,
  },
  {
    title: "Write a Blog Post",
    description: "Write about your favorite hobby",
    completed: false,
  },
  {
    title: "Cook Dinner",
    description: "Try out a new recipe",
    completed: false,
  },
  {
    title: "Organize Desk",
    description: "Declutter and tidy up your workspace",
    completed: false,
  },
  {
    title: "Call a Friend",
    description: "Catch up with an old friend",
    completed: true,
  },
];

function ToDoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <ul key="title">
              <li
                className={
                  todo.completed === true ? "completed" : "notCompleted"
                }
              >
                {todo.title}
              </li>
              <li
                className={
                  todo.completed === true ? "completed" : "notCompleted"
                }
              >
                {todo.description}
              </li>
              <li
                className={
                  todo.completed === true ? "completed" : "notCompleted"
                }
              >
                {todo.completed}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function H3() {
  return (
    <div>
      <SoftSkills skills={someSkills} />
      <PropertyNoProps />
      <PropertyWithProps placeItems={placeInfo} />
      <ToDoList todos={todosList} />
    </div>
  );
}
