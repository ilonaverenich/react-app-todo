import './App.css';
import Form from './Components/Form';
import Todo from './Components/Todo';
import InputCreate from './Components/InputCreate';
import {useState} from 'react'

function App() {

  const[tasks, setTasks]= useState([]);
  const[formImput, setFormImput]= useState('');
  const [edit, setEdit] = useState('')

  const handleChange =e =>{
    setFormImput(e.target.value)
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    if (formImput !==''){
      const date = new Date().toLocaleDateString()
      const newTask ={
        date: date,
        task: formImput,
        complited: false
      }
      setTasks([...tasks,newTask])
      setFormImput('')
    }
  }

  const handleComplete = index =>{
    const newTasks = [...tasks];
    if (newTasks[index].complited ===false){
      newTasks[index].complited= true;
    }
    else {
      newTasks[index].complited= false;
    }
   
    setTasks(newTasks)
  }

  const handleEdit = (index) => {
    console.log(edit)
     setEdit(tasks[index])
     

  }

  const handleRemove = index =>{
    const newTasks = [...tasks];
    newTasks.splice(index,1)
    setTasks(newTasks)
  }

  const handleRemoveAll = ()=> {
    setTasks([])
  }

  return (
    <div className="App">
      <Form formImput={formImput} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Todo tasks={tasks} handleComplete={handleComplete} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
