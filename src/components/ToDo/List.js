import React, {useState} from 'react'
import ListItem from './ListItem'
import {useAuthState, useList} from '../../utils/firebase-hooks'
import { toArray } from '../../utils/firebase'
import Container from '../Container'

const List = props => {
	const { uid } = useAuthState()
	const [sortBy, setSortBy] = useState('key')
	const { error, loading, value: list } = useList(`todos/${uid}`, sortBy)

	if(error) return <Container {...props}>error: {error.message}</Container>
	if(loading) return <Container {...props}>loading...</Container>
	if(!list || !list.length) return <Container {...props}>You don’t have any tasks yet'</Container>

	const sortOptions = [
		{value: 'key', label: 'Created'},
		{value: 'dueTime', label: 'Due time'},
		{value: 'priority', label: 'Priority'},
	]

	return (
		<Container {...props}>
			<select value={sortBy} onChange={e => setSortBy(e.target.value)}>
				{sortOptions.map(({value, label}) => (
					<option value={value}>{label}</option>
				))}
			</select>
			{toArray(list).map(x => (
				<ListItem {...x} key={x.key} id={x.key}/>
			))}
		</Container>
	)
}

export default List
