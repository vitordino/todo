import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { removeToDo, updateToDo } from '../../actions'
import { useCurrentTime } from '../../contexts/CurentTime'
import {getPriorityColor, getPriorityText, getDueTimeColor} from '../../utils/item'
import ContentLoader from '../ContentLoader'
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
	border-radius: 0.25rem;
`

const CompleteButton = styled.button`
	border: none;
	background: transparent;
	margin: -0.375rem 0.125rem -0.375rem -0.625rem;
	padding: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${p => p.completed ? p.theme.colors.base22 : p.theme.colors.base11};
	outline: none;
	position: relative;
	z-index: 2;
	&:hover, &:focus, &:active{
		color: ${p => p.theme.colors.base66};
	}
	svg {
		display: block;
	}
`

const Main = styled.div`
	flex: 1;
	word-break: break-all;
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
		z-index: 1;
		background: crimson;
		color: ${p => p.theme.colors.white};
		box-shadow: none;
	}
`

const Details = styled(Paragraph).attrs({
	uppercase: true,
	size: 0,
	weight: 600,
})`
	letter-spacing: 0.025rem;
`


const glow = keyframes`
	from{
		box-shadow: 0 0 0rem 0 hsla(-8,100%,50%,0);
	}
	to{
		box-shadow: 0 0 1.5rem 2px hsla(-8,100%,50%,0.2);
	}
`

const Border = styled.div`
	position: absolute;
	pointer-events: none;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 0.25rem;
	border: ${p => p.completed && `1px dashed ${p.theme.colors.base11}`};
	${p => p.expired && !p.completed && css`
		border: 2px solid hsla(-8,100%,50%,1)};
		animation: ${glow} 0.5s ${p => (p.index+1)/8}s alternate infinite;
	`}
`

const ListItem = ({
	created,
	completed,
	dueTime,
	priority,
	title,
	id,
	index,
	...props
}) => {
	const expired = useCurrentTime(current => current > dueTime)
	return (
		<Wrapper expired={expired} completed={completed} index={index}>
			<CompleteButton
				completed={completed}
				onClick={() => updateToDo(id, {completed: !completed})}
				>
				<Feather icon={completed ? 'check-circle' : 'circle'}/>
			</CompleteButton>
			<Main>
				<Top>
					<Details color={getPriorityColor} priority={priority} completed={completed}>
						{getPriorityText(priority)}
					</Details>
					<Details expired={expired} completed={completed} color={getDueTimeColor}>
						<RelativeTime time={dueTime}/>
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
			<Border completed={completed} expired={expired} index={index}/>
		</Wrapper>
	)
}

export const LoadingItem = props => (
	<Wrapper {...props}>
		<ContentLoader
			height={56}
			speed={2}
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
			{...props}
		>
			<circle cx="14" cy="28" r="11"/>
			<rect x="42" y="7" rx="2" ry="2" width="96" height="12"/>
			<rect x="42" y="31" rx="2" ry="2" width="192" height="16"/>
		</ContentLoader>
	</Wrapper>
)

export default ListItem
