import React from 'react'
import { useAuthActions } from '../utils/firebase-hooks'
import { withAlert } from 'react-alert'
import EmptyState from './EmptyState'

const SignIn = ({alert, ...props}) => {
	const { signIn } = useAuthActions()
	const signInAction = (...args) => {
		signIn(...args).then(() => alert.show('✨  welcome home'))
	}

	return <EmptyState img='4' onClick={signInAction}>Sign In to start</EmptyState>
}

export default withAlert(SignIn)
