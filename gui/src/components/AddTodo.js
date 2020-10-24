import axios from 'axios'
import React, { useState } from 'react'
import Todo from './Todo'


const AddTodo = () => {

    const [data, setData] = useState({
        title: '',
        description: '',
        done: false,
    })

    const [title, setTitle] = useState('')

    const createTodo = () =>{
        console.log('attempting to create todo')
        //handle post request
        // verify form first
        
        //axios to server
        axios.post('http://127.0.0.1:8000/todo/', data)
        .then(res =>{
            console.log(res)
            console.log('todo created')
        })
        .catch(err => {
            console.log(err)
            console.log('todo was not created')
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // send data to server
        createTodo()
    }

    const handleChange = (e) =>{
        const target = e.target.name
        let value
        if(target == 'done'){
           console.log(e.target.checked)
           value = e.target.checked 
        }else{
            value = e.target.value
        }
        const newData = {...data, [target]: value}
        console.log(newData)
        setData(newData)
    }

    return( 
        <form onSubmit={handleSubmit}>
            <label>
                <h3>Title</h3>
                <input type="text" value={data.title} name="title" onChange={handleChange}/>
            </label>
            <label>
                <h3>description</h3>
                <input type="text" value={data.description} name="description" onChange={handleChange}/>
            </label>
            <label>
                <h3>Done</h3>
                <input type="checkbox" value={data.done} name="done" onChange={handleChange}/>
            </label>
            <br/>
            <br/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
}


export default AddTodo