import {useState, useEffect} from 'react'
import * as hooks from 'react-firebase-hooks/database'
import {signIn, signOut} from '../actions'
import firebase from './firebase'
import { useErrorPropagation } from './hooks'

export const useAuthState = () => {
	const [{user, loading, error}, setState] = useState({
		user: firebase.auth().currentUser,
		loading: true,
	})

	useEffect(() => firebase.auth().onAuthStateChanged(
			user => setState({user, loading: false}),
			error => setState({error, user: null, loading: false}),
	), [])

	if (error) throw error
	return { ...(user ? user.toJSON() : {}), loading }
}

export const useList = (path, {sortBy = 'key'} = {}) => {
	const ref = firebase.database().ref(path).orderByChild(sortBy)
	const { loading, value, error } = hooks.useList(ref)
	if (error) throw error
	return { loading, value }
}


export const useAuthActions = () => ({
	signIn: useErrorPropagation(signIn),
	signOut: useErrorPropagation(signOut),
})
