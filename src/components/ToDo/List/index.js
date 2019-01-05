import React from 'react'
import Item from './Item'
import {useAuthState, useList} from '../../../utils/firebase-hooks'

const List = () => {
	const { uid } = useAuthState()
	const { error, loading, value: list } = useList(`todos/${uid}`)

	if(error) return <div>error: {error.message}</div>
	if(loading) return 'loading...'
	if(!list || !list.length) return 'You don’t have any tasks yet'

	return list.map((snapshot) => (
		<Item key={snapshot.key} {...snapshot.val()} id={snapshot.key}/>
	))
}

export default List
