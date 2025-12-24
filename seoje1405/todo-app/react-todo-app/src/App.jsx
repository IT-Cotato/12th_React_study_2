import './App.css'

import Form from './components/Form'
import Lists from './components/Lists'
import {useState}  from 'react'

export default function App(){

const initialTodoData = localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [];

const [todoData, setTodoData] = useState(initialTodoData);
const [value, setValue] = useState(''); // 기본값

  const handleSubmit = (e) => {
    e.preventDefault() // 새로고침 방지
    let newTodo = {
      id : Date.now().toString(), // 고유한 값
      title : value,
      completed : false
    }
    setTodoData([...todoData, newTodo])
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo])) // 로컬 스토리지에 데이터 저장
    setValue('')
  }

    return (
      <div className="container">
        <div className = 'todoBlock'>
          <div className='title'> <h1>할 일 목록</h1>

          <Lists
            todoData={todoData}
            setTodoData={setTodoData}></Lists>

          <Form 
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          ></Form>

          </div>
        </div>
      </div>
              
     

     
    )
  
}