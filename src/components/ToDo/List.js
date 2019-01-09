import React, { Fragment } from 'react'
import { useAuthState, useList } from '../../utils/firebase-hooks'
import { useInputState } from '../../utils/hooks'
import { toArray } from '../../utils/firebase'
import EmptyState from '../EmptyState'
import Container from '../Container'
import Select from '../Select'
import ListItem, {LoadingItem} from './ListItem'

const sortOptions = {key: 'Created', dueTime: 'Due time', priority: 'Priority'}
const filterOptions = ['All', 'Current', 'Completed']
const getFilteredList = (filter, snapshot) => {
	if(!filter) return toArray(snapshot)
	return toArray(snapshot).map((props) => ({...props, hidden: props.completed === !(filter - 1)}))
}

/* eslint-disable no-mixed-operators */

const EmptyList = ({filter = 0}) => (
	<EmptyState>
		You don’t have any {(filter && filterOptions[filter] || '').toLowerCase()} tasks
	</EmptyState>
)

const Wrapper = ({render, children = render, ...props}) => {
	// get list
	const { uid } = useAuthState()
	const [sortBy, setSortBy] = useInputState('key')
	const [filter, setFilter] = useInputState('0')
	const { loading, value: allTodos } = useList(`todos/${uid}`, {sortBy})
	const list = loading ? [] : getFilteredList(filter|0, allTodos).reverse()

	return (
		<Container {...props}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Select value={filter} onChange={setFilter} options={filterOptions}/>
				<Select value={sortBy} onChange={setSortBy} options={sortOptions} icon='shuffle'/>
			</div>
			{children && children({sortBy, filter: filter|0, loading, list}) || null}
		</Container>
	)
}

const List = props => (
	<Wrapper {...props}>
		{({filter, loading, list}) => {
			if (loading) return <Fragment><LoadingItem/><LoadingItem/></Fragment>

			if (!list.length || list.every(({hidden}) => !!hidden)) return (
				<EmptyList filter={filter}/>
			)

			return list.map((x, i) => <ListItem {...x} key={x.key} id={x.key} index={i}/>)
		}}
	</Wrapper>
)

export default List
