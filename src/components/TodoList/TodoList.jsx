import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      {todos.length ? (
        todos.map((todo) => {
          console.log(todos);
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <div className={style['error']}>No todos</div>
      )}
    </>
  );
};
