import localUserData from '../Data/localDataForAuth.json';

const USER_AUTHORIZATION = 'USER_AUTHORIZATION';

let initialState = {
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHORIZATION: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default:
            return state;
    }
}

const AuthorizationAC = (isAuth) => ({ type: USER_AUTHORIZATION, isAuth })

export let loginTC = (login, password) => {
    return (dispatch) => {
        localUserData.map(item => {
            let pattern = new RegExp('[A-Za-z0-9\.]*@mail\.ch', "gim");
            
            if (login === item.login && password === item.password && !pattern.test(login)) {
                dispatch(AuthorizationAC(true));
                console.log('auth successful');
            }
            else {
                console.log('auth unsuccessful');
            }
        })
    }
}

export let logoutTC = () => {
    return (dispatch) => {
        dispatch(AuthorizationAC(false));
        console.log('logout successful');
    }
}

export default authReducer;