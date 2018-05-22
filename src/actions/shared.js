import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser, logoutAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleLogin(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id))
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(logoutAuthedUser())
    }
}