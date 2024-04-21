function Todo() {
  const todos = [
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
    { title: "Exercise", description: "Go for a run", completed: false },
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
}

export default function Todos() {
  return (
    <div>
      <Todo />
    </div>
  );
}
