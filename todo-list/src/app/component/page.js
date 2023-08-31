"use client";
import { Are_You_Serious } from "next/font/google";
import styles from "../page.module.css";
import { useState } from "react";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [editedTodo, setEditedTodo] = useState("");
  const [editIndex, setEditIndex] = useState();

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), isDone: false }]);
      setNewTodo("");
    }
  };
  function deleteItem(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function editItem(index) {
    const editTask = todos.find((todo) => todo.id !== index);

    setEditedTodo(editTask);
  }

  const display = todos.map((index) => (
    <div key={index} onClick={() => deleteItem(index)}>
      {todos.text}
    </div>
  ));

  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.h2}>My ToDo list</h2>
          <p className={styles.counter}>{display.length}</p>
        </div>
        <div className={styles.list}>
          <div>
            <div>
              {todos.map((todo, index) => (
                <div key={index}>
                  {editIndex !== index && (
                    <div className={styles.todo}>
                      <input
                        key={index}
                        className={styles.sphere}
                        type="checkbox"
                      />
                      <h2>{todo.text}</h2>

                      <img
                        htmlFor={`custom-checkbox-${index}`}
                        src="dash.png"
                        onClick={() => editItem(todo.id)}
                      />
                      <img src="trash.png" onClick={() => deleteItem(index)} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.gae}>
              <input
                placeholder="what's next?"
                className={styles.inputs}
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={newTodo}
              />
              <button id="butt" onClick={addTodo} className={styles.finaler}>
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
