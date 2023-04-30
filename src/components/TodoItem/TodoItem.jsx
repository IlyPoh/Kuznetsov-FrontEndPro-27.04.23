import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/todo';
import { Button } from '../Button/Button';
import style from './TodoItem.module.scss';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      className={`${style['todo-item']} ${
        style[todo.completed ? 'completed' : '']
      }`}
    >
      <span className={style['todo-item-text']}>{todo.text}</span>
      <div className={style['buttons']}>
        <Button
          onClick={() => handleToggleTodo(todo.id)}
          text={todo.completed ? 'Completed' : 'Complete'}
          className="completed"
        />
        <Button
          onClick={() => handleDeleteTodo(todo.id)}
          text="Delete"
          className="remove"
        />
      </div>
    </div>
  );
};
