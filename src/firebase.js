import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

export const REACT_APP_FIREBASE_API_KEY = process.env['REACT_APP_FIREBASE_API_KEY']
if (!REACT_APP_FIREBASE_API_KEY) throw new Error('missing REACT_APP_FIREBASE_API_KEY environment variable')

const config = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: 'chama-challenge.firebaseapp.com',
	databaseURL: 'https://chama-challenge.firebaseio.com',
	projectId: 'chama-challenge',
	storageBucket: 'chama-challenge.appspot.com',
	messagingSenderId: '539891775343',
}

firebase.initializeApp(config)

export default firebase
export const todosRef = firebase.database().ref('todos')
export const provider = new firebase.auth.GoogleAuthProvider()
