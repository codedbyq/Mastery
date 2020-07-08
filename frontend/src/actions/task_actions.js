import * as APITaskUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_SKILL_TASKS = 'RECEIVE_SKILLS_TASKS';
export const RECEIVE_USER_TASKS = 'RECEIVE_USER_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const CLEAR_TASK_ERRORS = "CLEAR_TASK_ERRORS";


// action creators

export const receiveTasks = (tasks) => {
    return {
        type: RECEIVE_TASKS,
        tasks
    };
}

export const receiveTask = (task) => {
    return {
        type: RECEIVE_TASK,
        task
    };
};

export const removeTask = (taskId) => {
    return {
        type: REMOVE_TASK,
        taskId,
    }
};

export const receiveTaskErrors = (errors) => {
    return {
        type: RECEIVE_TASK_ERRORS,
        errors
    }
}

export const removeTaskErrors = () => {
    return {
        type: CLEAR_TASK_ERRORS,
    };
};

// thunk action creators

export const fetchAllTasks = () => (dispatch) => {
    return APITaskUtil.fetchAllTasks()
        .then((tasks) => dispatch(receiveTasks(tasks)));
};

export const fetchTask = (taskId) => (dispatch) => {
    return APITaskUtil.fetchTask(taskId)
        .then(task => dispatch(receiveTask(task)));
}

export const fetchSkillTasks = (skillId) => (dispatch) => {
    return APITaskUtil.fetchSkillTasks(skillId)
        .then(tasks => dispatch(receiveTasks(tasks)));
}

export const fetchUserTasks = (userId) => (dispatch) => {
    return APITaskUtil.fetchSkillTasks(userId)
        .then((tasks) => dispatch(receiveTasks(tasks)));
};

export const deleteTask = (taskId) => (dispatch) => {
    return APITaskUtil.deleteTask(taskId)
        .then(() => dispatch(removeTask(taskId)))
        , (err) => dispatch(receiveRouteErrors(err.responseJSON));
}

export const updateTask = (taskId) => (dispatch) => {
    return APITaskUtil.updateTask(taskId)
        .then((task) => dispatch(receiveTask(task)))
        , (err) => dispatch(receiveRouteErrors(err.responseJSON));
}

export const clearTaskErrors = () => (dispatch) => {
    return dispatch(removeTaskErrors());
}
