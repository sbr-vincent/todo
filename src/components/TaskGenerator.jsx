import React, {useState} from 'react'

const TaskGenerator = () => {
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);

    const createTask = () => {
        if(input.length == 0){
            return;
        }

        const tasks = {
            text: input,
            complete: false,
        }
        setTask([...task, tasks])
        setInput('')
    }

    const setIsChecked = (Indx) => {
        const completed = task.map((tasks, i) => {
            if(i == Indx){
                tasks.complete = !tasks.complete;
            }
        
            return tasks;
        })

        setTask(completed)
    }

    const deleteTask = (Indx) => {
        const remove = task.filter((task, i) => {return i != Indx;} );
        setTask(remove);
        console.log("Delete Task")
    }   

    
    return (
        
        <div>
            <label>Task: </label>
            <input type="text" onChange={e => setInput(e.target.value)} value={input}></input>
            <button onClick={ () => createTask()}>Add</button>
            <div>
                {
                    task.map((taskItem,i) => {
                    const taskClasses = [];

                    if(taskItem.complete){
                        taskClasses.push("line-through");
                    }
                    return<p key={i} className={taskClasses.join(" ")}>{taskItem.text} <input type="checkbox" checked={taskItem.complete} onChange={ e => setIsChecked(i)}/> <button onClick={ () => deleteTask(i)}>Delete</button></p>})
                }
            </div>
        </div>
    )
}

export default TaskGenerator
