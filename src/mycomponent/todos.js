import React from 'react'
import TodosItem from "./TodosItem";

export default function Todos({todos,ondelete}) {
    const mystyle ={
        minHeight:"90vh",
        margin:"10px auto"
    }
    return (
        <div className = "container" style={mystyle}>
            <h3 className = " my-3">todos</h3>
            {todos.length===0?<p>no todos to display</p>:
            todos.map((todo)=>{
                return <TodosItem todo = {todo} key = {todo.sno} ondelete = {ondelete}/>
            })
        }
        </div>
    );
}


