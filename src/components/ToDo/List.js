import React, { Fragment, useEffect } from 'react'
import { useAuthState, useList } from '../../utils/firebase-hooks'
import { addMinutes, differenceInMinutes } from 'date-fns'
import { withAlert } from 'react-alert'
import { useInputState } from '../../utils/hooks'
import { toArray } from '../../utils/firebase'
import { useCurrentTime } from '../../contexts/CurentTime'
import EmptyState from '../EmptyState'
import Container from '../Container'
import Select from '../Select'
import ListItem, {LoadingItem} from './ListItem'

const sortOptions = {key: 'Created', dueTime: 'Due time', priority: 'Priority'}
const filterOptions = ['All', 'Current', 'Completed']
const getFilteredList = (filter, snapshot) => {
	if(!filter) return toArray(snapshot)
	return toArray(snapshot).filter(({completed}) => completed === !!(filter - 1))
}

/* eslint-disable no-mixed-operators */

const EmptyList = ({filter = 0}) => (
	<EmptyState>
		You don’t have any {(filter && filterOptions[filter] || '').toLowerCase()} tasks
	</EmptyState>
)

const approximatlyEqual = (a, b, factor = 1e4) => (
	Math.round(a/factor) === Math.round(b/factor)
)
const isWithinMinutes = (a, b, minutes = 5) => (
	Math.abs(differenceInMinutes(a, b)) < minutes
)

const useTodoAlerts = list => useCurrentTime(currentTime => {
	const alerts = list.filter(todo => {
		if(currentTime > todo.dueTime) return false
		return isWithinMinutes(currentTime, todo.dueTime, 5)
	})
	const overdue = list.filter(
		todo => approximatlyEqual(todo.dueTime, currentTime)
	)
	return [alerts, overdue]
})

const Wrapper = ({render, children = render, alert, ...props}) => {
	// get list
	const { uid } = useAuthState()
	const [sortBy, setSortBy] = useInputState('key')
	const [filter, setFilter] = useInputState('0')
	const { loading, value: allTodos } = useList(`todos/${uid}`, {sortBy})
	const list = loading ? [] : getFilteredList(filter|0, allTodos)

	// manage alerts
	const [alerts, overdue] = useTodoAlerts(list)

	useEffect(() => {
		if(alerts.length) alerts.forEach(({title}) => alert.show(`${title} is about to expire`))
	}, [...alerts.map(a => a.key)])

	useEffect(() => {
		if(overdue.length) overdue.forEach(({title}) => alert.show(`${title} is overdue`))
	}, [...overdue.map(a => a.key)])


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
			if (!list.length) return <EmptyList filter={filter}/>
			return list.map((x, i) => <ListItem {...x} key={x.key} id={x.key} index={i}/>)
		}}
	</Wrapper>
)

export default withAlert(List)
