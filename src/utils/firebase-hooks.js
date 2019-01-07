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

	return { ...(user ? user.toJSON() : {}), loading, error }
}

export const useList = (path, orderBy = 'key') => (
	hooks.useList(firebase.database().ref(path).orderByChild(orderBy))
)

export const useAuthActions = () => ({
	signIn: useErrorPropagation(signIn),
	signOut: useErrorPropagation(signOut),
})
