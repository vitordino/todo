import firebase, { todosRef, provider } from '../utils/firebase'

export const addToDo = (data) => {
	const {uid} = (firebase.auth().currentUser || {})
	const created = new Date().valueOf()
	return todosRef.child(uid).push({...data, created})
}

export const removeToDo = (toDoId) => {
	const {uid} = (firebase.auth().currentUser || {})
	return todosRef.child(uid).child(toDoId).remove()
}

export const updateToDo = (toDoId, diff) => {
	const {uid} = (firebase.auth().currentUser || {})
	return todosRef.child(uid).child(toDoId).update(diff)
}

export const signIn = () => firebase.auth().signInWithPopup(provider)
export const signOut = () => firebase.auth().signOut()
