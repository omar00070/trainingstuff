import React from 'react'


const Todo = ({data, handleClick, delTodo}) => {
    
    const handleDelete = (item) =>{
        console.log('delete')
        // get the id
        const id = item.id
        // delete the todo
        delTodo(id)
    }

    
    return(
        <div style={{
            backgroundColor: 'yellow',
            margin: '3rem',
            padding: '1rem' 
        }}>

            {data.map(item => {
                return(
                    <>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div>
                            <p>this assignment is: </p>
                            <button className="done" onClick={() => handleClick(item)}>{item.done? 'done': 'not done'}</button>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </div>
                        
                    </>
                )
            })}
           
        </div>
    )
}


export default Todo