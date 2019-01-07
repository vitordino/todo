import React from 'react'
import { signIn } from '../actions'
import Navbar from './Navbar'
import EmptyState from './EmptyState'

const SignIn = ({...props}) => (
	<div style={{flex: 1}}>
		<Navbar signIn={signIn}/>
		<EmptyState img='4' onClick={signIn}>Sign In to start</EmptyState>
	</div>
)

export default SignIn
