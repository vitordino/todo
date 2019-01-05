import React, {  Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { useAuthState } from './utils/firebase-hooks'
import ToDo from './components/ToDo'
import SignIn from './components/SignIn'

const AuthRedirects = withRouter(({location}) => {
	const { uid } = useAuthState()
	if(uid && location.pathname === '/login') return <Redirect to='/'/>
	if(!uid && location.pathname !== '/login') return <Redirect to='/login'/>
	return null
})

const App = () => {
	const { loading } = useAuthState()
	if(loading) return 'loading...'
	return (
		<BrowserRouter>
			<Fragment>
				<AuthRedirects/>
				<Switch>
					<Route exact path='/login' component={SignIn}/>
					<Route exact path='/' component={ToDo}/>
				</Switch>
			</Fragment>
		</BrowserRouter>
	)
}

export default App
