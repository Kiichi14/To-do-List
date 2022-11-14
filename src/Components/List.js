import React from 'react';

const List = (props) => {
    //State

    //Méthodes
    const listID = props.listInfo.id;
    const listName = props.listInfo.name;

    //ReRender
    return (
        <li key={listID}>
            {listName}
            <button onClick={() => props.remove(listID)}>X</button>
        </li>
    );
};

export default List;