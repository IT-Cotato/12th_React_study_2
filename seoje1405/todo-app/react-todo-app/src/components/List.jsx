import { useState } from "react";

export default function List({ title, completed, id, todoData, setTodoData }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title); 
  const btnStyle = {
    color : '#fff',
    border:'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor : 'pointer',
    float : 'right'
}

const getStyle = (completed) => {
    return {
      padding : '10px',
      borderBottom : '1px #ccc dotted',
      textDecoration : completed ? 'line-through' : 'none'
    }
  }

const handleCompletedChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed // 체크박스 체크 여부 반전
      }
      return data // map 함수는 return이 있어야 함
    })
    setTodoData(newTodoData); // 상태 변경
    localStorage.setItem('todoData', JSON.stringify(newTodoData)); // 로컬 스토리지에 새로운 데이터 저장

  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
   };

  const handleClick = (id) => {
    console.log(id);
    let newTodoData = todoData.filter((data) => data.id !== id)
    console.log(newTodoData);
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData)); // 로컬 스토리지에 새로운 데이터 저장
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = todoData.map((data) => {  
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData)); // 로컬 스토리지에 새로운 데이터 저장
    setIsEditing(false);
  }

    if(isEditing){
        return(
            <div>
              <form style = {getStyle(completed)} onSubmit = {handleSubmit}>
              <input 
              value = {editedTitle}
              autoFocus
              onChange={handleEditChange} />
              <button type = "button"style={btnStyle} onClick={() => {setIsEditing(false)}}>X</button>
              <button type = "submit" style={btnStyle}>Save</button>
              </form>
            </div>
              
              
              

        )
    }

    else{ 
      return (
        <div style ={getStyle(completed)}>
            <input type='checkbox'
            onChange={() => handleCompletedChange(id)}
                checked={completed} />
                {title}
                <button style={btnStyle}
                onClick={() => {handleClick(id)}}>X</button>
                
                <button style={btnStyle}
                onClick={() => {setIsEditing(true); }}>Edit</button>
                    
          </div>
    )


    }



  }
