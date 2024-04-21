import React from "react";
const Groceries = () => {
  const [groceries, setGroceries] = React.useState([]);
  const [newItem, setNewItem] = React.useState("");
  const [deleteAttempts, setDeleteAttempts] = React.useState(0);

  const handleChange = function (e) {
    setNewItem(e.target.value);
  };

  const handleAddItem = function () {
    const newItemCase = newItem;
    if (groceries.includes(newItemCase)) {
      alert("This item already exists in the list!");
      return;
    }

    if (newItem.trim() !== "") {
      setGroceries([...groceries, newItemCase]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedGroceries = [...groceries];
    updatedGroceries.splice(index, 1);
    setGroceries(updatedGroceries);
    setDeleteAttempts(deleteAttempts + 1);
  };

  return (
    <div>
      <h2>Groceries List</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {groceries.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {deleteAttempts >= 10 && (
        <p>You've reached the maximum delete attempts.</p>
      )}
    </div>
  );
};
export default function handleItemClick() {
  return (
    <div>
      <Groceries />
    </div>
  );
}
