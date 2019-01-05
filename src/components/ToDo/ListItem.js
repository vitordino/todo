import React from 'react'
import { removeToDo, updateToDo } from '../../actions'

const ListItem = ({created, completed, dueDate, priority, title, id}) => (
	<div style={{margin: '2rem 0', background: '#fafafa'}}>
		<pre>{JSON.stringify({created, completed, dueDate, priority, title, id})}</pre>
		{' '}
		<button onClick={() => removeToDo(id)}>
			<i>remove</i>
		</button>
		{' '}
		<button onClick={() => updateToDo(id, {completed: !completed})}>
			<i>done</i>
		</button>
	</div>
)


export default ListItem
