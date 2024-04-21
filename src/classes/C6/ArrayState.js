function Bold() {
  return <b>This text is bold</b>;
}
function Person({ name, surname }) {
  return (
    <div>
      Name: {name}, Surname: {surname}
    </div>
  );
}

export default function ArrayState() {
  let array = [1, 2, 3, 4];
  let boldArray = [<Bold />, <Bold />, <Bold />];
  let convertedArrayToBold = array.map((element) => <Bold />);
  let people = [
    { name: "John", surname: "Dog" },
    { name: "Anne", surname: "Frank" },
  ];
  return (
    <div>
      {array}
      <hr />
      {boldArray}
      <hr />
      {convertedArrayToBold}
      <hr />
      <Bold />
      <hr />
      <Person name={"Joe"} surname={"Doe"} />
      <hr />
      {people.map((person) => (
        <div key={person.name}>
          Name: {person.name}; Surname: {person.surname}
        </div>
      ))}
      <hr />
      {people.map((person) => (
        <Person key={person.name} name={person.name} surname={person.surname} />
      ))}
      <hr />
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
}
