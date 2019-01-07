import React, { useMemo } from 'react'
import { addMinutes, format } from 'date-fns'
import { useFormState } from 'react-use-form-state'
import styled from 'styled-components'
import { addToDo } from '../../actions'
import {priorityColors, getPriorityColor, getPriorityText} from '../../utils/item'
import { useAuthState } from '../../utils/firebase-hooks'
import Container from '../Container'
import Input from '../Input'
import Feather from '../Feather'
import RadioGroup from '../RadioGroup'

const Wrapper = styled.form`
	display: block;
	background: ${p => p.theme.colors.white};
	margin-top: 6rem;
`

const Flex = styled.div`
	display: flex;
	align-items: ${p => p.align || 'center'};
	justify-content: ${p => p.justify || 'flex-start'};
	flex-wrap: wrap;
`

const Button = styled.button`
	border: none;
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	border-radius: 50%;
	padding: 2rem;
	background: ${p => p.theme.colors.base11};
	color: ${p => p.theme.colors.base44};
	cursor: pointer;
	&:hover, &:focus, &:active {
		background: ${p => p.theme.colors.base88};
		color: ${p => p.theme.colors.white};
	}
	transform: translateY(-50%);
`
const getDateValue = timestamp => {
	const value = new Date(timestamp).valueOf()
	return isNaN(value) ? null : value
}

const priorityOptions = priorityColors.map((color, value) => ({
	label: getPriorityText(value, false), value, color,
}))

const Form = () => {
	const initialDueTime = useMemo(() => (
		format(addMinutes(Date.now(), 15), `yyyy-MM-dd'T'HH:mm:ss`)
	), [])

	const initialState = {priority: '0', dueTime: initialDueTime}
	const [{values}, {text, date, radio}] = useFormState(initialState)
	const { uid } = useAuthState()
	return (
		<Wrapper
			onSubmit={e => {
				e.preventDefault()
				const data = {...values, dueTime: getDateValue(values.dueTime)}
				addToDo(data, uid)
			}}
		>
			<Container>
				<Flex align='stretch' justify='space-between' style={{position: 'relative'}}>
					<div style={{flexGrow: 100, padding: '1rem 0'}}>
						<Flex>
							<RadioGroup
								radio={value => radio('priority', value)}
								value={values.priority}
								label='Priority'
								options={priorityOptions}
								style={{marginRight: '3rem'}}
							/>
							<Input
								label='Due time'
								required
								small
								{...date('dueTime')}
								type='datetime-local'
								style={{marginRight: '3rem'}}
							/>
						</Flex>
						<Input
							label='Title'
							placeholder='Order LGP with Chama…'
							required
							{...text('title')}
						/>
					</div>
					<Button type='submit'>
						<Feather icon='corner-down-left'/>
					</Button>
				</Flex>
			</Container>
		</Wrapper>
	)
}


export default Form
