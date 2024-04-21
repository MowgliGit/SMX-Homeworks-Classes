/*
Controlled

Uncontrolled
*/

import React from "react";

export default function FormState(props) {
  const [name, setName] = React.useState("First Name");
  const [surname, setSurname] = React.useState("Last Name");
  const [phone, setPhone] = React.useState("Phone");
  // const [sname, setaName] = React.useState("");
  // const [aname, setfName] = React.useState("");
  // const [addname, segtName] = React.useState("");
  // const [cname, setNhame] = React.useState("");

  return (
    <div>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          console.log("Name", name);
        }}
      >
        <input
          value={name}
          onChange={function (event) {
            setName(event.target.name);
          }}
        />

        <button>Submit</button>
      </form>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          console.log("Name", name);
        }}
      >
        <input
          value={surname}
          onChange={function (event) {
            setSurname(event.target.surname);
          }}
        />

        <button>Submit</button>
      </form>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          console.log("Name", name);
        }}
      >
        <input
          value={phone}
          onChange={function (event) {
            setPhone(event.target.phone);
          }}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
