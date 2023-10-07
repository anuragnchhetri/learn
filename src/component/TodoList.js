
import React ,{useState}from 'react'

const TodoList = () => {
    
const [todos, setTodos]= useState([]);
const [newTodo, setNewTodo] = useState("");

const handleAddTodo = ()=>{
    if(newTodo.trim("")!==""){
        setTodos([...todos,{text: newTodo.trim(),checked: false}])
        setNewTodo("");
    }
}
const handleDeleteTodo =(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
};
const handleToggleTodo=(index)=>{
    const newTodos=[...todos];
    newTodos[index].checked=! newTodos[index].checked;
    setTodos(newTodos)
};
  return (
    <div className="main">
    <h1>To-do List Updated</h1>
    <input type='text' value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
          {todos.map((todo,index)=>{
              <li key={index}>
                  <input type="checkbox" checked={todos.checked} onChange={()=>handleToggleTodo(index)} />
              <span>{todo.text}</span>
              <button onClick={()=>handleDeleteTodo(index)}>delete</button>
              </li>
          })} 
      </ul>
  </div>
  )
}

export default TodoList;


