import React, {useState} from 'react'
import ListItem from './ListItem'
import {useAuthState, useList} from '../../utils/firebase-hooks'
import { toArray } from '../../utils/firebase'
import Container from '../Container'
import Select from '../Select'

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
			<Select
				value={sortBy}
				onChange={e => setSortBy(e.target.value)}
				options={sortOptions}
			/>
			{toArray(list).map(x => (
				<ListItem {...x} key={x.key} id={x.key}/>
			))}
		</Container>
	)
}

export default List
