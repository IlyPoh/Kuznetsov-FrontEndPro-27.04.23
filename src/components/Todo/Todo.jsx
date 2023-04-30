/* eslint-disable no-unused-vars */
// components
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';

// style
import style from './Todo.module.scss';

export function Todo() {
  return (
    <>
      <div className={style.todo}>
        <div className={style['todo-body']}>
          <h1>Todo</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </>
  );
}
