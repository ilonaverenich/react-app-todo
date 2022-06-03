function Todo(props) {
   const { tasks, handleComplete, handleRemove, handleRemoveAll } = props;

   return (
      <ul className='todo'>
         {tasks.map((task, index) =>
            <li key={index}>
               <div className='checkAndTasks'>
                  <label className='checkContainer'>
                     <input type='checkbox' onClick={() => handleComplete(index)}></input>
                     <span className='checkmark'></span>
                  </label>
                  <span>{task.task}<button className="btn-delete" onClick={() => handleRemove(index)}>X</button></span>
               </div>
            </li>
         )

         }
         {tasks.length > 1 && <p><button className='deleteAll' onClick={() => handleRemoveAll()}>Очистить</button></p>}

      </ul>
   )
}

export default Todo