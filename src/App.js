import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { useAuthState } from './utils/firebase-hooks'
import { Provider as CurrentTimeProvider } from './contexts/CurentTime'
import Layout from './components/Layout'
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
		<CurrentTimeProvider>
			<BrowserRouter>
				<Layout>
					<AuthRedirects/>
					<Switch>
						<Route exact path='/login' component={SignIn}/>
						<Route exact path='/' component={ToDo}/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</CurrentTimeProvider>
	)
}

export default App
