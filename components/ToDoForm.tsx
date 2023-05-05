import { useState } from 'react';

import { Button } from 'react-bootstrap';

export const ToDoForm = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (e: any) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setTodos([...todos]);
  };

  return (
    <div className='formWrapper'>
      <form>
        <input
          type='text'
          placeholder='Add a Task...'
          onChange={inputTextHandler}
        />
        <Button onSubmit={submitHandler}>Add</Button>
      </form>

      <ul></ul>
    </div>
  );
};
