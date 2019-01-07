import React, { Fragment, useContext} from 'react'
import styled from 'styled-components'
import { useAuthState } from '../utils/firebase-hooks'
import ErrorContext from '../contexts/Error'
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
	const { loading, authError } = useAuthState()
	const error = useContext(ErrorContext)

	return (
		<Fragment>
			<Navbar/>
			<Content>
				<NotApp loading={loading} error={authError || error}>
					{children}
				</NotApp>
			</Content>
		</Fragment>
	)
}

export default Layout
