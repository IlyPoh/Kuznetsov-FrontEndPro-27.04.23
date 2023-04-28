// components
// import { useState } from 'react';
import { useState } from 'react';
import { Button } from '../Button/Button';

// style
import style from './TodoForm.module.scss';

export const TodoForm = ({ todos, addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      completed: false,
    };
    addTodo(newTodo);
    setInputValue('');
  };

  return (
    <div className={style['todo-form']}>
      <form onSubmit={handleSubmit} className={style['form']}>
        <input
          type="text"
          placeholder="Add todo"
          value={inputValue}
          onChange={handleInputChange}
          className={style['input']}
        />
        <Button type="submit" text="Add" className="transparent" />
      </form>
    </div>
  );
};
