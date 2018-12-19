import * as types from '../action/ActionTypes';

const initialState = {
    input: '',
    color: '#343a40',
    todos: []
};

export default function todoReducer(state = initialState, action) {

    switch(action.type) {
        case types.CREATE:
            return {
              ...state,
              input: '',
              todos: state.todos.concat({
                id: action.id,
                text: state.input,
                checked: false,
                color: state.color
              })
            };
        case types.REMOVE:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
        case types.TOGGLE:
            const todos = state.todos;
            const index = todos.findIndex(todo => todo.id === action.id);
            const selected = todos[index];

            const nextTodos = [...todos];

            nextTodos[index] = {
              ...selected,
              checked: !selected.checked
            };
            return { ...state, todos: nextTodos };
        case types.CHANGE:
            return { ...state, input: action.input};
        default:
            return state;
    }
}
