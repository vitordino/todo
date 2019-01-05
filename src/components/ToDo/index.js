import React from 'react'
import { signOut } from '../../actions'
import Navbar from '../Navbar'
import Container from '../Container'
import Form from './Form'
import List from './List'

const ToDo = () => (
	<div>
		<Navbar signOut={signOut}/>
		<Container style={{position: 'relative'}}>
			<List/>
			<Form/>
		</Container>
	</div>
)

export default ToDo
