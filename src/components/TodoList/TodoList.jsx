import { TodoItem } from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      {todos.length ? (
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })
      ) : (
        <div className={style['error']}>No todos</div>
      )}
    </>
  );
};
