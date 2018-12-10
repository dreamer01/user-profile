
import firebase from "firebase/app";
import "firebase/auth";

import {
	USERS_IS_LOADING,
	USERS_IS_LOADING_FAILURE,
	USERS_IS_LOADING_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	RELOAD_USER_SUCCESS,
	RELOAD_USER_FAILURE
} from "../types/authentications"

export const signInUser =({email , password}) => dispatch => {
	return firebase.auth().signInWithEmailAndPassword(email, password)
		.then( payload => dispatch({
			type: LOGIN_SUCCESS,
			payload: payload.user
		}))
		.catch (error => dispatch({
			type: LOGIN_FAILURE,
			payload: error.message
		}))
}

export const signUpUser = ({email,password}) => dispatch => {
	return firebase.auth().createUserWithEmailAndPassword(email,password)
		.then( payload => dispatch({
			type: SIGN_UP_SUCCESS,
			payload: payload.user
		}))
		.catch (error => dispatch({
			type: SIGN_UP_FAILURE,
			payload:error.message
		}))
}

export const reloadUser = () => dispatch => {
	return firebase.auth().currentUser.reload()
		.then(()=> dispatch({
			type: RELOAD_USER_SUCCESS,
			payload: firebase.auth().currentUser
		}))
		.catch( error => dispatch({
			type: RELOAD_USER_FAILURE,
			payload: error.message
		}))
}
