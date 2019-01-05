import React, { Fragment } from 'react'
import ToDo from './components/ToDo'
import SignIn from './components/SignIn'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { useAuthState } from './components/FirebaseContext'

const AuthRedirects = withRouter(({location}) => {
	const { uid } = useAuthState()
	if(uid && location.pathname === '/login') return <Redirect to='/'/>
	if(!uid && location.pathname !== '/login') return <Redirect to='/login'/>
	return null
})

const Routes = ({user}) => (
	<Fragment>
		<AuthRedirects/>
		<Switch>
			<Route exact path='/login' component={SignIn}/>
			<Route exact path='/' component={ToDo}/>
		</Switch>
	</Fragment>
)

export default Routes
