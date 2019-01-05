import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from './firebase'
import { Provider } from './components/FirebaseContext'
import Routes from './Routes'

const App = () => {
	const { initialising } = useAuthState(firebase.auth())
	if(initialising) return 'loading...'
	return (
		<Provider firebase={firebase}>
			<BrowserRouter>
				<Routes/>
			</BrowserRouter>
		</Provider>
	)
}

export default App
