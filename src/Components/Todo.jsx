import InputCreate from "./InputCreate";
import { useState } from 'react'

function Todo(props) {
   const { tasks, handleComplete, handleRemove, handleRemoveAll, handleEdit } = props;
   const [edit, setEdit] = useState('')





   return (
      <ul className='todo'>
         {tasks.map((task, index) =>
            <li key={index}>
               <div className='checkAndTasks' >

                  <input type='checkbox' onClick={() => handleComplete(index)}  >
                  </input>

                  <span className={task.complited ? 'crossOut' : 'crossIn'} >
                     {task.task}
                  </span>
                  <button className="btn-edit" onClick={() => handleEdit(index)}> ed </button>
                  <button className="btn-delete" onClick={() => handleRemove(index)}>X
                  </button>

               </div>
            </li>
         )
         }
         {tasks.length > 1 && <p><button className='deleteAll' onClick={() => handleRemoveAll()}>Очистить</button></p>}

      </ul >
   )
}

export default Todo