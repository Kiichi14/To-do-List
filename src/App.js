import { useState } from 'react';
import './App.css';
import List from './Components/List';
import ListAdd from './Components/ListAdd';

function App() {
  //State
  const [list, setList] = useState([
    {id:1, name:"tache1"},
    {id:2, name:"tache2"},
    {id:3, name:"tache3"},
  ])

  //Méthodes
  const handleRemove = (id) => {
    console.log(id);
    const listCopy = [...list];
    const listUpdate = listCopy.filter((list) => list.id !== id);
    setList(listUpdate);
  }


  //ReRender
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <ul>
        {list.map((lists) => (
         <List listInfo={lists} remove={handleRemove}/> 
        ))}
      </ul>
      <ListAdd listing={list} addList={setList}/>
    </div>
  );
}

export default App;
