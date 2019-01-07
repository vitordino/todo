import React from 'react'
import styled from 'styled-components'
import { removeToDo, updateToDo } from '../../actions'
import Feather from '../Feather'
import RelativeTime from '../RelativeTime'
import {Paragraph} from '../Text'

const Wrapper = styled.div`
	display: flex;
	align-items: stretch;
	position: relative;
	padding: 0.5rem 0.75rem;
	margin: 1rem 0;
	background: ${p => !p.completed && p.theme.colors.white};
	border: 1px dashed transparent;
	border-color: ${p => p.completed && p.theme.colors.base11};
	border-radius: 0.25rem;
	box-sizing: border-box;
	overflow-x: hidden;
`

const IconWrapper = styled.button`
	border: none;
	background: transparent;
	margin: -0.375rem 0.125rem -0.375rem -0.75rem;
	padding: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${p => p.completed ? p.theme.colors.base22 : p.theme.colors.base11};
	outline: none;
	&:hover, &:focus, &:active{
		color: ${p => p.theme.colors.base66};
	}
	svg {
		display: block;
	}
`

const Main = styled.div`
	flex: 1;
`

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const DeleteButton = styled.button`
	border: 0;
	background: ${p => p.completed ?  p.theme.colors.base03 : p.theme.colors.white};
	color: ${p => p.theme.colors.base22};
	box-shadow: 0 0 3rem ${p => p.completed ?  p.theme.colors.base03 : p.theme.colors.white};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	padding: 1rem;
	transition: 0.2s opacity;
	opacity: 0;
	outline: none;
	${Wrapper}:hover &, ${Wrapper}:focus &, ${Wrapper}:active &, &:focus, &:active {
		opacity: 1;
	}
	&:hover, &:focus, &:active {
		background: crimson;
		color: ${p => p.theme.colors.white};
	}
`

const Details = props => (
	<Paragraph
		uppercase
		size={0}
		weight={600}
		color={p => p.theme.colors.base44}
		style={{letterSpacing: '0.025rem'}}
		{...props}
	/>
)

const getPriorityColor = (priority) => {
	/* eslint-disable eqeqeq */
	if(priority == 0) return 'gold'
	if(priority == 1) return 'coral'
	if(priority == 2) return 'firebrick'
	/* eslint-enable eqeqeq */
	return '#141618'
}

const getPriorityText = priority => {
	/* eslint-disable eqeqeq */
	if(priority == 0) return 'Low priority'
	if(priority == 1) return 'Medium priority'
	if(priority == 2) return 'High priority'
	/* eslint-enable eqeqeq */
	return 'No priority'
}

const ListItem = ({
	created,
	completed,
	dueTime,
	priority,
	title,
	id,
	...props
}) => (
	<Wrapper completed={completed}>
		<IconWrapper
			completed={completed}
			onClick={() => updateToDo(id, {completed: !completed})}
		>
			<Feather icon={completed ? 'check-circle' : 'circle'}/>
		</IconWrapper>
		<Main>
			<Top>
				<Details color={p => completed ? p.theme.colors.base22 : getPriorityColor(priority)}>
					{getPriorityText(priority)}
				</Details>
				<Details color={p => completed ? p.theme.colors.base22 : p.theme.colors.base44}>
					<RelativeTime time={dueTime} />
				</Details>
			</Top>
			<Paragraph color={p => completed ? p.theme.colors.base44 : p.theme.colors.base88}>
				{title}
			</Paragraph>
		</Main>
		<div>
			<DeleteButton completed={completed} onClick={() => removeToDo(id)}>
				<Feather icon='delete'/>
			</DeleteButton>
		</div>
	</Wrapper>
)


export default ListItem
