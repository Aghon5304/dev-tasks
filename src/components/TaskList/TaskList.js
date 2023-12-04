import React,{useState} from "react";

import { sampleTasks } from "../../pages";

function TaskList(){
    const [tasks,setTasks] = useState(sampleTasks);

    /*function setTasks({task}){
        tasks.id===task.id? (tasks.completed = !tasks.completed):()
    }*/
    const taskElements = tasks.map((task,index)=>(
        <li key={index} style={task.completed ? {textDecoration:"line-through", color:"red"}:{textDecoration:"none", color:"green"}}>
            {task.text}
            <input type="checkbox" checked={task.completed} /*onChange={setTasks(task)}*/ />
        </li>
    ));
    return(
            <ol>{taskElements}</ol>
    )
}
export default TaskList