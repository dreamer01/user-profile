import {
	USERS_IS_LOADING,
	USERS_IS_LOADING_FAILURE,
	USERS_IS_LOADING_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	RELOAD_USER_FAILURE,
	RELOAD_USER_SUCCESS
} from "../types/authentications"

const defaultState = {
  currentUser: {},
  isLoading: false,
  error: {}
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
		case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: {},
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
				error: action.payload,
        isLoading: false
			};
		case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: {},
        isLoading: false
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
				error: action.payload,
        isLoading: false
			};
		case RELOAD_USER_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				isLoading: false
			};
		case RELOAD_USER_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
      return state;
  }
};

export default authentication;
