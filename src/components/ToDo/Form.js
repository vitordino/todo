import React, { useMemo } from 'react'
import { useFormState } from 'react-use-form-state'
import styled from 'styled-components'
import { addToDo } from '../../actions'
import { useAuthState } from '../../utils/firebase-hooks'
import Container from '../Container'
import Input from '../Input'
import Feather from '../Feather'
import RadioGroup from '../RadioGroup'

const Wrapper = styled.form`
	display: block;
	background: ${p => p.theme.colors.white};
	margin-top: 2rem;
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`

const Button = styled.button`
	border: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 2rem;
	flex-grow: 1;
	background: ${p => p.theme.colors.base06};
	color: ${p => p.theme.colors.base22};
	cursor: pointer;
	&:hover, &:focus, &:active {
		background: ${p => p.theme.colors.base88};
		color: ${p => p.theme.colors.white};
	}
`

const Form = () => {
	const initialDueTime = useMemo(() => {
		const now = Date.now()
		const timezone = new Date().getTimezoneOffset() * 60 * 1000
		const localNow = new Date(now - timezone).valueOf()
		const fifteenMinutes = 15 * 60 * 1000
		return new Date(localNow + fifteenMinutes).toISOString().replace(/\..+/, '')
	}, [])

	const initialState = {priority: 0, dueTime: initialDueTime}
	const [formState, {text, select, date, radio}] = useFormState(initialState)
	const { uid } = useAuthState()
	return (
		<Wrapper
			onSubmit={e => {
				e.preventDefault()
				addToDo(formState.values, uid)
			}}
		>
			<Container>
				<Flex style={{alignItems: 'stretch', justifyContent: 'space-between'}}>
					<div style={{flexGrow: 100, padding: '1rem 0'}}>
						<Flex>
							<RadioGroup
								radio={radio}
								name='priority'
								label='Priority'
								options={[
									{value: 0, label: 'low', color: 'gold', defaultChecked: true},
									{value: 1, label: 'medium', color: 'coral'},
									{value: 2, label: 'high', color: 'firebrick'},
								]}
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
