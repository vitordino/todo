import React from 'react'
import { signOut } from '../../actions'
import Navbar from '../Navbar'
import Form from './Form'
import List from './List'

const ToDo = () => (
	<div>
		<Navbar signOut={signOut}/>
		<Form/>
		<List/>
	</div>
)

export default ToDo
