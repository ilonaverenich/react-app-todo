

function Form(props) {
   const { formImput, handleChange, handleSubmit } = props;
   return (
      <form onSubmit={handleSubmit} className='formImput'>
         <label htmlFor='taskImput'></label>
         <input className="imput" type="text" required value={formImput} onChange={handleChange} />
         <button className='btn-add' type='submit' alt='add-task'>Добавить</button>
      </form>
   )
}

export default Form;