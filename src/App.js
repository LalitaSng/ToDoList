import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [toDo,setToDo] = useState('');
  const [toDos,setToDos] = useState(['to wake up','to brush','to make food']);

  const handleAddToDo = () => {
    if(toDo){
      setToDos(prevToDos=>{
        return(
          [...prevToDos,toDo]
        )
      })
    }
    setToDo(" ")
  }

  const handleEdit = (index) =>{
    console.log('index',index);
    toDos.find((toDo,i)=>{
      if(index==i){
        setToDo(toDo)
      }
    })
    handleDelete(index)
  }

  
  const handleDelete = (index) => {
    setToDos((prevToDos)=>{
      return(
        prevToDos.filter((toDo,i)=>i!=index)
      )
    })
  }

  return (
    <div className="App">
      <input type='text' placeholder='Add a new task' value = {toDo} onChange={(e)=>setToDo(e.target.value)}/>
      <button onClick={handleAddToDo}>Add</button>
      <div>
        <ol>
          {
            toDos.map((toDo,index) => <li key={`${toDo}-${index}`}>{toDo}<span><button onClick={()=>handleEdit(index)}>Edit</button><button onClick={()=>handleDelete(index)}>Delete</button></span></li>)
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
