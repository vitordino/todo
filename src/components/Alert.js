import React, {useEffect} from 'react'
import styled from 'styled-components'
import Feather from './Feather'

const getBackgroundColor = ({type, theme}) => {
	if(type === 'error') return 'red'
	if(type === 'info') return 'coral'
	if(type === 'success') return 'dodgerblue'
}

/* eslint-disable */
const Wrapper = styled.div`
	background-color: ${getBackgroundColor};
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
	margin-left: 1rem;
	color: ${p => p.theme.colors.white};
`

const Alert = ({message, options: {type}, close, style}) => {
	useEffect(() => {new Audio('/assets/sounds/pop.m4a').play()}, [])
	return (
		<Wrapper type={type} style={style}>
			<Message>{message}</Message>
			<CloseWrapper role='button' onClick={close}>
				<Feather size={18} icon='x' />
			</CloseWrapper>
		</Wrapper>
	)
}

export default Alert
