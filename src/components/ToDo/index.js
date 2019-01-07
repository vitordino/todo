import React, { Fragment } from 'react'
import Form from './Form'
import List from './List'

const ToDo = () => (
	<Fragment>
		<List style={{flex: 1, marginTop: '2rem'}}/>
		<Form/>
	</Fragment>
)

export default ToDo
