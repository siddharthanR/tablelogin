export const LOGIN_SUCCESS = "LOGIN_SUCCESS" 
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export function loginAction(loginCredentials){
    let {username, password} = loginCredentials;
    return function(dispatch, getState){
        if(username === "admin" && password === "admin123"){
            window.location="/Charts"
            dispatch({type: LOGIN_SUCCESS , status: true})
        } else {
            dispatch({type: LOGIN_FAILURE , status: false})
        }
    }
}