import React, {useState} from 'react';

const ListAdd = ({ listing, addList}) => {
    //State
    const [newList, setNewList] = useState([])

    //Méthodes
    const handleNew = (event) => {
        setNewList(event.target.value)
    }

    const handleSubmit = (event) => {

        if(newList.trim().length === 0) {
            event.preventDefault();
            alert("Veuillez remplir le formulaire")
            setNewList("");
        } else {
            event.preventDefault();
            const newListCopy = [...listing];
            const id = new Date().getTime();
            const name = newList;
            newListCopy.push({id, name})
            addList(newListCopy);
            setNewList('');
        }
    }

    //ReRender
    return (
       <form action="submit" onSubmit={handleSubmit}>
        <input 
            value={newList}
            type="text"
            onChange={handleNew}
            placeholder="Ajouter une nouvelle tache"
        />
        <button>Add</button>
       </form>
    );
};

export default ListAdd;