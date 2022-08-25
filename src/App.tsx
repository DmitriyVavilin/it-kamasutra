import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {

    let tasksOne = [
        {id: 1, title: 'Html', isDone: true},
        {id: 2, title: 'Css', isDone: true},
        {id: 3, title: 'JS', isDone: false},
    ]
    let tasksTwo = [
        {id: 1, title: 'Terminator', isDone: true},
        {id: 2, title: 'One day', isDone: false},
        {id: 3, title: 'One love', isDone: false},
    ]

    return(
        <div className="App">
            <TodoList title="Hello"  tasks={tasksOne}/>
            <TodoList title="Salem" tasks={tasksTwo}/>
        </div>
    )
}


export default App;
