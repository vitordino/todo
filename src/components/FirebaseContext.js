import React, {createContext, useContext, useState, useEffect} from 'react'
import {useList as useListFromFirebase} from 'react-firebase-hooks/database'

const FirebaseContext = createContext({ firebase: {} })

export const Provider = ({ children, firebase }) => (
	<FirebaseContext.Provider value={{ firebase }}>
		{children}
	</FirebaseContext.Provider>
)

export default FirebaseContext

export const useAuthState = () => {
	const {firebase} = useContext(FirebaseContext)

	const [{user, loading}, setState] = useState({
		user: firebase.auth().currentUser,
		loading: true,
	})

	useEffect(() => firebase.auth().onAuthStateChanged(
			user => setState({user, loading: false})
	), [])

	return { ...(user ? user.toJSON() : {}), loading }
}

export const useList = path => {
	const {firebase} = useContext(FirebaseContext)
	return useListFromFirebase(firebase.database().ref(path))
}
