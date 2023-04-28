import { Button } from '../Button/Button';
import style from './TodoItem.module.scss';

export const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div
      className={`${style['todo-item']} ${
        style[todo.completed ? 'completed' : '']
      }`}
    >
      <span className={style['todo-item-text']}>{todo.text}</span>
      <div className={style['buttons']}>
        <Button
          onClick={() => toggleTodo(todo.id)}
          text={todo.completed ? 'Completed' : 'Complete'}
          className="completed"
        />
        <Button
          onClick={() => deleteTodo(todo.id)}
          text="Delete"
          className="remove"
        />
      </div>
    </div>
  );
};
