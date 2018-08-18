
import state from './state'
import { CHANGE_USER_STATE } from './const'
const reducer = (prevsState = state, action) => {
    let new_state = { ...prevsState }
    switch (action.type) {
        case CHANGE_USER_STATE:
            new_state.user_state = action.user_state
        default: break;
    }
    return new_state
}

export default reducer
