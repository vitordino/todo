import React from 'react'
import { removeToDo, updateToDo } from '../../actions'

const ListItem = ({created, completed, dueTime, priority, title, id, ...extra}) => (
	<div style={{margin: '2rem 0', background: '#fff'}}>
		<pre>{JSON.stringify({created, completed, dueTime, priority, title, id, ...extra}, null, 2)}</pre>
		<button onClick={() => removeToDo(id)}>
			<i>remove</i>
		</button>
		<button onClick={() => updateToDo(id, {completed: !completed})}>
			<i>done</i>
		</button>
	</div>
)


export default ListItem
