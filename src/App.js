import { useState, useRef } from "react";
import "./styles.css";

const listData = [
  {
    name: "grocery",
    id: 1,
    isCompleted: true
  },
  {
    name: "ITR filing",
    id: 2,
    isCompleted: false
  }
];

export default function App() {
  const [todolist, setTodolist] = useState(listData);
  const newValueRef = useRef(null);
  const isDone = (e, data) => {
    console.log(data);
    const list = [...todolist];
    const index = list.findIndex((a) => a.id === data.id);
    list[index].isCompleted = !data.isCompleted;
    console.log(list);
    setTodolist(list);
    e.preventDefault();
  };
  const addNew = (e) => {
    const item = {
      name: newValueRef.current.value,
      id: todolist.length + 1,
      isCompleted: false
    };
    setTodolist([item, ...todolist]);
    console.log(newValueRef.current.value);
    newValueRef.current.value = null;
    e.preventDefault();
  };
  const deleteItem = () => {};

  return (
    <div className="App">
      <h1>new TODO list</h1>
      <div className="addNew">
        <form onSubmit={addNew}>
          add new item : <input type="text" ref={newValueRef} />
        </form>
      </div>
      <div id="todoList" className="mainList">
        {todolist &&
          todolist.length > 0 &&
          todolist.map((data) => {
            console.log(data);
            return (
              <div id={data.id} style={{ padding: "10px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => isDone(e, data)}
                  checked={data.isCompleted}
                />
                {data.name} => {!data.isCompleted ? "yet to be" : "done"}
                <button
                  style={{
                    background: "white",
                    border: "none",
                    "padding-left": "100px"
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
