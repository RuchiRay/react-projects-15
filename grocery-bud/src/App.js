import React, { useState, useEffect,useRef } from "react";
import { Alert } from "./myComponents/Alert";
import { List } from "./myComponents/List";

const  getLocalStrorage = ()=>{
  let list = localStorage.getItem('list');
  if(list)
  return JSON.parse(localStorage.getItem('list'))
  else
  return []
}

function App() {
  
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStrorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting the form");
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      let oldValue;
      let newValue = name;
      setList(
        list.map((item) => {
          if (item.id === editId) {
            oldValue = item.title;
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "sucess", `${oldValue} changed to ${newValue}`);
    } else {
      let newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "sucess", `${newItem.title} is added to the list`);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const inputRef = useRef();
    const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    let specificItem = list.find((item) => item.id === id);
    setName(specificItem.title);
    inputRef.current.select();
    };

  

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main className={alert.show ? "main-box alert-added" : "main-box"}>
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="input">
          <input
            ref={inputRef}
            type="text"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="input-box"
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
