import React from 'react'
import { useAuthState, useList } from '../../utils/firebase-hooks'
import { useInputState } from '../../utils/hooks'
import { toArray } from '../../utils/firebase'
import EmptyState from '../EmptyState'
import Container from '../Container'
import Select from '../Select'
import ListItem, {LoadingItem} from './ListItem'

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
	const [sortBy, setSortBy] = useInputState('key')
	const [filter, setFilter] = useInputState(0)
	const { error, loading, value: list } = useList(`todos/${uid}`, sortBy)

	if(error) return <EmptyState img='3'>error: {error.message}</EmptyState>
	if(loading)return (
		<Container {...props}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Select value={filter} onChange={setFilter} options={filterOptions}/>
				<Select value={sortBy} onChange={setSortBy} options={sortOptions} icon='shuffle'/>
			</div>
			<LoadingItem/><LoadingItem/>
		</Container>
	)
	if(!list || !list.length) return <EmptyState>You don’t have any tasks yet</EmptyState>

	const array = filterCompleted(filter, toArray(list))

	return (
		<Container {...props}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Select value={filter} onChange={setFilter} options={filterOptions}/>
				<Select value={sortBy} onChange={setSortBy} options={sortOptions} icon='shuffle'/>
			</div>
			{(!array || !array.length)
				? <EmptyState>You don’t have any {(filterOptions[filter] || '').toLowerCase()} tasks</EmptyState>
				: array.map((x, i) => <ListItem {...x} key={x.key} id={x.key} index={i}/>)
			}
		</Container>
	)
}

export default List
