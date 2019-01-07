import React from 'react'
import { useAuthActions } from '../utils/firebase-hooks'
import EmptyState from './EmptyState'

const SignIn = ({...props}) => {
	const { signIn } = useAuthActions()
	return <EmptyState img='4' onClick={signIn}>Sign In to start</EmptyState>
}

export default SignIn
