import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <div className={style['todo-list']}>
        {todos.length ? (
          todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <div className={style['error']}>No todos</div>
        )}
      </div>
    </>
  );
};
