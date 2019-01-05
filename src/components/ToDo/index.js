import React from 'react'
import { signOut } from '../../actions'
import List from './List'
import Form from './Form'

const ToDo = () => (
	<div>
		<Form/>
		<List/>
		<button onClick={signOut}>sign out</button>
	</div>
)

export default ToDo
