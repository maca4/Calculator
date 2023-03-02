import React, { useState } from 'react';
import './style.css';

function Tasklist() {
  const [task, setTask] = useState([]);
  const [inputText, setInputText] = useState('');

  function addListItem() {
    if(inputText.trim()!="")
    {
    setTask([...task, inputText]);
    setInputText(''); 
    }
    else
    {
      alert('Task cannot be empty');
    }
  }

  function deleteListItem(itemToDelete) {
    const filteredArray = task.filter(item => item !== itemToDelete);
    setTask(filteredArray);
  }

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div class="containter">
        <button class="add" onClick={addListItem}>Add Item</button>
        <input
        type="text" 
        value={inputText}
        onChange={handleInputChange} 
      />
      <ul>
        {task.map(item => (
          <li key={item}>
            {item} 
            <button class="remove" onClick={() => deleteListItem(item)}>Remove</button>
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default Tasklist; 
