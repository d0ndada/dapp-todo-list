import { useState } from "react";
import './TodoForm.css'
import { NewTodo } from "../../models/todo";
import { useContext } from 'react';
import { TodoContext } from '../../UseContext/Context';

function TodoForm() {
  const { account,createTodo, connected } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState(new NewTodo(""));

    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTodo.text.trim().length > 0){
        e.preventDefault();
        console.log(newTodo);
          createTodo(newTodo)
          setNewTodo(new NewTodo(""))
          console.log(newTodo);
          }
      
    }
    const handleChange = (e) => {
      setNewTodo({...newTodo, text: e.target.value, })
      
    }
    
    return (
    
    <form className="Form" >
      {account && connected ? <div className="container" >
        <input type='text' placeholder="Add todo..." 
       className="Form_field" value={newTodo.text} onChange={handleChange} />
        <button className="button" type="submit" onClick={handleSubmit}  >
        <span className="material-symbols-outlined">
list_alt_add
</span>
        </button>
        </div>:<h4>To interact with this website pleas connect to metamask in the top right corner <span className="material-symbols-outlined arrow-animation">
north_east
</span></h4>}
        {/* <SortOrder SortByAlphabeticOrder={SortByAlphabeticOrder} /> */}

    </form>
    
  )
}
export default TodoForm