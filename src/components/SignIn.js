import React from 'react'
import { signIn } from '../actions'

const SignIn = ({...props}) => (
	<div>
		<h4 id='sign-in-header'>Sign In to start</h4>
		<button onClick={signIn}>Sign In With Google</button>
	</div>
)

export default SignIn
