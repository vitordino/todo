import React, {useState} from 'react'
import ListItem from './ListItem'
import {useAuthState, useList} from '../../utils/firebase-hooks'
import { toArray } from '../../utils/firebase'
import Container from '../Container'
import Select from '../Select'

const sortOptions = {
	'key': 'Created',
	'dueTime': 'Due time',
	'priority': 'Priority',
}

const filterOptions = ['All', 'Current', 'Completed']
const filterCompleted = (filter, array) => {
	// handle filtering options (very hacky)
	if(!+filter) return array
	return array.filter(({completed}) => completed === !!(filter - 1))
}

const List = props => {
	const { uid } = useAuthState()
	const [sortBy, setSortBy] = useState('key')
	const [filter, setFilter] = useState(0)
	const { error, loading, value: list } = useList(`todos/${uid}`, sortBy)

	if(error) return <Container {...props}>error: {error.message}</Container>
	if(loading) return <Container {...props}>loading...</Container>
	if(!list || !list.length) return <Container {...props}>You don’t have any tasks yet'</Container>

	return (
		<Container {...props}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Select
					value={filter}
					onChange={e => setFilter(e.target.value)}
					options={filterOptions}
				/>
				<Select
					value={sortBy}
					onChange={e => setSortBy(e.target.value)}
					options={sortOptions}
				/>
			</div>
			{filterCompleted(filter, toArray(list)).map((x, i) => (
				<ListItem {...x} key={x.key} id={x.key} index={i}/>
			))}
		</Container>
	)
}

export default List
