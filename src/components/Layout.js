import React, { useContext } from 'react'
import styled from 'styled-components'
import { Provider as AlertProvider } from 'react-alert'
import { useAuthState } from '../utils/firebase-hooks'
import ErrorContext from '../contexts/Error'
import Alert from './Alert'
import Navbar from './Navbar'
import EmptyState from './EmptyState'

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 100%
`

const NotApp = ({loading, error, children}) => {
	if(loading) return <EmptyState img='2'>loading...</EmptyState>
	if(error){
		return (
			<EmptyState img='3'>
				<strong>ERROR:</strong><br/>
				<code>{error.message || error}</code>
			</EmptyState>
		)
	}
	return children
}

const Layout = ({children}) => {
	const { loading } = useAuthState()
	const error = useContext(ErrorContext)

	return (
		<AlertProvider
			template={Alert}
			offset='16px'
			timeout={5000000}
			position='bottom right'
			zIndex={100}
		>
			<Navbar/>
			<Content>
				<NotApp loading={loading} error={error}>
					{children}
				</NotApp>
			</Content>
		</AlertProvider>
	)
}

export default Layout
