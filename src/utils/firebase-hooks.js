import {useState, useEffect} from 'react'
import * as hooks from 'react-firebase-hooks/database'
import firebase from '../firebase'

export const useAuthState = () => {
	const [{user, loading}, setState] = useState({
		user: firebase.auth().currentUser,
		loading: true,
	})

	useEffect(() => firebase.auth().onAuthStateChanged(
			user => setState({user, loading: false})
	), [])

	return { ...(user ? user.toJSON() : {}), loading }
}

export const useList = path => hooks.useList(firebase.database().ref(path))
