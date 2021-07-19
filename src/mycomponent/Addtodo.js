import React, {useState } from 'react'


export const Addtodo = ({addtodo}) => {
    const [title, settitle] = useState("");
    const [des, setdes] = useState("");

    let submit =(e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title and Description can't be blank");
        }
        else{
            addtodo(title,des);
            settitle("")
            setdes ("");
        }
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="mb-3 mx-5 my-3">
                    <h3>Add a Todo</h3>
                    <div className = "my-2">
                        <label htmlFor="title" className="form-label">todo Title</label>
                        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 my-2">
                        <label htmlFor="des" className="form-label">Add description</label>
                        <input type="text" value={des} onChange={(e)=>setdes(e.target.value)} className="form-control" id="addtxt"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-success" id="addnode">Add todos</button>
                </div>
            </form>
            <hr />
        </div>
    )
}
