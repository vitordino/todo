import React from 'react'
import ListItem from './ListItem'
import {useAuthState, useList} from '../../utils/firebase-hooks'
import Container from '../Container'

const List = props => {
	const { uid } = useAuthState()
	const { error, loading, value: list } = useList(`todos/${uid}`)

	if(error) return <Container {...props}>error: {error.message}</Container>
	if(loading) return <Container {...props}>loading...</Container>
	if(!list || !list.length) return 'You don’t have any tasks yet'

	return (
		<Container {...props}>
			{list.map((snapshot) => (
				<ListItem key={snapshot.key} {...snapshot.val()} id={snapshot.key}/>
			))}
		</Container>
	)
}

export default List
