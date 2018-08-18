
import state from './state'
import { ADD_NEW_TODO } from './const'
const reducer = (prevsState = state, action) => {
    let new_state = { ...prevsState }
    new_state.todos = prevsState.todos.slice()
    switch (action.type) {
        case ADD_NEW_TODO:
            new_state = handler.addNewTodo(new_state, action.title)
        default: break;
    }
    return new_state
}

export default reducer

const handler = {
    addNewTodo (state, title) {
        state.todos.push({
            title, id: ++state.id
        })

        return state
    }
}