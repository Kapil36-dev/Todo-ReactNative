import './App.css';
import Header from './mycomponent/header';
import About from './mycomponent/about';
import Todos from './mycomponent/todos';
import React, { useState , useEffect} from 'react';
import Footer from './mycomponent/Footer';
import { Addtodo } from './mycomponent/Addtodo'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const ondelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addtodo = (title, des) => {
    let sno
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      des: des,
    }
    setTodos([...todos, mytodo])
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="MyTodos LIST" search={true} />
      <Switch>
        <Route exact path ="/" render={()=>{
        return(
        <>
          <Addtodo addtodo={addtodo} />
          <Todos todos={todos} ondelete={ondelete} />
        </>
        )
        }}>
        </Route>
        <Route exact path="/about" render={()=>{
          return(
          <>
            <About/>
          </>
          )
        }}>
        </Route>
      </Switch>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
