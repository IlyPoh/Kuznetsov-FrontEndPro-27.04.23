import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todo';

const initialTodoState = {
  todos: [
    {
      id: 1,
      text: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      text: 'Learn Redux',
      completed: false,
    },
  ],
};

export default function todoReducer(
  state = initialTodoState,
  { type, payload }
) {
  switch (type) {
    case ADD_TODO:
      return {
        todos: [payload, ...state.todos],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
}
