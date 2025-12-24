import { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const initialTodoData = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : []; //초기화할때 로컬 스토리지에 있는 데이터로 초기화

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData([...todoData, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo])); // localStorage 저장
    setValue("");
  }; // 새로운 데이터 생성

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
