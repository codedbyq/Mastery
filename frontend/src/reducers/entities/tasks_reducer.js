import * as taskAction from '../../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case taskAction.RECEIVE_TASKS:
            return Object.assign({}, state, action.tasks.data);
        case taskAction.RECEIVE_TASK:
            debugger
            newState[action.task.data._id] = action.task.data;
            return newState;
        case taskAction.REMOVE_TASK:
            delete newState[action.taskId]
            return newState
      default:
        return state;
    }
}

export default tasksReducer;