import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

export const REACT_APP_FIREBASE_API_KEY = process.env['REACT_APP_FIREBASE_API_KEY']
if (!REACT_APP_FIREBASE_API_KEY) throw new Error('missing REACT_APP_FIREBASE_API_KEY environment variable')

const config = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: 'vitordino-todo.firebaseapp.com',
	databaseURL: 'https://vitordino-todo.firebaseio.com',
	projectId: 'vitordino-todo',
	storageBucket: 'vitordino-todo.appspot.com',
	messagingSenderId: '1044459603797',
}

firebase.initializeApp(config)

export default firebase
export const todosRef = firebase.database().ref('todos')
export const provider = new firebase.auth.GoogleAuthProvider()


export const toArray = snapshot => {
	const array = []
	try{
		snapshot.forEach(child => {
			const value = child && child.val && child.val()
			if(typeof value !== 'object') return array.push({key: child.key, value})
			return array.push({...value, key: child.key})
		})
	}catch(e){
		// if argument isn't a snapshot, return an empty array
	}
	return array
}
