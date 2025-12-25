import { useState } from "react";

export default function List({ title, completed, id, todoData, setTodoData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  }; // 밑줄치기

  const handleClick = (id) => {
    console.log(id);
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData)); // localStorage 저장 텍스트로 변환해야한다.
  }; // 할 일 제거

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData)); // localStorage 저장
  }; // 할 일 체크

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  }; // 편집할때 내용 수정

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리프레시 막기

    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });

    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData)); // localStorage 저장
    setIsEditing(false);
  }; // 편집한 내용 저장

  if (isEditing) {
    return (
      <form style={getStyle(completed)} onSubmit={handleSubmit}>
        <input
          value={editedTitle}
          autoFocus // edit버튼 눌렀을때 바로 focus 갈수있게
          onChange={handleEditChange}
        />
        <button
          type="button"
          style={btnStyle}
          onClick={() => setIsEditing(false)}
        >
          X
        </button>
        <button type="submit" style={btnStyle}>
          Save
        </button>
      </form>
    );
  } else {
    return (
      <div key={id} style={getStyle(completed)}>
        <input
          type="checkbox"
          onChange={() => handleCompleteChange(id)}
          checked={completed}
        />
        {title}
        <button style={btnStyle} onClick={() => handleClick(id)}>
          X
        </button>
        <button style={btnStyle} onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>
    );
  } // 목록 편집
}
