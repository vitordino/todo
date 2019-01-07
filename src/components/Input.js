import React from 'react'
import styled, { css } from 'styled-components'
import { format } from 'date-fns'

const Wrapper = styled.label`
	display: block;
	margin: 0.75rem 0;
	border-bottom: ${p => !p.small && `1px solid ${p.theme.colors.base11}`};
	position: relative;
`

const Label = styled.div`
	display: block;
	font-size: 0.75rem;
	line-height: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 0.025rem;
	color: ${p => p.theme.colors.base44};
`

const Field = styled.input`
	font: inherit;
	border: 0;
	background: none;
	width: 100%;
	outline: none;
	font-size: ${p => p.small ? '0.875rem' : '1.25rem'};
	line-height: ${p => p.small ? '1rem' : '1rem'};
	color: ${p => p.small ? p.theme.colors.base66 : p.theme.colors.base88};
	font-weight: ${p => p.small && '500'};
	padding: 0.375rem 0;
	&::placeholder{
		color: ${p => p.theme.colors.base22};
	}
	${p => p.small && `@media (pointer:coarse) {
		font-size: 1rem;
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		opacity: 0;
	}`}
`

const formatValue = ({type, value}) => {
	if(type === 'datetime-local') {
		return format(value, `dd/MM/yyyy — HH:mm`)
	}
	return value
}

const Value = styled.div`
	display: none;
	@media (pointer:coarse) {
		display: block;
		font-size: 0.875rem;
		line-height: 1rem;
		color: ${p => p.theme.colors.base66};
		font-weight: 500;
		padding: 0.375rem 0;
	}
`

const Input = ({label, small, style, className, ...props}) => (
	<Wrapper small={small} style={style} className={className}>
		<Label>{label}</Label>
		<Field small={small} {...props}/>
		{small && <Value>{formatValue(props)}</Value>}
	</Wrapper>
)

export default Input
