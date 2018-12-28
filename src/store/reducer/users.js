import {
	GET_USER_PROFILE_SUCCESS ,
	GET_USER_PROFILE_FAILURE ,
	UPDATE_USER_PROFILE_SUCCESS,
	UPDATE_USER_PROFILE_FAILURE
} from "../types/users";

const defaultState = {
	userProfile:{},
	isLoading: false,
	error: ""
}

const users = (state = defaultState, action) => {
	switch(action.type){
		case GET_USER_PROFILE_SUCCESS:
			return {
				...state,
				userProfile: action.payload ,
				isLoading: false
			}
		case GET_USER_PROFILE_FAILURE:
			return {
				...state,
				error: action.payload ,
				isLoading: false
			}
		case UPDATE_USER_PROFILE_SUCCESS:
			return {
				...state,
				userProfile: action.payload ,
				isLoading: false
			}
		case UPDATE_USER_PROFILE_FAILURE:
			return {
				...state,
				error: action.payload ,
				isLoading: false
			}
		default:
			return state ;
	};
}

export default users;
