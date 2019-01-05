import React, { Fragment } from 'react'
import { signOut } from '../../actions'
import Navbar from '../Navbar'
import Form from './Form'
import List from './List'

const ToDo = () => (
	<Fragment>
		<Navbar signOut={signOut}/>
		<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
			<List style={{flex: 1}}/>
			<Form/>
		</div>
	</Fragment>
)

export default ToDo
