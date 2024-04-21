function Person({ name, age, gender }) {
  const surname = "Jovanova";
  const older = age >= 18;
  const younger = age <= 18;
  let prefixGender = gender ? "Miss" : "Mr";
  let ageOfGender = younger ? " " : prefixGender;
  return (
    <div className="older">
      <div className="younger">
        Hello, I am {ageOfGender} {name} {surname}, and i am {age} years old.
      </div>
    </div>
  );
}

function Button({ variant, size, children }) {
  return (
    <button type="button" className={`btn btn-${variant} btn-${size}`}>
      {children}
    </button>
  );
}

export default function H1() {
  return (
    <div>
      <Person name="Marina" age="10" gender="female" />
      <Button variant="primary" size="sm">
        {" "}
        My button
      </Button>
      <Button variant="secondary" size="ml">
        {" "}
        My button
      </Button>
      <Button variant="danger" size="xl">
        {" "}
        My button
      </Button>
    </div>
  );
}

//className="btn"

// variant={`btn-primary`} size="btn-xl"
