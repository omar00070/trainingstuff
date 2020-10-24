import './App.css';
import Todo from './components/Todo'
import axios from 'axios'
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo'

function App() {

  const [data, setData] = useState([]) 
  
  const delTodo = (id) =>{
    axios.delete(`http://127.0.0.1:8000/todo/delete/${id}/`)
    .then(res =>{
      console.log(res)
      //success message
    })
    .catch(err => {
      console.log(err)
      //error handling
    })
  }

  const checkTodo = (item) =>{
    setData(old => {
      return(old.map(obj => ({...obj, done: !obj.done})))
    })
    axios.put(`http://127.0.0.1:8000/todo/${item.id}/`, data[0])
    .then(res => {

    }
    )
    .catch(err => console.log(err))
}

const handleClick = (data) =>{
    checkTodo(data)
}

  const getTodos = () =>{
    axios.get('http://127.0.0.1:8000/todo/')
    .then(res =>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(err=> console.log(err))
  }

  useEffect(getTodos, [])
  return (
    <div className="App">
      <Todo data={data} handleClick={handleClick} delTodo={delTodo}/>
      <AddTodo/>
    </div>
  );
}

export default App;
