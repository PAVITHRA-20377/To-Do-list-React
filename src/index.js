
import React,{useState} from "react";
import  ReactDOM  from "react-dom";
import'./index.css';

const AddTask =({addTask})=>{
  const[value, updatevalue] = useState("");

const handleSubmit = e => {
  e.preventDefault();
  if(value !=="")
  {
    addTask(value)
    updatevalue("");
  }
};

return(

  <form onSubmit={handleSubmit}>
  
    <input 
    type="text"
    value={value}
    placeholder="Enter your task todo"
    onChange={e =>updatevalue(e.target.value)}/>
    <button type="submit"><i class="fa-solid fa-trash">add</i></button>
  </form>
  
);
}
 
const ToDoList =()=>{
  const addTask = text =>updateTask([...tasks,{text}]);
  const[tasks,updateTask]=useState([
    {
    text:"wake up",
    isCompleted: false
    },
    {
      text:"fresh up",
      isCompleted: false
      },
      {
        text:"Boost up",
        isCompleted: false
        },
  ]);
  const toggleTask=index=>{
    const newTask =[...tasks];
    if(newTask[index].isCompleted){
      newTask[index].isCompleted=false;
    }
    else{
      newTask[index].isCompleted=true;
    }
    updateTask(newTask);
  }

  const removeTask=index=>{
    const newTask=[...tasks];
    newTask.splice(index,1);
    updateTask(newTask);
  }
  return(
    <div className="list-of-tasks-todo">
      <h1 class="doto">React ToDoList</h1>
      {tasks.map((task,index)=>(
        <div className="task-status">
          <span onClick={()=> toggleTask(index)} className={task.isCompleted?"task-name completed-task":"task-name"}>
          {index}
          {task.text}
          </span>
          <button onClick={()=>removeTask(index)}><i class="fa-solid fa-trash">Delete</i></button>
        </div>
      ))}
      <AddTask addTask={addTask}/>
    </div>

  )
}
ReactDOM.render(<ToDoList/>,document.getElementById('root'));