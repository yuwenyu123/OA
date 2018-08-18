
import { ADD_NEW_TODO } from './const'

const actionCreator = {

    addNewTodo (title) {
        return (dispatch) => {
            backen.saveTitle(title).then(res => {
                let action = {
                    type: ADD_NEW_TODO,
                    title
                }
                dispatch(action)
            })
        }
    }
    // addNewTodo (title) {
    //     let action = {
    //         type: ADD_NEW_TODO,
    //         title
    //     }
    //     return action
    // }
}

export default actionCreator

const backen = {
    saveTitle () {
        return new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        })
    }
}