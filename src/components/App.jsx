import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setItem(newValue);

    e.preventDefault();
  }

  function addValue() {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="listItem"
          onChange={handleChange}
          value={item}
        />
        <button onClick={addValue}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
