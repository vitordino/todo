import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { ThemeProvider} from 'styled-components'
import nest from './utils/nest'
import { useAuthState } from './utils/firebase-hooks'
import { Provider as CurrentTimeProvider } from './contexts/CurentTime'
import { Provider as ErrorProvider } from './contexts/Error'
import Layout from './components/Layout'
import GlobalStyle from './components/GlobalStyle'
import ToDo from './components/ToDo'
import SignIn from './components/SignIn'


const AuthRedirects = withRouter(({location}) => {
	const { uid } = useAuthState()
	if(uid && location.pathname === '/login') return <Redirect to='/'/>
	if(!uid && location.pathname !== '/login') return <Redirect to='/login'/>
	return null
})

const App = () => (
	<Fragment>
		<GlobalStyle/>
		<Layout>
			<Switch>
				<Route exact path='/login' component={SignIn}/>
				<Route exact path='/' component={ToDo}/>
			</Switch>
		</Layout>
	</Fragment>
)


const enhance = nest(
	ErrorProvider,
	CurrentTimeProvider,
	BrowserRouter,
	ThemeProvider,
)


export default enhance(App)
