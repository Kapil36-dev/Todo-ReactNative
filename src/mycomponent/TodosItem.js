import React from 'react'

export default function TodosItem({todo,ondelete}) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p className="alert alert-primary">{todo.des}</p>
            <button className = "btn  btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
            <hr />
        </div>
    )
}
