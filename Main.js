import React, { useState } from "react";

const Main = () => {
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState({
    text: "",
    id: "",
  });

  const handleChangeFirstName = (e) => {
    setFirstName({
      ...firstName,
      text: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (firstName.text.trim() !== "") {
      const newList = {
        text: firstName.text,
        id: new Date().getTime().toString(),
      };
      setList([...list, newList]);
      setFirstName({ text: "", id: "" });
    }
  };

  return (
    <section>
      <form>
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          value={firstName.text}
          placeholder="Enter Your Name"
          onChange={handleChangeFirstName}
        />
        <button className="button1" onClick={handleAdd}>
          Add
        </button>
      </form>
      {list.map((eachObj) => {
        const { text, id } = eachObj;
        return (
          <div key={id}>
            <h2>{text}</h2>
            <h2>{id}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Main;
