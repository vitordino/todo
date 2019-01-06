import React, {useState} from 'react'
import ListItem from './ListItem'
import {useAuthState, useList} from '../../utils/firebase-hooks'
import { toArray } from '../../utils/firebase'
import Container from '../Container'
import Select from '../Select'

const List = props => {
	const { uid } = useAuthState()
	const [sortBy, setSortBy] = useState('key')
	const [filter, setFilter] = useState('all')
	const { error, loading, value: list } = useList(`todos/${uid}`, sortBy)

	if(error) return <Container {...props}>error: {error.message}</Container>
	if(loading) return <Container {...props}>loading...</Container>
	if(!list || !list.length) return <Container {...props}>You don’t have any tasks yet'</Container>

	const sortOptions = [
		{value: 'key', label: 'Created'},
		{value: 'dueTime', label: 'Due time'},
		{value: 'priority', label: 'Priority'},
	]

	const filterOptions = [
		{value: 'all', label: 'All'},
		// very hacky approach to boolean coercion (input values has to be strings)
		{value: '', label: 'Current'},
		{value: ' ', label: 'Completed'},
	]

	const filterCompleted = (status, array) => {
		if(status === 'all') return array
		// eslint-disable-next-line eqeqeq
		return array.filter(({completed}) => completed == !!status)
	}

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
			{filterCompleted(filter, toArray(list)).map(x => (
				<ListItem {...x} key={x.key} id={x.key}/>
			))}
		</Container>
	)
}

export default List
