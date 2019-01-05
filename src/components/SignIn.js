import React from 'react'
import { signIn } from '../actions'
import Navbar from './Navbar'

const SignIn = ({...props}) => (
	<div style={{flex: 1}}>
		<Navbar signIn={signIn}/>
		<h4 id='sign-in-header'>Sign In to start</h4>
	</div>
)

export default SignIn
