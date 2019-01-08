import React, {useEffect} from 'react'
import styled from 'styled-components'
import Feather from './Feather'
import {Paragraph} from './Text'

/* eslint-disable */
const Wrapper = styled.div`
	background-color: ${p => p.theme.colors.base88};
	color: ${p => p.theme.colors.white};
	border-radius: 0.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: ${p => p.theme.maxWidth};
	box-shadow: 0 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.02);
	padding: 0.875rem;
`
/* eslint-enable */

const Message = styled.div`
	flex: 1;
	margin: 0 1rem 0 0.75rem;
	font-weight: 500;
`

const CloseWrapper = styled.div`
	padding: 0.5rem;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${p => p.theme.colors.white};
`

const Icon = props => <Feather size={20} strokeWidth={1.75} {...props}/>

const Alert = ({message, options: {type}, close, style}) => {
	useEffect(() => new Audio('/assets/sounds/pop.m4a').play(), [])
	return (
		<Wrapper type={type} style={style}>
			{type === 'error' && <Icon icon='alert-circle' />}
			<Message>{message}</Message>
			<CloseWrapper role='button' onClick={close}>
				<Feather size={18} icon='x' />
			</CloseWrapper>
		</Wrapper>
	)
}

export default Alert
