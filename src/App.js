import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [toDo,setToDo] = useState('');
  const [toDos,setToDos] = useState([]);

  const handleSubmit = (e) => {
    console.log('event',e);
    e.preventDefault();

    if(toDo !== ' '){
      setToDos([{id:`${toDo} - ${Date.now()}`, toDo}, ...toDos])
      setToDo(' ')
    }
    
  }

  const handleEdit = (index) => {
    const editTodo = toDos.find((toDo)=> toDo.id == index);
    setToDo(editTodo.toDo);
    handleDelete(index);
  }

  const handleDelete = (index) => {
    const toDelete = toDos.filter(toDo => toDo.id !== index);
    setToDos(toDelete);
  }

  // const handleAddToDo = () => {
  //   if(toDo){
  //     setToDos(prevToDos=>{
  //       return(
  //         [...prevToDos,toDo]
  //       )
  //     })
  //   }
  //   setToDo(" ")
  // }

  // const handleEdit = (index) =>{
  //   console.log('index',index);
  //   toDos.find((toDo,i)=>{
  //     if(index==i){
  //       setToDo(toDo)
  //     }
  //   })
  //   handleDelete(index)
  // }

  
  // const handleDelete = (index) => {
  //   setToDos((prevToDos)=>{
  //     return(
  //       prevToDos.filter((toDo,i)=>i!=index)
  //     )
  //   })
  // }

  return (
    <div className="App">
      <div className="container">
        {/* <input type='text' placeholder='Add a new task' value = {toDo} onChange={(e)=>setToDo(e.target.value)}/>
        <button onClick={handleAddToDo}>Add</button>
       
          <ol>
            {
              toDos.map((toDo,index) => <li key={`${toDo}-${index}`}>{toDo}<span><button onClick={()=>handleEdit(index)}>Edit</button><button onClick={()=>handleDelete(index)}>Delete</button></span></li>)
            }
          </ol> */}
        <h1>Todo List App</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input type='text' placeholder='Add a new task' value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
          <button type='submit'>Go</button>
        </form>

        <ol className='allTodos'>
          {
            toDos.map((t) => {
              return(
                <li className='singleTodo'>
                  <span className='toDotext' key={t.id}>{t.toDo}</span>
                  <button onClick={()=>handleEdit(t.id)}>Edit</button>
                  <button onClick={()=>handleDelete(t.id)}>Delete</button>
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
